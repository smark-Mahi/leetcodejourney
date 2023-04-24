//nums = [1,0,1,0,1], goal = 2
//nums=[0,1,0,0,1,1,0],goal=2
nums=[0,1,0,0,0,1,0,1],goal=2

//nums=[0,1,1,1,1],goal=3
//nums=[0,0,0,0,0,0,1,0,0,0],goal=0//27
//nums = [0,0,0,0,0], goal = 0
let subarrcount=0
/*if(!nums.includes(1)){
  for(let i=0;i<nums.length;i++){
    subarrcount+=i+1
  }
}*/
let end=0,start=0,count=0, count1=0
for(let i=0;i<nums.length;i++){
  let count=0
  for(let j=i;j<nums.length;j++){
    count+=nums[j]
    if(count===goal)subarrcount++
  }
}
console.log(subarrcount)
/*nums = [-1,-1,1], k = 1
let start=0,end=0,subarr=0,sum=0
while(sum<k){
  if(!nums[end]<0){
    sum+=nums[end]
  }
  console.log(sum,'sum',end)
  if(sum===k){
    subarr++
  }
  if(sum<k){
    end++
  }
}
console.log(subarr,"first",end,sum)
while(end++<nums.length){
  console.log(end,"endval")
  sum+=nums[end]
  console.log(sum,"doing sum")
  while(sum>k){
    sum-=nums[start]
    start++
  }
  console.log(sum,'sumchng')
  if(sum===k){
    subarr++
 }
 console.log(subarr)
}
console.log(subarr)


let subarrcount1=0
let end=0,start=0,count1=0
while(end<nums.length){
  count1+=nums[end]
  if(count1===goal)subarrcount1++
  while(count1>goal){
    count1-=nums[start]
  }
  while(count1+nums[end])
  while(nums[start++]===0){
    subarrcount1++
  }
  
  end++
}
console.log(subarrcount1)*/
A=[0,1,0,0,0,1,0,1],S=2
//A=[0,1,0,0,1,1,0],S=2
let lo = 0, hi = 0,sum = 0,cnt = 0,prev=-1
    // deal with S > 0 but cases like[0,0,0,0,0]
/*function Allzero(n){
  let cnt = res=0
  console.log(cnt,res,'beforefor')
  for(let i = 0; i < A.length; i++ ) {
    console.log(cnt,res,"infor")
    if ( A[i] == 0 ) {
      cnt++;
      res += cnt;
    }
    else {
      cnt = 0;
      }
  }
  return res;
}
console.log(Allzero(S),'d')*/
while ( lo < A.length && A[lo] == 0 ){
  lo++;
  hi++;
}
while ( hi < A.length ) {
  if ( sum + A[hi] == S ) {
    sum += A[hi];
    cnt += 1 + (lo - prev - 1);
    console.log(cnt,'cnttt',lo,prev, (1 + (lo - prev - 1)))
    hi++;
  }
  else if ( sum + A[hi] < S ) {
    sum += A[hi];
    hi++;
  }
  else {
    sum -= A[lo];
    prev = lo;
    lo++;
    while ( A[lo] == 0 ){
      lo++;
      }
    }
}
console.log(cnt)

let n = arr.size(); // take the size of the array
let prefix=[arr[0]]; // make a prefix array to store prefix sum
// making our prefix array
for(int i = 1; i < n; i++){
  prefix[i] = arr[i] + prefix[i - 1];
}
var map = new Map()
map.set(0,1)
let ans = 0; // to store the number of our subarrays having sum as 'k'
for(int i = 0; i < n; i++) // traverse from the prefix array
{
  if(prefix[i] == k) // if it already becomes equal to k, then increment ans
  {
    ans++;
  }
  // now, as we discussed find whether (prefix[i] - k) present in map or n
   if(map.has(sum-k)){
         count += map.get(sum-k)
     }
    let val = map.has(sum) ? map.get(sum) : 0
    map.set(sum, val+1)
}