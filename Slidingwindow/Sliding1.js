//let nums = [0,0,0,1,0,0,1,0,0,0], k = 2
//let nums=[2044,96397,50143],k=1
let nums=[1,1,2,1,1],k=3
const arr=nums.reduce((acc,item,i)=>{
  if(item%2!==0){
    acc.push(1)
  }else{
    acc.push(0)
  }
  return acc
},[])
console.log(arr)
let s=0,e=0,c=0,odd=0,next=0
while(e<arr.length){
  console.log(arr[e],e,"ee")
  odd+=arr[e]
  while(odd===k){
    console.log(c,e,'count')
    next=e
    c++
    while(arr[++next]!==1 && next<arr.length){
      console.log(c,'ff')
      c++
    }
    if(arr[s]===1){
      odd--
    }
    s++
  }
  e++
}
console.log(c)