let candies = [2,3,5,1,3], extraCandies = 3,arr=[]
console.log(candies,extraCandies)
const mapp=candies.map((item)=>{
  if(extraCandies+item>=Math.max(...candies)){
    return true
  }else{
    return false
  }
})
console.log(mapp)
console.log(2+Number('1'))
let nums = [1,15,6,3]
let digitsum=0,elementsum=0
const digit=nums.map((item)=>{
  String(item).split("").map((cur)=>{
    digitsum+=Number(cur)
  })
  elementsum+=item
})
console.log(digitsum,elementsum)
let word1 = ["a", "cb"], word2 = ["ab", "c"]
const w1=word1.reduce((acc,cur)=>{
  return acc+=cur
},'')
const w2=word2.reduce((acc,cur)=>{
  return acc+=cur
},'')
console.log(w1===w2)
const grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
console.log(grid.length)
const matrix = new Array(grid.length -2).fill(0).map(() => new Array(grid[0].length-2).fill(0));
console.log(grid.keys(),'grid')
console.log(matrix,"mattix")
for(const j of grid.keys()){
  console.log(grid[j],'keys')
}
console.log(matrix)
const r=[4,5,6,7]
console.log(r.slice(0,3))
let s = "Hello how are you Contesta"
console.log(s.split(" ").slice(0,4))