var leftRigthDifference = function(nums) {
    const n = nums.length;
    const l = [0];
    const r = [0];
    let lSum = 0;
    for (let i = 0; i < n - 1; i++) {
      lSum += nums[i];
      l.push(lSum);
    }
    let rSum = 0;
    for (let i = n - 1; i > 0; i--) {
      rSum += nums[i];
      r.unshift(rSum);
    }
    return nums.map((_, i) => Math.abs(l[i] - r[i]));
  };
  console.log(leftRigthDifference([10,4,8,3]))
  const nums=[10,4,8,3]
  console.log(nums)
  let n=nums.length
  const leftArray = new Array(n).fill(0);
  const rightArray = new Array(n).fill(0);
  const answer = new Array(n).fill(0);
  for (let i = 0, j = n - 1; i < n; i++, j--) {
    console.log(i,"i",nums[i])
    console.log(j,"j",nums[j])
  }
  const t=nums.map((num, i) =>
  Math.abs(
    nums.slice(0, i).reduce((acc, cur) => acc +
    cur, 0) -
    nums.slice(i + 1).reduce((acc, cur) => acc +
    cur, 0)
      )
    );
  console.log(t)
  const operations = ["++X","++X","X++"]
  console.log(operations[0].includes('+'),"includes")
  const tp=operations.reduce((acc,cur)=>{
  if(cur.includes('+'))++acc
  else{
    --acc
  }
  return acc
  },0)
  console.log(tp)