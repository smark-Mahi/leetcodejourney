let sentence = "thequickbrownfoxjumpsoverthelazydog"
console.log(sentence.length)
console.log(sentence.split("").sort().join(""))
const s=[9,5,6]
s.sort((a,b)=>{return a-b})
console.log(s)
//let sentence="leetcode"
//console.log(sentence.split("").sort().join(""))
const obj={
  'a':true,
  'b':true,
  'c':true,
  'd':true,
  'e':true,
  'f':true,
  'g':true,
  'l':true
}
let iss=false
sentence.split("").map((item)=>{
  if(obj[item])iss=true
})
console.log(iss)
const s1="agggbbccc"
const sett=new Set(s1)
console.log(sett,'d')
console.log(Array.from(sett),'sett')
const setarr=Array.from(sett)
const y=setarr.sort().join("")
console.log(y)
console.log(...sett)