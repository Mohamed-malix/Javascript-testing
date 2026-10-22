
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
   const stringLength=word.length;
   const newLetters= word.split("")
   const cipher=[];

   for(let i=0; i<stringLength; i++){
     let letterNum= newLetters[i].charCodeAt()+ shift;
     const result= String.fromCharCode(letterNum);
     cipher.push(result);
    }

   return cipher;
}
