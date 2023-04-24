//cardPoints = [1,2,3,4,5,6,1], k = 3
//cardPoints=[1,79,80,1,1,1,200,1],k=3
//cardPoints = [9,7,7,9,7,7,9], k = 7
/*cardPoints=[100,40,17,9,73,75],k=3
//cardPoints = [2,2,2], k = 2
let start=end=windsize=0,maxx=0,ans=0
while(end<k){
  maxx+=cardPoints[end]
  end++
}
let p=k-1
n=cardPoints.length-1
while(p>=0){
  console.log(n,'d')
  maxx-=cardPoints[p--]
  maxx+=cardPoints[n--]
  ans=Math.max(ans,maxx)
  console.log(maxx)
}
console.log(maxx)*/
//let s = "BAAA", k = 2
//let s="KRSCDCSONAJNHLBMDQGIFCPEKPOHQIHLTDIQGEKLRLCQNBOHNDQGHJPNDQPERNFSSSRDEQLFPCCCARFMDLHADJADAGNNSBNCJQOF",k=4
//let s='EOEMQLLQTRQDDCOERARHGAAARRBKCCMFTDAQOLOKARBIJBISTGNKBQGKKTALSQNFSABASNOPBMMGDIOETPTDICRBOMBAAHINTFLH',k=7
let s = "ABBBCFDDDDDE", k = 2
//let s='ABCAAAEFGHAAI',k=3
//let s='ABCDEFANEIGKAPQEEERSATLMUA',k=3
/*const alph=[...s].reduce((acc,cur,i)=>{
  acc[cur]=acc[cur]?++acc[cur]:1
  return acc
},{})
console.log(alph)
let vals=keys=0
for(const [key,val] of Object.entries(alph)){
  if(vals<val){
    keys=key
    vals=val
  }
}
console.log(keys,"%vv")
console.log('fff')
let s1=e1=ans=anyalpcount=keyscount=0
while(e1<s.length){
  if(s[e1]===keys)keyscount++
  else anyalpcount++
  //console.log('any',anyalpcount,keyscount)
  if(keyscount===s.length)ans=s.length
  if(s[e1]!=keys && s[e1]===s[e1-1])anyalpcount--
  if(anyalpcount<=k){
    console.log(e1,s1,1,e1-s1+1,'s',anyalpcount,'lesstanequal')
    console.log(ans,'ans')
    ans=Math.max(ans,e1-s1+1)
  }
  while(s[s1]===s[s1-1]){
    s1++
  }
  while(anyalpcount>k){
    console.log(anyalpcount, "anyalpcountbefore",e1,s1)
    if(s[s1]===keys)keyscount--
    else anyalpcount--
    s1++
    //console.log(anyalpcount,'anyalpcount',e1,s1)
  }
  e1++
}
console.log(ans)*/
console.log(s)
let map = {}
let repeated_chars = 1
let start= 0
let end= 0
let longest_substr = 1
while (end <s.length) {
  map[s[j]] = map[s[end]] + 1 || 1
  repeated_chars= Math.max(repeated_chars, map[s[end]])
  if (end - start + 1 - repeated_chars<= k) {
    longest_substr = Math.max(longest_substr, end - start + 1)
  } else {
    map[s[start]] -= 1
    start++
  }
  ens++
}
console.log(longest_substr)