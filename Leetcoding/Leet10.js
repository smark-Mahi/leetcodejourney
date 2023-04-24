//let s = "abacbc"
let s = "aaabb"
const ans=[...s].reduce((acc,item)=>{
  if(acc[item]){
    acc[item]++
  }
  else{
    acc[item]=1
  }
  return acc
},{})
console.log(ans)
const occurence=ans[s[0]]
var iss=false
const arr=[...new Set(s)]
console.log(arr.length)
console.log(occurence)
let i=0
while(ans[arr[i]]===occurence){
  if(i==arr.length-1){
    console.log(i,"/")
    iss=true
  }
  i++
}
console.log(iss)
const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
  }