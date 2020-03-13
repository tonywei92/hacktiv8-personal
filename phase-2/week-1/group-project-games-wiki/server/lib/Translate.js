const { Translate } = require('@google-cloud/translate').v2;

const translate = new Translate();

function startTranslate(text, target) {
    // Translates the text into the target language. "text" can be a string for
    // translating a single piece of text, or an array of strings for translating
    // multiple texts.

    return translate.translate(text, target)
        .then(result => {
            let [translations] = result;
            translations = Array.isArray(translations) ? translations : [translations];
            return translations[0];
        })
}

module.exports = startTranslate;