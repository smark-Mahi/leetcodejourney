/*let s = "abccbaacz"
console.log(s)
const sett=new Set()
for(let i in s){
  if(!sett.has(s[i])){
    sett.add(s[i])
  }
  else{
    console.log(s[i])
    break
  }
}*/
let s = "leetcode"
const ans=[...s].reduce((acc,item)=>{
  acc[item]?acc[item]++:acc[item]=1
  return acc
},{})
console.log(ans)
for(let [key,val] of Object.entries(ans)){
  if(val===1){
    console.log(s.indexOf(key))
    break
  }
}
//console.log(countchars)