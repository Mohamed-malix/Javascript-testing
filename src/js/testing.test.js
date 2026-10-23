import {capitlize, revertIt, calculator, caesarCipher} from "./testing.js";

it("capitalize", () => {
    let str= "name";
    expect(capitlize(str)).toBe("Name");
})

it("revert the string", () => {
    let stringTo= "string";
    expect(revertIt(stringTo)).toEqual("gnirts");
})


//calculator testing
it("testing the calcualtor adding", () => {
    expect(calculator.add(2,2)).toBe(4);
})

it("testing subtracting", () => {
    expect(calculator.subtract(5,3)).toBe(2);
})

it("testing multiplying", () => {
    expect(calculator.multiply(5,3)).toBe(15);
})

it("testing division", () => {
    expect(calculator.divied(15,3)).toBe(5);
})


//caesarCipher
it("CaesarCipher testing", () => {
    expect(caesarCipher('HeLLo', 3)).toEqual('KhOOr');
});

it("CaesarCipher non-alphabetical characters", () => {
    expect(caesarCipher('Hello, World!', 3)).toEqual('Khoor, Zruog!');
});
