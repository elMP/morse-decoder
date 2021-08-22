const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  // write your solution here
  let sentence = '';
  for (let i = 0; i < expr.length; i += 10) {
    sentence += findLetter(expr.substr(i, 10));
  }

  return sentence;
}

function findLetter(expr) {
  if (expr === '**********')
    return ' ';

  let letter = '';
  for (let i = 0; i < expr.length; i += 2) {
    let oneSymbol = expr.substr(i, 2);

    if (oneSymbol[0] !== '0' || oneSymbol[1] !== '0') {
      if (oneSymbol === '10')
        oneSymbol = '.';
      if (oneSymbol === '11')
        oneSymbol = '-';
      letter += oneSymbol;
    }
  }
  return MORSE_TABLE[letter];
}

module.exports = {
  decode
}
