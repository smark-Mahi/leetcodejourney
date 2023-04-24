let arr=[[1],[1,1]]
for(let i=0;i<5-2;i++){
  let toparr=arr.slice(-1)[0]
  let newarr=new Array(toparr.length+1).fill(1)
  for(let j=1;j<newarr.length-1;j++){
    newarr[j]=toparr[j-1]+toparr[j]
  }
  arr.push(newarr)
}
console.log(arr)
var generate = function(rowIndex) {
    let arr=[[1]]
    if(rowIndex===1)return arr
    for(let i=0;i<rowIndex;i++){
        let toparr=arr.slice(-1)[0]
        let newarr=new Array(toparr.length+1).fill(1)
        for(let j=1;j<newarr.length-1;j++){
            newarr[j]=toparr[j-1]+toparr[j]
        }
        arr.push(newarr)
    }
    return arr[rowIndex]
};
console.log(generate(3))
console.log(new Set('xbb'.split("")).size)
let s="aababcabc"
//let s = "xyzzaz"
let i=0,j=3
console.log(...new Set(s.slice(i,j).split("")))
const arr1=new Array()
while(j<=s.length){
  if(new Set(s.slice(i,j).split("")).size===3){
    arr1.push(s.slice(i,j))
  }
  i++
  j++
}
console.log(arr1)
let n=64
const x = parseInt(Math.log(n) / Math.log(4));
console.log(x)
function ispoww(n){
  function poww(x){
    if(n===1)return true
    console.log(Math.pow(4,x))
    if(Math.pow(4,x)===n)return true
    if(Math.pow(4,x)>n)return false
    let iss=poww(x+1)
    return iss
  }
  return poww//poww(1)
}
console.log(ispoww(64)(1))
let s2 = "YazaAay"
console.log(s2.split("z"))
function ispoww(n){
  function poww(x){
    if(n===1)return true
    console.log(Math.pow(4,x))
    if(Math.pow(4,x)===n)return true
    if(Math.pow(4,x)>n)return false
    return poww(x+1)
  }
  return poww//poww(1)
}
console.log(ispoww(64)(1))
let s2 = "YazaAay"
console.log(s2.split("z"))