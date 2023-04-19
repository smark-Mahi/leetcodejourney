let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
//let [firstName, surname] = arr;

//console.log(firstName); // John
//console.log(surname);  // Smith


//let [firstName, surname] = "John Smith".split//(' ');
//alert(firstName); // John
//alert(surname);  // Smith


// second element is not needed
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul

/*
Works with any iterable on the right-side
…Actually, we can use it with any iterable, not only arrays:

let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
That works, because internally a destructuring assignment works by iterating over the right value. It’s a kind of syntax sugar for calling for..of over the value to the right of = and assigning the values


let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is array of items, starting from the 3rd one
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2

The value of rest is the array of the remaining array elements
*/


// default values
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name);    // Julius (from array)
alert(surname); // Anonymous (default)

let options = {
  tittle: "Menu",
  width: 100,
  height: 200
};
//order doesn't matter 
let {width, tittle, height} = options;

console.log(tittle);  // Menu
console.log(width);  // 100
console.log(height); // 200


let options = {
  title: "Menu",
  height: 200,
  width: 100
};

// title = property named title
// rest = object with the rest of properties
let {title, ...rest} = options;

// now title="Menu", rest={height: 200, width: 100}
alert(rest.height);  // 200
alert(rest.width);   // 100



let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// destructuring assignment split in multiple lines for clarity
let {
  size: { // put size here
    width,
    height
  },
  items: [item1, item2], // assign items here
  title = "Menu" // not present in the object (default value is used)
} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut


let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

// ...and it immediately expands it to variables
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // title, items – taken from options,
  // width, height – defaults used
  alert( `${title} ${width} ${height}` ); // My Menu 200 100
  alert( items ); // Item1, Item2
}

showMenu(options)