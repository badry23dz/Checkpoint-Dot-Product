
const dotProduct = (v1, v2) => {
  let result = 0;
  for (let i = 0; i < v1.length; i++) {
    result += v1[i] * v2[i];
  }
  return result;
};
​
const ortoVector = (vectors) => {
  let orth = [];
  for (let i = 0; i < vectors.length; i++) {
    for (let j = i + 1; j < vectors.length; j++) {
      if (dotProduct(vectors[i], vectors[j]) === 0) {
        orth.push([vectors[i], vectors[j]]);
      }
    }
    return orth
  }
}