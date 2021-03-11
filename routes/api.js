'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      console.log('request');
      res.status(200)
      .type('json')
      .send('{ "translation": "Apple" }');
    });
};
