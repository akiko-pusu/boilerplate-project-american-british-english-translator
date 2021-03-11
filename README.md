# [Quality Assurance Projects - American / British Translator](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/american-british-translator)

## American / British Translatorの課題

- All logic can go into /components/translator.js
- Complete the /api/- Translate route in /routes/api.js
- Create all of the unit/functional tests in tests/1_unit-tests.js and tests/2_functional-tests.js
- See the JavaScript files in /components for the different spelling and terms your application should - Translate
- To run the tests on Repl.it, set NODE_ENV to test without quotes in the .env file
- To run the tests in the console, use the command npm run test. To open the Repl.it console, press Ctrl+Shift+P (Cmd if on a Mac) and type "open shell"

Repl.itを使うことが前提になっていますが、今回もローカル開発環境で作成し、Gitpodで検証していきます。

### テストの内容

**Write the following tests in tests/1_unit-tests.js:**

- Translate Mangoes are my favorite fruit. to British English
- Translate I ate yogurt for breakfast. to British English
- Translate We had a party at my friend's condo. to British English
- Translate Can you toss this in the trashcan for me? to British English
- Translate The parking lot was full. to British English
- Translate Like a high tech Rube Goldberg machine. to British English
- Translate To play hooky means to skip class or work. to British English
- Translate No Mr. Bond, I expect you to die. to British English
- Translate Dr. Grosh will see you now. to British English
- Translate Lunch is at 12:15 today. to British English
- Translate We watched the footie match for a while. to American English
- Translate Paracetamol takes up to an hour to work. to American English
- Translate First, caramelise the onions. to American English
- Translate I spent the bank holiday at the funfair. to American English
- Translate I had a bicky then went to the chippy. to American English
- Translate I've just got bits and bobs in my bum bag. to American English
- Translate The car boot sale at Boxted Airfield was called off. to American English
- Translate Have you met Mrs Kalyani? to American English
- Translate Prof Joyner of King's College, London. to American English
- Translate Tea time is usually around 4 or 4.30. to American English
- Highlight - Translation in Mangoes are my favorite fruit.
- Highlight - Translation in I ate yogurt for breakfast.
- Highlight - Translation in We watched the footie match for a while.
- Highlight - Translation in Paracetamol takes up to an hour to work.

**Write the following tests in tests/2_functional-tests.js:**

- Translation with text and locale fields: POST request to /api/- Translate
- Translation with text and invalid locale field: POST request to /api/- Translate
- Translation with missing text field: POST request to /api/- Translate
- Translation with missing locale field: POST request to /api/- Translate
- Translation with empty text: POST request to /api/- Translate
- Translation with text that needs no translation: POST request to /api/- Translate

-------

ということで、npm runでは  ``tests/2_functional-tests.js`` が実行できるようにする。
また、``tests/1_unit-tests.js`` はコマンドライン（タームなるから）npm run testで動くようにする。

#### Unit test

未実装の段階で、以下の通り。

```bash
$ ./node_modules/mocha/bin/mocha --timeout 5000 --require @babel/register --recursive --exit --ui tdd tests/1_unit-tests.js


  0 passing (2ms)
```

### Functionalテスト

未実装の段階で、以下の通り。

```bash
 $ ./node_modules/mocha/bin/mocha --timeout 5000 --require @babel/register --recursive --exit --ui tdd tests/2_functional-tests.js
Listening on port 3000
Running Tests...


  0 passing (0ms)
```

### freeCodeCamp側のテスト

<https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/american-british-translator>を通してテストをする場合は、NODE_ENV=testの状態で起動すること。
``/_api/get-tests`` のエンドポイントに対してリクエストを発行し、帰ってきた結果を配列として読み込んでチェックするテストがあるからです。

- freeCodeCamp側のテストブラウザテストは以下のソースコードが該当
  - <https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/challenges/chinese/06-quality-assurance/quality-assurance-projects/american-british-translator.md>
