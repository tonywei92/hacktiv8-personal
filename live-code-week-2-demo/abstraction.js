function assertString(input) {
    const isString = (typeof input === 'string' || input instanceof String);

    if (!isString) {
        let invalidType;
        if (input === null) {
            invalidType = 'null';
        } else {
            invalidType = typeof input;
            if (invalidType === 'object' && input.constructor && input.constructor.hasOwnProperty('name')) {
                invalidType = input.constructor.name;
            } else {
                invalidType = `a ${invalidType}`;
            }
        }
        throw new TypeError(`Expected string but received ${invalidType}.`);
    }
}

function merge(obj = {}, defaults) {
    for (const key in defaults) {
        if (typeof obj[key] === 'undefined') {
            obj[key] = defaults[key];
        }
    }
    return obj;
}
function isByteLength(str, options) {
    assertString(str);
    let min;
    let max;
    if (typeof (options) === 'object') {
        min = options.min || 0;
        max = options.max;
    } else { // backwards compatibility: isByteLength(str, min [, max])
        min = arguments[1];
        max = arguments[2];
    }
    const len = encodeURI(str).split(/%..|./).length - 1;
    return len >= min && (typeof max === 'undefined' || len <= max);
}
const default_fqdn_options = {
    require_tld: true,
    allow_underscores: false,
    allow_trailing_dot: false,
};

function isFQDN(str, options) {
    assertString(str);
    options = merge(options, default_fqdn_options);

    /* Remove the optional trailing dot before checking validity */
    if (options.allow_trailing_dot && str[str.length - 1] === '.') {
        str = str.substring(0, str.length - 1);
    }
    const parts = str.split('.');
    for (let i = 0; i < parts.length; i++) {
        if (parts[i].length > 63) {
            return false;
        }
    }
    if (options.require_tld) {
        const tld = parts.pop();
        if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
            return false;
        }
        // disallow spaces
        if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
            return false;
        }
    }
    for (let part, i = 0; i < parts.length; i++) {
        part = parts[i];
        if (options.allow_underscores) {
            part = part.replace(/_/g, '');
        }
        if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
            return false;
        }
        // disallow full-width chars
        if (/[\uff01-\uff5e]/.test(part)) {
            return false;
        }
        if (part[0] === '-' || part[part.length - 1] === '-') {
            return false;
        }
    }
    return true;
}
const ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
const ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str, version = '') {
    assertString(str);
    version = String(version);
    if (!version) {
        return isIP(str, 4) || isIP(str, 6);
    } else if (version === '4') {
        if (!ipv4Maybe.test(str)) {
            return false;
        }
        const parts = str.split('.').sort((a, b) => a - b);
        return parts[3] <= 255;
    } else if (version === '6') {
        const blocks = str.split(':');
        let foundOmissionBlock = false; // marker to indicate ::

        // At least some OS accept the last 32 bits of an IPv6 address
        // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
        // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
        // and '::a.b.c.d' is deprecated, but also valid.
        const foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
        const expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

        if (blocks.length > expectedNumberOfBlocks) {
            return false;
        }
        // initial or final ::
        if (str === '::') {
            return true;
        } else if (str.substr(0, 2) === '::') {
            blocks.shift();
            blocks.shift();
            foundOmissionBlock = true;
        } else if (str.substr(str.length - 2) === '::') {
            blocks.pop();
            blocks.pop();
            foundOmissionBlock = true;
        }

        for (let i = 0; i < blocks.length; ++i) {
            // test for a :: which can not be at the string start/end
            // since those cases have been handled above
            if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
                if (foundOmissionBlock) {
                    return false; // multiple :: in address
                }
                foundOmissionBlock = true;
            } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
                // it has been checked before that the last
                // block is a valid IPv4 address
            } else if (!ipv6Block.test(blocks[i])) {
                return false;
            }
        }
        if (foundOmissionBlock) {
            return blocks.length >= 1;
        }
        return blocks.length === expectedNumberOfBlocks;
    }
    return false;
}

