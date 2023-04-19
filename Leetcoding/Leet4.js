//let jewels = "aA", stones = "aAAbbbb"
let jewels = "z", stones = "ZZ"
const mapp=new Map()
jewels.split("").map((item)=>{mapp.set(item,true)})
for(let i of mapp.keys()){
  console.log(i)
}
const r=stones.split("").reduce((acc,cur)=>{
  if(mapp.has(cur))acc++
  return acc
},0)
console.log(r)