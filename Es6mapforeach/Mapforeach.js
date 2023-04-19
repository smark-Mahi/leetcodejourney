arr=[5,6,7,8,9,0]
console.log(Math.max(...arr))
arr.forEach(i=>{
  console.log(i)
})

arr.map((el,ind)=>{
  console.log(el)
  console.log("index"+" "+ ind)
})

console.log("maaaaaapppp")
const mapp=arr.map(ele=>{
  return ele>7})
console.log(mapp,'mapp')

console.log("maaaaaaaaaaaaaaaappppp")
const y=arr.map(e=>1+e)
console.log(y)

arr.forEach(e=>console.log("foreach"+" "+ e))

const m=arr.map(ele=>{
  if(ele>7)return ele})
console.log(m,'mp')
///////
let array=[55,66,777]
const maxim=Math.max(...array)
console.log(maxim)
const arrr = [1, 2, 3];
const maxi = Math.max(...arrr);
console.log(maxi)
//console.log(`maximum is ${max}`)