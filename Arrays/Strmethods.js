let str = 'Widget with id';

alert( str.indexOf('id', 2) ) // 12
alert( "Widget with id".includes("Widget") ); // //true

alert( "Hello".includes("Bye") );


alert( "Widget".startsWith("Wid") ); // true, //"Widget" starts with "Wid"
alert( "Widget".endsWith("get") );

let str4 = "stringify";

// start at the 4th position from the right, //end at the 1st from the right
alert( str4.slice(-4, -1) ); // 'gif

"cat".charAt(1); // gives value "a"
console.log("2"+"2")

let arr = new Array(2); // will it create an array of [2] ?
console.log(arr)
arr[0]=4
arr[1]=4
arr[2]=5

alert( arr[0] ,"$"); // undefined! no elements.

alert( arr.length ); // length 2


let fruits = []; // make an array

fruits[99999] = 5; // assign a property with //the index far greater than its length

fruits.age = 25;
fruits[9]=67
console.log(fruits)
console.log(fruits.length,fruits)

alert( "" + 1 ); // "1"
alert( "1" + 1 ); // "11"
alert( "1,2" + 1 ); // "1,21"


alert( 0 == [] ); // true

alert('0' == [] ); // false

arr4=[9,0,8]
console.log(this)

let arr5 = ["a", "b"];

arr5.push(function() {
  alert( this[0] );
});

arr5[2]();