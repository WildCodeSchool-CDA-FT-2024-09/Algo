import Arr from "../arr";

describe("Array", () => {
  it("should create an array", () => {
    const newArray = new Arr();

    expect(newArray.value).toHaveLength(0);
  });

  it("should had an element in the array", () => {
    const newArray = new Arr();
    const result = newArray.push("a");

    console.log(result);
    expect(newArray.value).toHaveLength(1);
    expect(result).toEqual(expect.any(Number));
  });

  it("should filter element on the array", () => {
    const newArray = new Arr();
    newArray.push("ab");
    newArray.push("abc");
    newArray.push("abcd");
    newArray.push("abcde");

    const result = newArray.filter((el: string) => el.length > 2);

    expect(result).toHaveLength(3);
  });
});
