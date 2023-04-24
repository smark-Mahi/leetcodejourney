let arr = [2,2,2,2,5,5,5,8], k = 3, threshold=4
let currSum = arr.slice(0,k).reduce((a,c) => a + c, 0)
console.log(currSum)
let total = currSum / k >= threshold
//console.log(total)
for(let i = k; i < arr.length; i++){
  console.log(total,"before")
  currSum += arr[i] - arr[i-k]
  total += currSum / k >= threshold
  console.log(total,"after")
}
for(let i=0,j=2;j<arr.length;i++,j++){
  console.log(i,j)
}
console.log(arr)
let i=0,currsum=0,avgcount=0,windsize=k-1,j=0
while(j<arr.length){
  currsum+=arr[j]
  if(j===windsize){
    if(currsum/k>=threshold){
      avgcount++
    }
    i++
    j=i-1
    windsize++
    currsum=0
  }
  j++
}
console.log(avgcount,"avgcnt")
/*let s ='aaabccc'
const validChar = (char) => char.a > 0 && char.b > 0 && char.c > 0;
console.log(validChar({a:3,b:2,c:3}),"char")
let map = new Map();
let count = 0;
let left = 0;
for (let i = 0; i < s.length; i++) {
  if (map.has(s[i])) {
    map.set(s[i], map.get(s[i]) + 1);
  } else {
    map.set(s[i], 1);
  }
  while (map.size === 3) {
    console.log(...map,left,i,'beforemap')
    map.set(s[left], map.get(s[left]) - 1);
    console.log(...map,left,"mapp")
    if(map.get(s[left]) === 0) {
      map.delete(s[left]);
    }
    left++;
    count += s.length - i;
    console.log(count,"count")
  }
  console.log(...map,"aftermap")
}
console.log(count)*/
let ss="aaabccc"
let countt=0,start=0
for(let j=2;j<ss.length;j++){
  while(new Set(ss.substring(start,j+1)).size===3){
    if(ss.includes('a') && ss.includes('b') && ss.includes('c')){
      countt+=ss.length-j
    }
    start++
  }
}
console.log(countt,'count')
let nums=[5,6,7,55,99]
let largest;
let secondLargest;
largest = nums[0];
for (let num of nums) {
  if (num > largest) {
    secondLargest = largest;
    largest = num;
  }
}
console.log(secondLargest, "secondLargest")