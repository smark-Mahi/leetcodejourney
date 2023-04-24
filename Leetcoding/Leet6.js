let rings = "B0B6G0R6R0R6G9"
const rodRingCombinations = new Array(10).fill(new Set()).map(_ => new Set());
console.log(rodRingCombinations,"before")
let totalRodsWithAllColors = new Set();
for (let i = 0; i < rings.length; i += 2) {
  let ringColor = rings[i];
  let rodIndex = rings[i + 1];
  rodRingCombinations[rodIndex].add(ringColor);
  if (rodRingCombinations[rodIndex].size === 3)
  totalRodsWithAllColors.add(rodIndex);
    }
console.log(rodRingCombinations)
for(let i in rodRingCombinations){
  console.log(...rodRingCombinations[i],'d')
  console.log('iteration ')
}
let obj={0:[5],1:[999]}
var arr=[]
obj[0]=arr
obj[0].push("sm")
arr=[]
obj[2]=arr
obj[2].push(67)
console.log(obj)
console.log(obj[2].length===1)
var ring2count={}
for(let i=0;i<rings.length;i+=2){
  let ringcolor=rings[i]
  let rodindex=rings[i+1]
  let arr=new Set()
  if(ring2count[rodindex]){
    ring2count[rodindex].add(ringcolor)
  }
  else{
    ring2count[rodindex]=arr
    ring2count[rodindex].add(ringcolor)
  }
}
console.log(ring2count)
var count=0
for(let i in ring2count){
  console.log(...ring2count[i])
  if(ring2count[i].size===3){
    count++
  }
}
console.log(count)
let paths = [["London","New York"],["New York","sau palo"]]
console.logpaths(paths)