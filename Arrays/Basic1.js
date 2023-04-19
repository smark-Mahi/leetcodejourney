arr=[5,6,7,8,9,1]
const result=arr.filter((item)=>item>5).map((items)=>items+2).reduce((acc,itm)=>acc+itm)
console.log(result)

const funcexp=function(a,b){
  console.log(a,b+a)
}
funcexp(1,2)
function aur(x=6){
  console.log(x)
}
aur(7)
const obj={
  name:'ark',
  age:'20',
  bff:"sumeria",
  coder:"pro",
  getdetails(){
    const mine="coder"
    console.log(`${this.name} is ${this.age} years old`)
  },
  getdata:function(){
    console.log(`${this.name}'s bff is ${this.bff}`)
  },
  arrowfunc:()=>{
    console.log(this)
  }
}
obj.years=18
obj.rr='ark'
obj['rr']='smark'
obj["$"]=4
console.log(obj)
const val={bff:"sumeria mahi"}
obj.getdetails()
obj.getdata.call(val)
obj.arrowfunc()

console.log(hosting)
var hosting=5

//console.log(lethosting)
//let lethosting=55


let nesarr=[1,[1,2,3],[4,5]];
let newflat=[]
function flat(nes){
  nes.forEach((ele)=>{
    if(Array.isArray(ele)){
      flat(ele)
    }
    else{
      newflat.push(ele)
    }
  })
}
flat(nesarr)
console.log(newflat)