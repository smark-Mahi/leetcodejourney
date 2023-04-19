let user = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // the new empty object
  
  // let's copy all user properties into it
  for (let key in user) {
    clone[key] = user[key];
  }
  
  // now clone is a fully independent object with //the same content
  clone.name = "Pete"; // changed the data in it
  
  alert( user.name ); // still John in the original object
  
  
  
  let user2 = {
    name: "John",
    age: 30
  };
  
  let clone2= Object.assign({}, user2);
  
  alert(clone2.name); // John
  alert(clone.age); // 30
  
  
  let user1 = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone1 = Object.assign({}, user1);
  
  alert( user1.sizes === clone1.sizes ); // true, //same object
  
  // user and clone share sizes
  user1.sizes.width = 60;    // change a property //from one place
  alert(clone1.sizes.width); // 60, get the result //from the other one
  
  
  let clone3= structuredClone(user1);
  
  alert( user1.sizes === clone3.sizes );
  
  
  let obj = {}; // user has no address
  
  alert( obj?.address?.street ); // undefined (no //error
  /*
  obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
  obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.*/
  
  
  
  let num = 255;
  
  alert( num.toString(16) );  // ff
  alert( num.toString(2))
  alert(num.toString(8))
  console.log(255..toString(16))
  console.log(Number.isNaN(5))
  console.log(Number.isNaN("ark"))
  console.log("str"/2)
  console.log(parseInt("55y"))
  console.log(Math.max(5,6))
  console.log(2**4)
  
  let guestList = `Guests:
    John
   * Pete
   * Mary
  `;
  console.log(guestList)
  
  
  
  // two lines using a normal newline and backticks
  let str2 = `Hello
  World`;
  
  console.log(str2)
  
  let guesstList = "Guests:\n * John\n * Pete\n * Mary";
  
  alert(guesstList); 
  
  
  let str1 = "Hello\nWorld"; // two lines using //a "newline symbol"
  
  // two lines using a normal newline and //backticks
  let str3 = `Hello
  World`;
  
  alert(str1 == str3); // 
  
  
  let str = `Hello`;
  
  // the first character
  alert( str[0] ); // H
  alert( str.at(0) ); // H
  console.log(str[-1])//undefined
  
  
  let strc = 'Hi';
  
  strc = 'h' + strc[1]; // replace the string
  
  alert( strc ); // hi