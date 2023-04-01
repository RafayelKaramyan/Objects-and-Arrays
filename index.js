//1.Transform an array of elements (a number, a string) into an array where each item is represented by a number of element appearances before the element index in the original array (including the current index).
const duplicates = (nums) =>
  nums.map((value, index) => {
    const segment = nums.slice(0, index + 1);
    return segment.filter((v) => v === value).length;
  });

console.log(duplicates([1, 2, 1, 1, 3]));
console.log(duplicates(["a", "a", "aa", "a", "aa"]));
