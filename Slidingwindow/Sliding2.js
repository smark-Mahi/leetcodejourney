/*let nums = [5], k = 1
let i=0,average=0,maxavg=-Infinity,j=k
while(j<=nums.length){
  for(let c=i;c<j;c++){
    average+=nums[c]
  }
  maxavg=Math.max(maxavg,average/k)
  i++
  j++
  average=0
}*/
//console.log(maxavg)
let nums2 = [1,2,3,1], k2 = 3
/*let ii=0,jj=ii+1
function shortt(nums1,k1){
  while(ii<nums1.length){
    if(nums1[ii]===nums1[jj]){
      if(Math.abs(ii-jj)<=k1){
        return true
      }
    }
    jj++
    if(jj===nums1.length){
      ii++
      jj=ii+1
    }
  }
  return false
}
console.log(shortt(nums2,k2))*/
console.log(nums2)
let obj={}
for(let i=0;i<nums2.length;i++){
  if(!obj[nums2[i]]){
    obj[nums2[i]]=[i]
  }
  else{
    obj[nums2[i]].push(i)
  }
}
console.log(Object.entries(obj),obj)
let mapp=new Map()
for(let y=0;y<nums2.length;y++){
  if(!mapp.has(nums2[y])){
    mapp.set(nums2[y],[y])
  }
  else{
    mapp.set(nums2[y],[y,...mapp.get(nums2[y])])
  }
}
console.log(Object.fromEntries(mapp),'mapptoobject')
const y=[...mapp.entries()].map(([key,val])=>{
return key,val  
})
console.log(y)