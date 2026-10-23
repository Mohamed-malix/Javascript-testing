import {capitlize} from "./capitalize.js"

it("capitalize", () => {
    let str= "name";
    expect(capitlize(str)).toBe("Name");
})
