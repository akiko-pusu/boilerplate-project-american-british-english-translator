const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  test('Translation with text and locale fields: POST request to /api/translate', (done) => {
    const output = {
      text: 'Lunch is at 12:15 today.',
      translation: 'Lunch is at <span class="highlight">12.15</span> today.'
    };

    chai.request(server)
      .post('/api/translate')
      .send({
        locale: 'american-to-british',
        text: output.text
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.translation, output.translation);
        done();
      });
  })

  test('Translation with text and invalid locale field: POST request to /api/translate', (done) => {
    const output = {
      text: 'Lunch is at 12:15 today.',
      translation: 'Lunch is at <span class="highlight">12.15</span> today.'
    };

    chai.request(server)
      .post('/api/translate')
      .send({
        locale: 'american-to-spanish',
        text: output.text
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Invalid value for locale field')
        done();
      });
  })

  test('Translation with missing text field: POST request to /api/translate', (done) => {
    const output = {
      text: 'Lunch is at 12:15 today.',
      translation: 'Lunch is at <span class="highlight">12.15</span> today.'
    };

    chai.request(server)
      .post('/api/translate')
      .send({
        locale: 'american-to-british',
        text: ''
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'No text to translate')
        done();
      });
  })

  test('Translation with missing locale field: POST request to /api/translate', (done) => {
    const output = {
      text: 'Lunch is at 12:15 today.',
      translation: 'Lunch is at <span class="highlight">12.15</span> today.'
    };

    chai.request(server)
      .post('/api/translate')
      .send({
        text: output.text
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Invalid value for locale field')
        done();
      });
  })

  test('Translation with empty text: POST request to /api/translate', (done) => {
    const output = {
      text: 'Lunch is at 12:15 today.',
      translation: 'Lunch is at <span class="highlight">12.15</span> today.'
    };

    chai.request(server)
      .post('/api/translate')
      .send({
        locale: 'american-to-british',
        text: ''
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'No text to translate');
        done();
      });
  })

  test('Translation with text that needs no translation: POST request to /api/translate', (done) => {
    const output = {
      text: 'Lunch is at 12:15 today.',
      translation: 'Lunch is at <span class="highlight">12.15</span> today.'
    };

    chai.request(server)
      .post('/api/translate')
      .send({
        locale: 'british-to-american',
        text: output.text
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.translation, 'Everything looks good to me!');
        done();
      });
  })
});
