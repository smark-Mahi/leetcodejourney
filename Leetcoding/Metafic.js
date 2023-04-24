console.log("metafic")
let arr=[7,8,9,0]
console.log(arr)
let i=0;
let j=arr.length-1
while(i<j){
let temp=arr[i]
arr[i]=arr[j]
arr[j]=temp
i++
j--
}
console.log(arr)
let a="12321";
let p=0;
let q=a.length-1;
var ispal=false;
while(p<=q && a[p]===a[q]){
if(p==q || p+1==q){
ispal=true
break
}
p++;
q--;
}
console.log(ispal)

arr.sort(function(a,b){return a-b})
console.log(arr)
t=arr.slice(1,5)
console.log(t.reverse())

arr8=[89,100,55]
y=arr8.indexOf(Math.max(...arr8))
arr8.splice(y,1)
console.log(arr8)
console.log(y)

var prime=5;
var digits=[2,4,3,5,6,7,9,0,1]
var hashmap={}
for(elements of digits){
  if(elements%2===0){
    hashmap['even']=hashmap["even"]? hashmap["even"]+1:1
  }
  else{
    hashmap["odd"]=hashmap["odd"]? hashmap["odd"]+1:1
  }
}
console.log(hashmap)

let aa=4;//aa+b
let b=5;//aa-b
aa=aa^b//aa-b
b=aa^b
aa=aa^b
console.log(aa,b)


let rev=1234
let rev_num=''
while(rev){
  rev_num+=rev%10
  rev=Math.floor(rev/10)
}
console.log(rev_num,"rev")


let h="welcome to JavaScript ";
console.log(h.split("").reverse().join('').split(" ").reverse().join(" "))
const sarr=h.split(" ")
//for(key of sarr)
console.log(sarr)

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


let duparr=[8,8,9,0,9,6,5,6]
let newset=new Set(duparr)
console.log(newset)
newset.add(1)
newset.add(2)
let newarrrr=[...newset]
console.log(newarrrr)
newarrrr.push.apply(newarrrr,[9,9,9,9])
console.log(newarrrr)

let orgarr=[{
  id:1,
  elements:[1,2]
},
{
  id:1,
  elements:[3,4]
},{
  id:2,
  elements:['a','b']
},
{
  id:2,
  elements:['c']
},
{
  id:3,
  elements:['abc']
}]
let reducee=[6,6,7,8,9,0,9].reduce((aobj,e,i)=>{
  aobj+=e
  console.log(i,'reduceindexes')
  return aobj
},0)
console.log(reducee,'aobi')
let mappp=orgarr.reduce((obj,item)=>{
  obj[item.id]?obj[item.id].elements.push(...item.elements):obj[item.id]=item
  return obj
},{})
console.log(mappp,'mappp')
let dictt={1:'abc',2:'tf'}
let sett=new Set()
sett.add(5)
sett.add(6)

console.log(...sett,'')
console.log(dictt)

let reduce1=[5,5,5,6,7,6,8,7,9,7,9,0]
objj={}
for(elements of reduce1){
  objj[elements ]?++objj[elements]:objj[elements ]=1
}
console.log(objj,'objj')
const otp=reduce1.reduce((obj,itm)=>{
  obj[itm]?++obj[itm]:obj[itm]=1
  return obj
},{})
console.log(otp)

let arrleet=[1,2,3,1]
let myset=new Set(arrleet)
console.log([...myset].length==arrleet.length)
console.log(myset.length,'length')
const dictti=new Map()
dictti.set(1,'one')
dictti.set(2,'two')
dictti.set('three',3)
dictti.set(1,'overwrite')
for(const [key,value] of dictti.entries()){
  console.log(key,value,'keyvalue')
}
for(const elements of dictti.keys()){
  console.log(elements,'keys')
}
console.log(dictti,'dicttiundefined')
console.log(dictti.keys(),'keys')
console.log(Object.keys(dictti),"%%keys")
const object={one:1,two:2,three:3}
console.log(Object.keys(object),Object.values(object),"object")
console.log(dictti.has(2))
console.log(dictti.has(1),'has(1)')
console.log(dictti,dictti.get(2),'threeeeee')
let l=[2,7,11,15]
var t=9
let map=new Map()
for(const ele in l){
  if(map.has(t-l[ele])){
    console.log(map.get(t-l[ele]),ele,"mappppp")
    break
  }else{
    map.set(l[ele],ele)
  }
}
var x=15
function fo(){
  var x=30
}
fo()
console.log (x,'var')
console.log(typeof bb,"type")
var bb=function(a){
  a++
  console.log(a)
}
bb(1)

var x=2;
var y=4;
if((y>x || y++ ===4)&& ++y ===5){
  x=1
}else{
  x=4
}
console.log(x,y,'xy')
const tt=[1,2,4,5,6,7,8,9]
const mapp=tt.map((item)=>{return item>5})
const mappyp=tt.map((item)=>{if(item>5)return item})
const spark=tt.map((item)=>{if(++item!=5)return ++item})
console.log(spark,"spark")
console.log(mapp)
console.log(mappyp)

console.log("12321"==="1231",'ispalindrome')
console.log(Number.isInteger(6))
const bn=4;
console.log(bn.toString())