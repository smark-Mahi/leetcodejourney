let num = "1210"
//let num="030"
const ans=Object.entries([...num]).reduce((acc,[key,val],i)=>{
  acc[key]=val
  return acc
},{})
console.log(ans)
const numArray = num.split('')
const numFreq = numArray.reduce((acc,item)=>acc.set(item,acc.get(item) + 1 || 1),new Map())
console.log(...numFreq)
console.log(numArray,'f')
const countt=[...num].reduce((acc,cur,i)=>{
  acc[cur]=acc[cur]?++acc[cur]:1
  return acc
},{})
 console.log(countt)
 const obj2=[...num].reduce((ac,cur,i)=>{
   console.log(countt[i],"%%")
   if(countt[i]){
     ac[i]=countt[i]
   }
   else{
     ac[i]=0
   }
   return ac
 },{})
 console.log(obj2)
 var isnum=true
 for(let i=0;i<num.length;i++){
   console.log(num[i],obj2[i],"obj2")
     if(num[i]!=obj2[i]){
       isnum=false
       break
     }
 }
 console.log(isnum)
 let nums = [5,3,6,1,12], original = 3
 for(let i=0;i<nums.length;i++){
   if(nums.indexOf(original)!=-1){
     original=2*nums[nums.indexOf(original)]
   }
   else{
     console.log(original )
     break
   }
 }
let arr = [3,1,7,11]
//let arr = [10,2,5,3]
//let arr=[-2,0,10,-19,4,6,-8]
var isj=false
for(let i=0;i<arr.length;i++){
  if(arr.includes(2*arr[i]) && i!=arr.indexOf(2*arr[i])){
    isj=true
  }
}
console.log(isj,'isj')
const f=arr.find((item,i)=>{
  if(arr.includes(2*item) && i!=arr.indexOf(2*item)){
    return true
  }
})
console.log(f!=undefined,"$")