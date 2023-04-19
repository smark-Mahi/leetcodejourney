function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.func=function(){
      console.log(this.age,'this.fuc')
    }
  }
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  console.log(myMother.firstName)
  const arrow=(a,b)=>`${a}`
  console.log(arrow(2,3))
  myFather.func()
  
  
  p2=new Promise((resolve,reject)=>{
    console.log("p2promise")
    setTimeout(()=>{
      console.log("p2")
      resolve(3)
    },2000)
  })
  p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(4)
      console.log("p1")
    },1000)
    console.log("p1promise")
  })
  var total=0
  Promise.all([p1,p2]).then((res)=>{
    for(i in res){
      total+=res[i]
      console.log(res[i])
    }
    console.log(total)
  })
  console.log(total)
  
  promise=new Promise((resolve,reject)=>{
    console.log("success")
    resolve(8999)
  })
  promise.then((result)=>{
    console.log(result)
  })
  
  
  promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("success2")
    })
    resolve(67000)
  },0)
  promise2.then((result)=>{
    console.log(`promise ran 1st than settimeout ${result}`)
  })
  
  let yh=50
  function scope(){
    yh=890
    yh=1906
  }
  console.log(scope())
  console.log(yh)
  
  var y=5
  var y=67000
  console.log("var" + " " + y)
  let x=48
  //let x=67
  console.log(x)
  
  const arroww=()=>{
    console.log(4)
  }
  const m=2
  const n='2'
  console.log (m==n,'mn')
  