console.log('eat'==='eat')
//const s="tea"
//console.log([...s].sort().join(""))
//let s = "anagram", t = "nagaram"
let s = "ab", t = "a"
const tt=[...t]
var isana=false
for(let i=0;i<s.length;i++){
  if(tt.includes(s[i])){
    console.log(tt)
    let indexx=tt.indexOf(s[i])
    console.log(indexx)
    tt.splice(indexx,1)
  }
}
console.log(tt)
if(tt.length===0 && s.length===t.length){
  console.log(!isana)
}
else{
  console.log(isana)
}
let str="eat"
console.log("hmm",[...str].sort((a,b)=>a>b?-1:1))
let sorted = str.split('').sort((a,b)=>a > b ? -1 : 1).join('');
console.log(sorted)
var groupAnagrams = function(strs) {
    let answer=[];
    let map = new Map();
    //let string=''
    for (let i=0;i<strs.length;i++){
        //string=strs[i];
        if(!map.has(strs[i].split('').sort().join(''))){
            map.set(strs[i].split('').sort().join(''),[strs[i]]);// sorted value store in the string
        }else{
             map.get(strs[i].split('').sort().join('')).push(strs[i]);
        }
    }
     answer=[...map.values()]
     return answer;
};