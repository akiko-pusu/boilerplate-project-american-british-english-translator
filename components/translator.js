const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')
/*

const Translator = require('components/translator.js');

// static method
const words = Translator.convertToWords("I am a engineer.");

// instance
const translator = new Translator();

*/
class Translator {
  // 文字列を引数に取り、配列を返します
  static convertToWords(baseString) {
    try {
      // must be validated
      return baseString.split(' ');
    } catch (err) {
      console.log("Can't split input string.");
    }
  }

  static locales() {
    return [
      'american-to-british',
      'british-to-american'
    ];
  }

  // Initialize
  constructor() {
    this.americanOnly = americanOnly;
    this.britishOnly = britishOnly;
    this.americanToBritishSpelling = americanToBritishSpelling;
    this.americanToBritishTitles = americanToBritishTitles;
  }

  // main method
  translate(text, locale) {
    let original = text;

    if (!Translator.locales().includes(locale)) {
      throw 'Invalid value for locale field';
    }

    text = this.convertLanguageByLocale(text, locale);

    if (text == original) {
      return "Everything looks good to me!";
    }
    return text;
  }

  splitWord(baseString) {
    this.word = Translator.convertToWords(baseString);
  }

  convertLanguageByLocale(text, locale) {
    if (locale == 'american-to-british') {
      return this.translateToBritish(text);
    }

    if (locale == 'british-to-american') {
      return this.translateToAmerican(text);
    }
  }

  translateToBritish(text) {
    let onlyMap = this.americanOnly;
    let spellingMap = this.americanToBritishSpelling;
    let titleMap = this.americanToBritishTitles;

    text = this.convertLanguageOnly(text, onlyMap);
    text = this.convertLanguageOnly(text, spellingMap);
    text = this.convertTitle(text, titleMap);

    text = this.convertTimeToBritish(text);

    return text;
  }

  translateToAmerican(text) {
    let onlyMap = this.britishOnly;
    let spellingMap = this.swapMap(this.americanToBritishSpelling);
    let titleMap = this.swapMap(this.americanToBritishTitles);
    text = this.convertLanguageOnly(text, onlyMap);
    text = this.convertLanguageOnly(text, spellingMap);
    text = this.convertTitle(text, titleMap);

    text = this.convertTimeToAmerican(text);

    return text;
  }

  convertLanguageOnly(text, map) {
    let keys = Object.keys(map);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let replaced = map[key];
      let regEx = new RegExp(`${key}([ |\.])`, "ig");

      let replacedString = `<span class="highlight">${replaced}</span>$1`;
      text = text.replace(regEx, replacedString);
    }
    return text;
  }

  // Handle Time way
  convertTimeToBritish(text) {
    let re = /(\d{1,2}):(\d{1,2})/;
    return text.replace(re, '<span class="highlight">$1\.$2</span>');
  }

  convertTimeToAmerican(text) {
    let re = /(\d{1,2})\.(\d{1,2})/;
    return text.replace(re, '<span class="highlight">$1:$2</span>');
  }

  convertTitle(text, map) {
    let keys = Object.keys(map);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let replaceTitle = map[key].charAt(0).toUpperCase() + map[key].slice(1);

      let regEx = new RegExp(`${key} `, "ig");
      let replacedString = `<span class="highlight">${replaceTitle}</span> `;
      text = text.replace(regEx, replacedString);
    }
    return text;
  }

  swapMap(obj) {
    let retval = []
    let keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = obj[key];
      retval.push([key, value])
    }
    let result = {}
    for (let i = 0; i < retval.length; i++) {
      result[`${retval[i][1]}`] = retval[i][0];
    }
    return result;
  }
}

module.exports = Translator;
