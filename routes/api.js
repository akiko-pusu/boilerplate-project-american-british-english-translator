'use strict';

const Translator = require('../components/translator.js');
const { body } = require('express-validator');

// for Bulk escape posted data
const validateBody = [
  body('*').trim().escape()
];

module.exports = function (app) {

  // Translatorを生成
  const translator = new Translator();

  /*
    // sample data
    {
        locale: "british-to-american",
        text: "We had a party at my friend's condo."
    }
  */
  app.route('/api/translate')
    .post(validateBody, (req, res) => {
      let {
        locale,
        text
      } = req.body;

      if (text == undefined) {
        return res.send({ error: 'Required field(s) missing' });
      }

      if (text.length == 0) {
        return res.send({ error: 'No text to translate' });
      }

      if (!Translator.locales().includes(locale)) {
        return res.send({ error: 'Invalid value for locale field' });
      }

      const translated = translator.translate(text, locale);

      res.status(200)
        .type('json')
        .send({ "text": text, "translation": translated });
    });
};
