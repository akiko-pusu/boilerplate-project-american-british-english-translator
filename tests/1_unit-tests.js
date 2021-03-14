const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

// TODO: All 24 unit tests are complete and passing.
suite('Unit Tests', () => {
  // To British
  suite('Function translate(inputString) to British', function () {
    let locale = 'american-to-british';
    const translator = new Translator();

    test('Translate Mangoes are my favorite fruit.', function (done) {
      let input = 'Mangoes are my favorite fruit.'
      let expected = 'Mangoes are my <span class="highlight">favourite</span> fruit.';

      let result = translator.translate(input, locale);

      assert.isString(result);
      assert.equal(result, expected);
      done();
    });

    test('Translate I ate yogurt for breakfast. to British English', function (done) {
      let input = 'I ate yogurt for breakfast.'
      let expected = 'I ate <span class="highlight">yoghurt</span> for breakfast.';

      let result = translator.translate(input, locale);

      assert.isString(result);
      assert.equal(result, expected);
      done();
    });

    test("Translate We had a party at my friend's condo. ", function (done) {
      let input = "We had a party at my friend's condo.";

      let expected = 'We had a party at my friend\'s <span class="highlight">flat</span>.';
      let result = translator.translate(input, locale);

      assert.isString(result);
      assert.equal(result, expected);
      done();
    });

    test("Translate Can you toss this in the trashcan for me?", function (done) {
      let input = "Can you toss this in the trashcan for me?";
      let expected = 'Can you toss this in the <span class="highlight">bin</span> for me?';
      let result = translator.translate(input, locale);

      assert.isString(result);
      assert.equal(result, expected);
      done();
    });

    test("Translate The parking lot was full.", function (done) {
      let input = "The parking lot was full.";
      let expected = 'The <span class="highlight">car park</span> was full.';
      let result = translator.translate(input, locale);

      assert.isString(result);
      assert.equal(result, expected);
      done();
    });

    test("Translate Like a high tech Rube Goldberg machine.", function (done) {
      let input = "Like a high tech Rube Goldberg machine.";
      let expected = 'Like a high tech <span class="highlight">Heath Robinson device</span>.';
      let result = translator.translate(input, locale);

      assert.isString(result);
      assert.equal(result, expected);
      done();
    });

    test("Translate To play hooky means to skip class or work.", function (done) {
      let input = "To play hooky means to skip class or work.";
      let expected = 'To <span class="highlight">bunk off</span> means to skip class or work.';
      let result = translator.translate(input, locale);

      assert.isString(result);
      assert.equal(result, expected);
      done();
    });

    test("Translate No Mr. Bond, I expect you to die.", function (done) {
      let input = "Mr. Bond, I expect you to die.";
      let expected = '<span class="highlight">Mr</span> Bond, I expect you to die.';
      let result = translator.translate(input, locale);

      assert.isString(result);
      assert.equal(result, expected);
      done();
    });

    test("Translate Dr. Grosh will see you now.", function (done) {
      let input = "Dr. Grosh will see you now.";
      let expected = '<span class="highlight">Dr</span> Grosh will see you now.';
      let result = translator.translate(input, locale);

      assert.isString(result);
      assert.equal(result, expected);
      done();
    });

    test("Translate Lunch is at 12:15 today.", function (done) {
      let input = "Lunch is at 12:15 today.";
      let expected = 'Lunch is at <span class="highlight">12.15</span> today.';
      let result = translator.translate(input, locale);

      assert.isString(result);
      assert.equal(result, expected);
      done();
    });
  });

  // To American
  suite('Function translate(inputString) to British', function () {
    let locale = 'british-to-american';
    const translator = new Translator();

    test('Translate We watched the footie match for a while.', function (done) {
      let input = 'We watched the footie match for a while.'
      let expected = 'We watched the <span class="highlight">soccer</span> match for a while.';

      let result = translator.translate(input, locale);

      assert.isString(result);
      assert.equal(result, expected);
      done();
    });

    test('Translate Paracetamol takes up to an hour to work.', function (done) {
      let input = 'Paracetamol takes up to an hour to work.'
      let expected = '<span class="highlight">Tylenol</span> takes up to an hour to work.';

      let result = translator.translate(input, locale);

      assert.isString(result);
      assert.equal(result, expected);
      done();
    });

    test("Translate First, caramelise the onions.", function (done) {
      let input = "First, caramelise the onions.";

      let expected = 'First, <span class="highlight">caramelize</span> the onions.';
      let result = translator.translate(input, locale);

      assert.isString(result);
      assert.equal(result, expected);
      done();
    });

    test("Translate I spent the bank holiday at the funfair.", function (done) {
      let input = "I spent the bank holiday at the funfair.";
      let expected = 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
      let result = translator.translate(input, locale);

      assert.isString(result);
      assert.equal(result, expected);
      done();
    });

    test("Translate I had a bicky then went to the chippy.", function (done) {
      let input = "I had a bicky then went to the chippy.";
      let expected = 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
      let result = translator.translate(input, locale);

      assert.isString(result);
      assert.equal(result, expected);
      done();
    });

    test("Translate I've just got bits and bobs in my bum bag.", function (done) {
      let input = "I've just got bits and bobs in my bum bag.";
      let expected = 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';
      let result = translator.translate(input, locale);

      assert.isString(result);
      assert.equal(result, expected);
      done();
    });

    test("Translate The car boot sale at Boxted Airfield was called off.", function (done) {
      let input = "The car boot sale at Boxted Airfield was called off.";
      let expected = 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
      let result = translator.translate(input, locale);

      assert.isString(result);
      assert.equal(result, expected);
      done();
    });

    test("Translate Have you met Mrs Kalyani?", function (done) {
      let input = "Have you met Mrs Kalyani?";
      let expected = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
      let result = translator.translate(input, locale);

      assert.isString(result);
      assert.equal(result, expected);
      done();
    });

    test("Translate Prof Joyner of King's College, London.", function (done) {
      let input = "Prof Joyner of Kings College London.";
      let expected = '<span class="highlight">Prof.</span> Joyner of Kings College London.';
      let result = translator.translate(input, locale);

      assert.isString(result);
      assert.equal(result, expected);
      done();
    });

    test("Translate Tea time is usually around 4 or 4.30.", function (done) {
      let input = "Tea time is usually around 4 or 4.30.";
      let expected = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
      let result = translator.translate(input, locale);

      assert.isString(result);
      assert.equal(result, expected);
      done();
    });
  });

  suite('Function translate(inputString) to British has Highlight', function () {
    let locale = 'american-to-british';
    const translator = new Translator();

    test('Translate Mangoes are my favorite fruit.', function (done) {
      let input = 'Mangoes are my favorite fruit.'
      let result = translator.translate(input, locale);

      assert.match(result, /<span class="highlight">favourite<\/span>/, 'regexp matches');
      done();
    });

    test('Translate I ate yogurt for breakfast.', function (done) {
      let input = 'I ate yogurt for breakfast.'
      let result = translator.translate(input, locale);

      assert.match(result, /<span class="highlight">yoghurt<\/span>/, 'regexp matches');
      done();
    });

    test('Translate We watched the footie match for a while.', function (done) {
      let locale = 'british-to-american';
      let input = 'We watched the footie match for a while.'
      let result = translator.translate(input, locale);

      assert.match(result, /<span class="highlight">soccer<\/span>/, 'regexp matches');
      done();
    });

    test('Translate Paracetamol takes up to an hour to work.', function (done) {
      let locale = 'british-to-american';
      let input = 'Paracetamol takes up to an hour to work.'
      let result = translator.translate(input, locale);

      assert.match(result, /<span class="highlight">Tylenol<\/span>/, 'regexp matches');
      done();
    });
  });
});
