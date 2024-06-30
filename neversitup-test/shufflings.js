function shuffling(input) {
  
  if (input.length <= 1) {
    return [input];
  }

  const result = [];
  const uniqueInput = new Set();

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    // Avoid duplicating permutations
    if (uniqueInput.has(char)) {
      continue;
    }
    uniqueInput.add(char);

    const ranotherString = input.slice(0, i) + input.slice(i + 1);
    // Recursive
    const anotherShuffer = shuffling(ranotherString);

    for (const shuffer of anotherShuffer) {
      result.push(char + shuffer);
    }
  }

  return result;
}

// Example usage:
console.log(shuffling('a'));    // ['a']
console.log(shuffling('ab'));   // ['ab', 'ba']
console.log(shuffling('abc'));  // ['abc','acb','bac','bca','cab','cba']
console.log(shuffling('aabb')); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
console.log(shuffling('aaaa')); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
console.log(shuffling('aaab')); // [ 'aaab', 'aaba', 'abaa', 'baaa' ]
