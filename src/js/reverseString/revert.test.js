import {revertIt} from "./revert.js"

it("revert the string", () => {
    let stringTo= "string";
    expect(revertIt(stringTo)).toEqual("gnirts");
})