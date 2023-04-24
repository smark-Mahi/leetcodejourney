const str=""
//let s = "aaaabbbbcccc"
let s='rat'
let hashmap=new Map()
//hashmap.set('bk',1)
console.log(...hashmap)
const splitt=s.split("")
let val=0
splitt.map((item)=>{
  if(hashmap.has(item)){
    hashmap.set(item,val++)
  }
  else{
    val=1
    hashmap.set(item,val)
  }
})
console.log(...hashmap)
hashmap.set('a',2)
console.log(...hashmap,'^')
const obj={}
splitt.map((item)=>{
  if(obj[item]){
    obj[item]++
  }
  else{
    obj[item]=1
  }
})
console.log(obj,'obj')
let sett=new Set(s)
console.log(...sett)
console.log([...sett],'yewala')
const arr=[...sett]
console.log(arr,'arr')
const ans=arr.reduce((acc,cur)=>{
  [...new Set(s)].map((item)=>{
    if(obj[item]>0){
      obj[item]--
      acc+=item
    }
  })
  for(i=arr.length-1;i>=0;i--){
    if(obj[arr[i]]>0){
      obj[arr[i]]--
      acc+=arr[i]
    }
  }
  return acc
},'')
console.log(ans)
const map = {}
for (const c of s) {
    map[c] = (map[c] || 0) +1
  }
console.log(map)
console.log([...s])