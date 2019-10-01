const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morzeArray = expr.match( /[\d \*]{10}/g );
    let message = '';
    let morzeSymbol;

    morzeArray.forEach( function( symbolCode, idx, srcArr ) {
        if ( symbolCode === "**********" ) {
            morzeSymbol = symbolCode.replace( /^\*{10}/, ' ' );
            message += morzeSymbol;
        }
        else {
            morzeSymbol = symbolCode.replace( /^0+/, '' );
            let symArr = morzeSymbol.match( /\d{2}/g );
            let symString = '';
            for ( let letter of symArr ) {
                symString += ( letter === '10' ) ? '.' : '-';
            }
            message += MORSE_TABLE[ symString ];
        }
    });
    return message;
}

module.exports = {
    decode
}


