'use strict';

const Translator = require('../components/translator.js');

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
    .post((req, res) => {
      let {
        locale,
        text
      } = req.body;

      const translated = translator.translate(text, locale);

      res.status(200)
        .type('json')
        .send({ "translation": translated });
    });
};
