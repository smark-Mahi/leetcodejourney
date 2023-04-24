const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.keys(object1));
  
  
  const obj={
    "a":"something",
    "b":"yyy"
  }
  obj[9]=45
  console.log(Object.keys(obj))
  
  
  
  const dictti=new Map()
  dictti.set(1,'one')
  dictti.set(2,'two')
  dictti.set('three',3)
  for(const elements of dictti.keys()){
    console.log(elements,'keys')
  }
  
  
  
  // Simple array
  const arr = ["a", "b", "c"];
  console.log(Object.values(arr)); // ['0', '1', '2']
  
  // Array-like object
  const objj = { 0: "a", 1: "b", 2: "c" };
  console.log(Object.keys(objj),Object.entries(objj)); // ['0', '1', '2']
  
  // Array-like object with random key ordering
  const anObj = { 100: "a", 2: "b", 7: "c" };
  console.log(Object.keys(anObj),"anobjarr"); // ['2', '7', '100']
  
  // sort.
  var dict={
    "Alice":25,"bob":22,"james":6,"sarah":78,
    "mummy":89
  }
  var items=Object.keys(dict).map((key)=>[key,dict[key]])
  console.log(items,"items",items[0][0],items[0][1])
  console.log(items,"before",items[0][0])
  items.sort((a,b)=>{return b[1]-a[1]})
  console.log(items,items[0][0],"itemsss")
  
  
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  rHTML = fruits.join(" * ");
  console.log(rHTML)
  console.log(rHTML.split('*'))
  
  const frruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(frruits.toString());

/////

arr=[2,2,3,4,5,3,2]
const count=arr.reduce((acc,item)=>{
  acc[item]=acc[item]?acc[item]+1:1
  return acc
},{})
console.log(count)

let sett=new Set(arr)
console.log(...sett)
let t=[9,8,9,8,[9,0,7,[9,0]]]
console.log(t.flat(2))
let a=5
console.log(a)
a="   "
console.log(a.trim().length)
console.log(arr)
l=arr.length
while(l--){
  console.log(arr[l])
}
