
export function caesarCipher(word, shift) {
    const stringLength = word.length;
    const newLetters = word.split("");
    const cipher = [];
    const cipheredstring = shiftString(stringLength, newLetters, cipher, shift);

    return cipheredstring;
}

function shiftString(stringLength, newLetters, cipher, shift) {
    for (let i = 0; i < stringLength; i++) {
        if (/[a-zA-Z]/.test(newLetters[i])) {
            if (
                newLetters[i].charCodeAt() + shift > 122 ||
                (/[A-Z]/.test(newLetters[i]) &&
                    newLetters[i].charCodeAt() + shift > 90)
            ) {
               let letterNum = newLetters[i].charCodeAt() - 26 + shift;
               cipher.push(String.fromCharCode(letterNum));
            } else {
                let letterNum = newLetters[i].charCodeAt() + shift;
                cipher.push(String.fromCharCode(letterNum));
            }
        } else {
            cipher.push(newLetters[i]);
        }
    }

    return cipher.join("");
}
