function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  console.log(makeCounter()())
  
  
  let v=45
  
  let obj={
    name:"sumeria",
    g(){
      return this
  }
  }
  console.log(obj.g())

  ///////
  let s="cat"
let t="tar"
let len=s.length
s=s.split("")
t=t.split("")
console.log(s)
console.log(t.includes(s[0]))
console.log(typeof(NaN))
const a=null
const b =undefined
console.log(a==b)
console.log(a===b)
console.log(typeof a)
console.log(typeof b)
console.log(typeof(2))
console.log(typeof 2)