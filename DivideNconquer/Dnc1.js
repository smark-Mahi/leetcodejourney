var majorityElement = function(nums) {
    return majorityElementRec(nums,0,nums.length-1)
  };
  function majorityElementRec(nums,lo,hi){
    if(lo===hi){
      return nums[lo]
      
    }
    let mid=Math.floor((lo+hi)/2)
    let l=majorityElementRec(nums,lo,mid)
    let r=majorityElementRec(nums,mid+1,hi)
    if(l===r) return l
    let lCount=count(nums,l,lo,hi)
    let rCount=count(nums,r,lo,hi)
    return lCount>rCount ? l:r
  }
  function count(nums,num,lo,hi){
    let count=0;
    for(let i=lo;i<=hi;i++){
      if(nums[i]===num){
        count++
      }
    }
    return count
  }
  console.log(majorityElement([2,2,1,1,1,2,2]))