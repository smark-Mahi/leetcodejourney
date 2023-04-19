let wrapper=[]
function work(...args){
  for(let arg of args)wrapper.push(arg)
}
work(6,7,8,9)
console.log(wrapper)
console.log(...wrapper)

let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi(), 1000);
console.log("%^^")
let user1 = {
  firstName: "John"
};

function func() {
  console.log(this,"%^&*")
  console.log(this.firstName);
}

let funcUser = func.bind(user1);
//funcUser(); // John
funcUser()
console.log(funcUser,"%")
funcUser


let user2 = {
  firstName: "ark",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

let sayHi = user2.sayHi.bind(user2); // (*)

// can run it without an object
sayHi(); // Hello, John!

setTimeout(sayHi, 1000); // Hello, John!

// even if the value of user changes within 1 //second
// sayHi uses the pre-bound value which is //reference to the old user object

function mul(a, b) {
  return a * b + " " +this.firstName;
}
console.log(mul(2,7),"understand")
let double = mul.bind(user);
console.log(double(2,5))
let double2 = mul.bind({firstName:"smark"});
const t=double2(2,5)
console.log(t,"yesmila")

function sayHit() {
  console.log( this.name,"$");
}
sayHit.test = 5;

let b = sayHit.bind({
  name: "John"
});

console.log( b.test,+ ' ' + "7"); // what will be the output? why?
sayHit()