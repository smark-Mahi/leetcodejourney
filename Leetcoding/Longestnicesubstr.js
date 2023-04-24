/*const longestNiceSubstring = (s) => {
  if (s.length < 2) return "",'f';
  let arr = [...s];
  let set = new Set(arr)
  console.log(...set)
  for (let i = 0; i < arr.length; i++) {
    const c = arr[i];
    console.log(set.has(c.toUpperCase()) && set.has(
      c.toLowerCase()))
    if (set.has(c.toUpperCase()) && set.has(
      c.toLowerCase())) continue;
      const sub1 = longestNiceSubstring(s.substring(0, i));
      console.log(sub1,'sub1','tttt')
      const sub2 = longestNiceSubstring(s.substring(i + 1));
      console.log(sub2,"sub2")
      return sub1.length >= sub2.length ? sub1: sub2;
      }
      return s; 
}*/
//console.log(longestNiceSubstring("YazaAay"))

let s='yazaAaY'
console.log(s.substring(0,1),"substring")
s=[...s]
function issubstring(ss){
  for(const m of ss){
    if(m===m.toUpperCase() && !ss.includes(m.toLowerCase()) || m===m.toLowerCase() && !ss.includes(m.toUpperCase())){
      return false
      }
  }
  return true
  }
let s1=''
let maxsubstr=''
for(let c=0;c<s.length;c++){
  s1=''
  s1+=s[c]
  for(let j=c+1;j<s.length;j++){
    s1+=s[j]
    console.log(s1,'s1')
    if(issubstring(s1) && maxsubstr.length<s1.length)maxsubstr=s1
    }
}
console.log(maxsubstr,'max')