const default_email_options = {
    allow_display_name: false,
    require_display_name: false,
    allow_utf8_local_part: true,
    require_tld: true,
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
const splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)<(.+)>$/i;
const emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
const gmailUserPart = /^[a-z\d]+$/;
const quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
const emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
const quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
const defaultMaxEmailLength = 254;
/* eslint-enable max-len */
/* eslint-enable no-control-regex */

/**
 * Validate display name according to the RFC2822: https://tools.ietf.org/html/rfc2822#appendix-A.1.2
 * @param {String} display_name
 */
function validateDisplayName(display_name) {
    const trim_quotes = display_name.match(/^"(.+)"$/i);
    const display_name_without_quotes = trim_quotes ? trim_quotes[1] : display_name;

    // display name with only spaces is not valid
    if (!display_name_without_quotes.trim()) {
        return false;
    }

    // check whether display name contains illegal character
    const contains_illegal = /[\.";<>]/.test(display_name_without_quotes);
    if (contains_illegal) {
        // if contains illegal characters,
        // must to be enclosed in double-quotes, otherwise it's not a valid display name
        if (!trim_quotes) {
            return false;
        }

        // the quotes in display name must start with character symbol \
        const all_start_with_back_slash =
            display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;
        if (!all_start_with_back_slash) {
            return false;
        }
    }

    return true;
}

class Validator {
    static isEmail(str, options) {
        assertString(str);
        options = merge(options, default_email_options);

        if (options.require_display_name || options.allow_display_name) {
            const display_email = str.match(splitNameAddress);
            if (display_email) {
                let display_name;
                [, display_name, str] = display_email;
                // sometimes need to trim the last space to get the display name
                // because there may be a space between display name and email address
                // eg. myname <address@gmail.com>
                // the display name is `myname` instead of `myname `, so need to trim the last space
                if (display_name.endsWith(' ')) {
                    display_name = display_name.substr(0, display_name.length - 1);
                }

                if (!validateDisplayName(display_name)) {
                    return false;
                }
            } else if (options.require_display_name) {
                return false;
            }
        }
        if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
            return false;
        }

        const parts = str.split('@');
        const domain = parts.pop();
        let user = parts.join('@');

        const lower_domain = domain.toLowerCase();

        if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {
            /*
              Previously we removed dots for gmail addresses before validating.
              This was removed because it allows `multiple..dots@gmail.com`
              to be reported as valid, but it is not.
              Gmail only normalizes single dots, removing them from here is pointless,
              should be done in normalizeEmail
            */
            user = user.toLowerCase();

            // Removing sub-address from username before gmail validation
            const username = user.split('+')[0];

            // Dots are not included in gmail length restriction
            if (!isByteLength(username.replace('.', ''), { min: 6, max: 30 })) {
                return false;
            }

            const user_parts = username.split('.');
            for (let i = 0; i < user_parts.length; i++) {
                if (!gmailUserPart.test(user_parts[i])) {
                    return false;
                }
            }
        }

        if (!isByteLength(user, { max: 64 }) ||
            !isByteLength(domain, { max: 254 })) {
            return false;
        }

        if (!isFQDN(domain, { require_tld: options.require_tld })) {
            if (!options.allow_ip_domain) {
                return false;
            }

            if (!isIP(domain)) {
                if (!domain.startsWith('[') || !domain.endsWith(']')) {
                    return false;
                }

                let noBracketdomain = domain.substr(1, domain.length - 2);

                if (noBracketdomain.length === 0 || !isIP(noBracketdomain)) {
                    return false;
                }
            }
        }

        if (user[0] === '"') {
            user = user.slice(1, user.length - 1);
            return options.allow_utf8_local_part ?
                quotedEmailUserUtf8.test(user) :
                quotedEmailUser.test(user);
        }

        const pattern = options.allow_utf8_local_part ?
            emailUserUtf8Part : emailUserPart;

        const user_parts = user.split('.');
        for (let i = 0; i < user_parts.length; i++) {
            if (!pattern.test(user_parts[i])) {
                return false;
            }
        }

        return true;
    }
}














































console.log(Validator.isEmail('tony@hacktiv8.com'))



