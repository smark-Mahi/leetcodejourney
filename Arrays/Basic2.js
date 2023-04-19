s="babab"
console.log(s.slice(0,2))
console.log(Array.from(s))
console.log(s,Array.from(s).reverse().join(""))
const yp=[...s.matchAll("b")]
console.log(yp,'yp')
const global=[...s.match(/b/g)]//return b 3 times
console.log(global,'global')
const local=[...s.match('b')]//return b 1 time
console.log(local,'local')
const y=s.matchAll(/b/g)
for(k of y){
  console.log(k,"matchall")
}
//console.log(y)
let palindrome = "";
const findAllIndexesOfChar = (val, matchChar) => {
  const findMatches = [...val.matchAll(matchChar)];
 // console.log(findMatches,"%")
  return findMatches.map(val => val.index);
}
const length = s.length;
for(let indexI = 0; indexI < length;indexI++){
  const charVal = s[indexI];
  const remainingString = s.substring(indexI +1);
  const allIndexes = findAllIndexesOfChar(remainingString, charVal);
  console.log(remainingString,charVal,allIndexes)
}