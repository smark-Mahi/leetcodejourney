//let s = "tree"
//let s= "Aabb"
let s="raaeaedere"
const a=[...s].reduce((obj,item)=>{
  obj[item]?obj[item]++:obj[item]=1
  return obj
},{})
console.log(a)
const arr=Object.entries(a)
arr.sort((a,b)=>{return b[1]-a[1]})
console.log(arr)
var strg=''
for(let i=0;i<arr.length;i++){
  for(let j=arr[i][1];j>0;j--){
    strg+=arr[i][0]
  }
}
console.log(strg)
const array = Array.from(5)
const array1=Array.from(Array(5)).fill(0)
console.log(array1,"arr")
var topKFrequent = function(nums, k) {
    const a=nums.reduce((obj,item)=>{
        obj[item]?obj[item]++:obj[item]=1
        return obj
    },{})
    const arr=Object.entries(a)
    const ansarr=[]
    arr.sort((a,b)=>{return b[1]-a[1]})
    for(let i=0;i<k;i++){
        ansarr.push(arr[i][0])
        }
    return ansarr
};