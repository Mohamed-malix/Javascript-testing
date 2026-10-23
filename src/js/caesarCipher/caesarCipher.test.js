import {caesarCipher} from "./caseCipher.js"


it("CaesarCipher testing", () => {
    expect(caesarCipher('HeLLo', 3)).toEqual('KhOOr');
});

it("CaesarCipher non-alphabetical characters", () => {
    expect(caesarCipher('Hello, World!', 3)).toEqual('Khoor, Zruog!');
});

it("Casesarciper with the last letters", () => {
    expect(caesarCipher('YzX',3)).toEqual('BcA');
});
