export function capitlize(str) {
    const firstLetter = str.charAt(0);
    const restLetters = str.slice(1);

    str = firstLetter.toUpperCase() + restLetters;
    return str;
}