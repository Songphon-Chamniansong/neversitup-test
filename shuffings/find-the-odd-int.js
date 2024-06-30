function FindTheOddInt(input) {
  if (input.length <= 1) {
    return input[0];
  }

  // Create key value obj
  let set = {};

  let result = 0;
  input.forEach(element => {
    // Check key
    if(set.hasOwnProperty(element)) {
      set[element] = set[element] + 1
    } else {
      set[element] = 1
    }
  });

  Object.keys(set).forEach(x => {
    if (set[x] % 2 === 1) {
      result = x;
    }
  });
  return result;
}


console.log(FindTheOddInt([0]));
console.log(FindTheOddInt([1]));
console.log(FindTheOddInt([1,1,2]));
console.log(FindTheOddInt([0,1,0,1,0]));
console.log(FindTheOddInt([1,2,2,3,3,3,4,3,3,3,2,2,1]))