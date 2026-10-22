
export  function capitlize(str) {
    const firstLetter= str.charAt(0);
    const restLetters= str.slice(1);

    str= firstLetter.toUpperCase() +restLetters;
    return str;
}

export function revertIt(str) {
    return str.split("").reverse().join("");

}

export const calculator = {
    add: (x, y) => {
        return x+y;
    },
    subtract:(x, y) => {
        return x-y;
    },
    multiply:(x, y) => {
        return x*y;
    },
    divied: (x, y) => {
        return x/y;
    }
}

export function caesarCipher(word, shift) {
   const newLetters= word.split("")
   .forEach((letter) => letter + shift);
//    const cipher= newLetters.join("");

   return newLetters;
}