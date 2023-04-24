let y=[9,8,7,6,5]
const mapp=y.map((item)=>{
  return item==6
})
console.log(mapp)

const map1=y.forEach((item)=>{
  if(item==6)console.log(item==6)
})

const map2=y.forEach((item)=>{
  console.log(item==6)
})

const map3=y.map((item)=>{
  if(item==6)return item
})
console.log(map3)


const arr=[
{
  a: 'somestring',
  b: 42,
  c: false
},
{
  a: 'somestring',
  b: 42,
  c: false
},
  ]

  
let maxx=-Infinity
console.log(maxx)

const map4=arr.map((item)=>({[item.a]:item.b}))
console.log(map4)


const points = [40, 100, 1, 5, 25, 10];
console.log(myArrayMax(points))
function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
let len=points.length
console.log(len)
console.log(len--)
console.log(len--)
console.log(len--)
console.log(--len)
console.log(len--)
console.log(--len)


let user = 'John', age = 25, message = 'Hello';
console.log(user,age)
str=4
let phrase = `can embed another ${str}`;

console.log(6 - '2')
console.log(6/'2')

let counter = 0;
//counter++;//1
console.log(counter++)//0
++counter;
console.log(counter)


let a = 1, b = 1;

let c = ++a; // ?
let d = b++;
console.log(c,"c")
console.log(d,"$")


for (a = 1, b = 3, c = a * b; a < 10; a++) {
  console.log(a,c,b)
}

let aa= (1 + 2, 3 + 4);
console.log(aa)//7

let ay = 2;

let x = 1 + (ay *= 2);
console.log(x,'x')
let g=6 + 6 + (ay+1);
console.log(g)


let messages= (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';
  
  let i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  alert( i ); // 0, 1, 2
}


let userr = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in userr) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( userr[key] ); // John, 30, true
}

/*
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)





switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

*/


let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  console.log( +code ); // 49, 41, 44, 1
}

let ab= "1";
console.log(+ab)//1

function showMessage(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty';
}


showMessage(5)



function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    console.log(i,"%%%&")
    alert(i,"%%");  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
console.log(showPrimes(5),"%%%")
console.log(null+1,'$')
let welcomee = (age < 18) 
let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();
console.log(welcomee)


let use = new Object(); // "object //constructor" syntax
let us= {};  // "object literal" syntax


let arrtest=[]
arrtest.length=3
arrtest[0]=18
arrtest[1]=44
arrtest[2]=18
arrtest[3]=5
console.log(arrtest)