//let nums = [3,8,1,3,2,1,8,9,0], firstLen = 3, secondLen = 2
//let nums = [0,6,5,2,2,5,1,9,4], firstLen = 1, secondLen = 2
//let nums = [2,1,5,6,0,9,5,0,3,8], firstLen = 4,secondLen = 3
//let nums=[4,5,14,16,16,20,7,13,8,15],firstLen=3,secondLen=5
let nums=[8,20,6,2,20,17,6,3,20,8,12],firstLen=5,secondLen=4
console.log(nums,"nums")
let s=0,e=0,arrsum=0,sum=0
let arr;
while(e<=nums.length){
  sum+=nums[e]
  if(nums.slice(s,e+1).length===firstLen){
    if(!(arrsum>sum)){
      arrsum=Math.max(arrsum,sum)
      arr=s
    }
    sum-=nums[s]
    s++
  }
  e++
}
nums.splice(arr,firstLen)
let s2=0,e2=0,arrsum2=0,sum2=0
let arr2;
while(e2<=nums.length){
  sum2+=nums[e2]
  if(nums.slice(s2,e2+1).length===secondLen){
    if(!(arrsum2>sum2)){
      arrsum2=Math.max(arrsum2,sum2)
    }
    sum2-=nums[s2]
    s2++
  }
  e2++
}
console.log(arrsum2+arrsum)
let a=[8,9,0,6,7]
a.splice(1,3)
console.log(a)