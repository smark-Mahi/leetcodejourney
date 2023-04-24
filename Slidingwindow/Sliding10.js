//let nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
//nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
nums=[1,1,1,0,0,0],k=2
//nums=[1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1],k=8
//let nums=[0,0,0,1],k=4
//nums=[1,1,0,1,1],k=1
let s=0,e=nums.indexOf(0),maxlen=-Infinity,zerocount=0
while(e<nums.length){
  if(nums[e]===0){
    zerocount++
  }
  while(zerocount>k){
    if(nums[s]===0){
      zerocount--
    }
    s++
  }
  maxlen=Math.max(maxlen,nums.slice(s,e+1).length)
  e++
}
console.log(maxlen,zerocount)
let y=9
if(y){
  if(y>6){
    while(y<10){
      console.log(y)
      y++
    }
  }
  console.log('no')
}
let y=9
if(y){
  if(y>6){
    while(y<10){
      console.log(y)
      y++
    }
  }else{
    console.log('no')
  }…