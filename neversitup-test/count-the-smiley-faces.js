function countSmileys(input) {
  let count = 0;

  input.forEach(element => {
    if (element.length >= 2 && element.length <= 3) {
      if (validateSmileyFace(element)) {
        count += 1;
      }
    }
  });

  return count;
}

function validateSmileyFace(face) {
  const validEyes = [':', ';'];
  const validNose = ['-', '~'];
  const validSmiling = [')', 'D'];
  if (face.length === 2 || (face.length === 3 && validNose.includes(face[1]))) {
    return validEyes.includes(face[0]) && validSmiling.includes(face[face.length -1]);
  }
  return false;
}

console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));     // should return 3;
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;
console.log(countSmileys([':::DDD', ';]', ':[', ';*', ':$', ';-D'])); // should return 1;
