let nums=[8,20,6,2,20,17,6,3,20,8,12],firstLen=5,secondLen=4
//let nums = [2,1,5,6,0,9,5,0,3,8], firstLen = 4,secondLen = 3
//let nums = [0,6,5,2,2,5,1,9,4], firstLen = 1, secondLen = 2
let start1=0,end1=0,start2=end1+1,lmax=0,wholemax=0
while(end1<nums.length){
  lmax+=nums[end1]
  if(nums.slice(start1,end1+1).length===firstLen){
    arr=[...nums.slice(0,start1),...nums.slice(end1+1)]
    let j=0,s=0,mmax=0
    while(j<arr.length){
      mmax+=arr[j]
      if(arr.slice(s,j+1).length===secondLen){
        wholemax=Math.max(wholemax,lmax+mmax)
        mmax-=arr[s]
        s++
      }
      j++
    }
    lmax-=nums[start1]
    start1++
  }
  end1++
}
console.log(wholemax)