let paths=[["pYyNGfBYbm","wxAscRuzOl"],["kzwEQHfwce","pYyNGfBYbm"]]
const destCity = paths => {
  const obj=paths.reduce((acc,[from,to])=>{
    acc[from]=to
    return acc
  },{})
  return paths.find(([,to])=>{
    if(!obj[to])return to
  })
};
console.log(destCity(paths))
const fromm=new Set()
const too=new Set()
paths.map(([from,to])=>{
  fromm.add(from)
  too.add(to)
})
console.log(...fromm,"fromm")
console.log(...too,"too")
const ans=Array.from(too).reduce((acc,item)=>{
  if(Array.from(fromm).indexOf(item)===-1){
    acc=item
  }
  return acc
},'')
console.log(ans)
const h=Array.from(fromm)
const y=Array.from(too)
let em=''
const an=Array.from(too).map((item,)=>{
  console.log(item,"item",!h[item],!h.includes(item))
  if(!h.includes(item)){
    em=item
  }
})
console.log(em,"an")