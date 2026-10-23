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
