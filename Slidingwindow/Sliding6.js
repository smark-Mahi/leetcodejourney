let blocks = "WBBWWBBWBW", k = 7
//let blocks = "WBWBBBW", k = 2
//let blocks="WBWW" ,k=2
let i=0,j=k
let whitecount=Infinity
while(j<=blocks.length){
  let white=0
  for(let c=i;c<j;c++){
    if(blocks[c]==='W')white++
  }
  whitecount=Math.min(whitecount, white)
  console.log(whitecount )
  i++
  j++
}
console.log(whitecount)
console.log(240%24,240%40)
let num = 240, kk= 2
//num=''+num
console.log(num.toString())
num=num.toString()
let m=0,count=0
for(let n=kk;n<=num.length;n++){
  if(num%Number(num.substring(m,n))===0)count++
  m++
}
console.log(count,'cny')
let nums = [90], kkk = 1
nums.sort((a,b)=>{return a-b})
let l=0,mindiff=Infinity 
let jj=kkk-1
while(jj<nums.length){
  mindiff=Math.min(mindiff,nums[jj]-nums[l])
  l++
  jj++ 
}
console.log(mindiff)
console.log(51/4,5/1)