//let customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3
let customers = [3], grumpy = [1], minutes = 1
//let customers = [8,8], grumpy = [1,0], minutes = 2
//let customers = [4,10,10], grumpy = [1,1,0], minutes = 2
let maxcust=0
for(let i=0;i<grumpy.length;i++){
  if(grumpy[i]===0){
    maxcust+=customers[i]
  }
}
let end=0,start=0,maxx=0
while(end<minutes){
  if(grumpy[end]===1)maxcust+=customers[end]
  maxx=Math.max(maxx,maxcust)
  end++
}
while(end<grumpy.length){
  if(grumpy[start]===1)maxcust-=customers[start]
  if(grumpy[end]===1)maxcust+=customers[end]
  maxx=Math.max(maxx,maxcust)
  end++
  start++
}
console.log(maxx)
//let nums = [4,2,4,5,6]
let nums=[187,470,25,436,538,809,441,167,477,110,275,133,666,345,411,459,490,266,987,965,429,166,809,340,467,318,125,165,809,610,31,585,970,306,42,189,169,743,78,810,70,382,367,490,787,670,476,278,775,673,299,19,893,817,971,458,409,886,434]
let hashset=new Set(),sm=0,max1=0
for(let i=0,left=0;i<nums.length;i++){
  while(hashset.has(nums[i])){
    hashset.delete(nums[left])
    sm-=nums[left]
    left++
    console.log(sm,'suminner')
    //max1=Math.max(max1,sm)
  }
  hashset.add(nums[i])
  sm+=nums[i]
  console.log(sm,'sum')
  max1=Math.max(max1,sm)
}
console.log(max1)