export function capitlize(str) {
    const firstLetter = str.charAt(0);
    const restLetters = str.slice(1);

    str = firstLetter.toUpperCase() + restLetters;
    return str;
}

export function revertIt(str) {
    return str.split("").reverse().join("");
}

export const calculator = {
    add: (x, y) => {
        return x + y;
    },
    subtract: (x, y) => {
        return x - y;
    },
    multiply: (x, y) => {
        return x * y;
    },
    divied: (x, y) => {
        return x / y;
    },
};

export function caesarCipher(word, shift) {
    const stringLength = word.length;
    const newLetters = word.split("");
    const cipher = [];

    for (let i = 0; i < stringLength; i++) {
        if (/[a-zA-Z]/.test(newLetters[i])) {
            if (
                newLetters[i].charCodeAt() + shift > 122 ||
                (/[A-Z]/.test(newLetters[i]) &&
                newLetters[i].charCodeAt() + shift > 90)
            ) {
                let letterNum = newLetters[i].charCodeAt() - 26 + shift;
                const result = String.fromCharCode(letterNum);
                cipher.push(result);
            } else {
                let letterNum = newLetters[i].charCodeAt() + shift;
                const result = String.fromCharCode(letterNum);
                cipher.push(result);
            }
        } else {
            cipher.push(newLetters[i]);
        }
    }

    return cipher.join("");
}

export function analyzeArray(arr) {
    const min= Math.min(...arr);
    const max= Math.max(...arr);
    const average= getAverage(arr);

    const object= {
        average,
        min,
        max,
        length:arr.length,
    }
    return object;
}


function getAverage(arr) {
    const sum= arr.reduce((sum, curr) => {
       return sum+curr; 
    },0);

    return sum/arr.length;
}