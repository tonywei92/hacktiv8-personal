var validator = (function () {
    var constructor = function (value, name) {
        this.value = value;
        this.name = name ? name : null;
        this.validation = [];
        this.matches = [];
    }

    constructor.prototype.required = function () {
        this.validation.push("required");
        return this;
    }

    constructor.prototype.numeric = function () {
        this.validation.push('numeric');
        return this;
    }

    constructor.prototype.email = function () {
        this.validation.push('email');
        return this;
    }

    constructor.prototype.match = function (value) {
        this.matches.push(value);
        this.validation.push("match");
        return this;
    }

    constructor.prototype.validate = function () {
        var loop = true;
        var error = null;
        var i = 0;
        while (loop && i < this.validation.length) {
            switch (this.validation[i]) {
                case "required":
                    if (!this.value) {
                        loop = false;
                        error = new Error(`${this.name ? this.name : "value"} is required`);
                    }
                    break;
                case "numeric":
                    if (isNaN(this.value)) {
                        loop = false;
                        error = new Error(`${this.name ? this.name : "value"} is not numeric`);
                    }
                    break;
                case "email":
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (!re.test(String(this.value).toLowerCase())) {
                        loop = false;
                        error = new Error(`${this.name ? this.name : "value"} not match email format`);
                    }
                    break;
                case "match":
                    for (var j = 0; j < this.match.length; j++) {
                        if (this.matches[j] !== this.value) {
                            loop = false;
                            error = new Error(`${this.name ? this.name : "value"} not match`)
                            break;
                        }
                    }
                    break;
            }
            i++;
        }

        return {
            valid: loop,
            error: error
        }
    }

    /**
        * Start input value to validate
        * @param {Any} value 
        * @param {String} [name] - Optional, will be used in error messages
        * 
        */
    var value = function (value, name) {
        if (value) {
            return new constructor(value, name);
        }
        else {
            return new constructor(null, value);
        }
    }

    var validateSchema = function (schemaObj) {
        var errors = [];
        for (var key in schemaObj) {
            if (!schemaObj[key].name) {
                schemaObj[key].name = key;
            }
            var result = schemaObj[key].validate();
            if (!result.valid) {
                errors.push(result.error);
            }
        }
        return {
            valid: errors.length === 0,
            errors: errors
        }
    }

    return {
        value: value,
        validateSchema: validateSchema
    }
})();