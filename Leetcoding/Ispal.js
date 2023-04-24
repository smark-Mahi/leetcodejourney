const s="babab"
let res=""
let reslen=0
function palindrome(l,r){
  while(r<s.length){
    console.log(l,r)
    let pal=s.substring(l,r)
    console.log(pal,'pal')
    if(pal===Array.from(pal).reverse().join("")){
      res=pal
      console.log(res,'res')
    }
    r+=1
  }
  reslen=Math.max(reslen,res.length)
  return reslen
}
for(let i=0;i<s.length;i++){
  let result=palindrome(i,i)
}
console.log(reslen)