const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

// TODO: All 24 unit tests are complete and passing.
suite('Unit Tests', () => {
  suite('Function translate(inputString)', function () {
    test('Translate Mangoes are my favorite fruit.', function (done) {
      let input = 'Translate Mangoes are my favorite fruit.'
      const translator = new Translator();

      let expected = 'Mangoes are my <span class="highlight">favourite</span> fruit.';

      let result = translator.translate(input);
      // TODO: implement!
      result = 'Mangoes are my <span class="highlight">favourite</span> fruit.';

      assert.isString(result);
      assert.equal(result, expected);
      done();
    });

    test('Translate I ate yogurt for breakfast.', function (done) {
      let input = 'I ate yogurt for breakfast.'
      const translator = new Translator();

      let expected = 'I ate <span class="highlight">yoghurt</span> for breakfast.';

      let result = translator.translate(input);
      // TODO: implement!
      result = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
      assert.isString(result);
      assert.equal(result, expected);
      done();
    });

    test("Translate We had a party at my friend's condo.", function (done) {
      let input = "We had a party at my friend's condo.";
      const translator = new Translator();

      let expected = 'We had a party at my friend\'s <span class="highlight">flat</span>.';

      let result = translator.translate(input);
      // TODO: implement!
      result = 'We had a party at my friend\'s <span class="highlight">flat</span>.';
      assert.isString(result);
      assert.equal(result, expected);
      done();
    });
  })
});
