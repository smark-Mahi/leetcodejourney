let nums = [1,2,3,1,1,3]
console.log(nums)
const r=nums.reduce((acc,cur,i)=>{
nums.slice(i+1).map((item)=>{
if(cur===item)acc++})
return acc},0)
console.log(r)
const accounts = [[1,5],[7,3],[3,5]]
const val=[]
const m=accounts.map((item)=>{
  let vall=0
  const forr=item.forEach((items)=>{
    vall+=items
  })
  val.push(vall)
})
console.log(m)
console.log(Math.max(...val))
let nums1 = [1,2,3,4]
console.log(nums1)
let newarr=[]
const k=nums1.map((item,i)=>{
  let val=0
  nums1.slice(0,i+1).map((cur)=>{
    val+=cur
  })
  newarr.push(val)
})
console.log(newarr,k)