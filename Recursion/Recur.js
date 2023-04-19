function factorial(n){
    if(n==0){
      return 1
    }
    else{
      console.log(n)
      return n*factorial(n-1)
    }
  }
  console.log(factorial(5))
  
  
  function fibbo(n){
    if(n<=1){
      return n
    }
    else{
      return fibbo(n-1)+fibbo(n-2)
    }
  }
  for(let i=0;i<5;i++){
    console.log(fibbo(i),'fggibbo')
  }
  str="hello worldh fhhdjd"
  arr=str.split("")
  console.log(arr)
  agstr=arr.join("")
  console.log(agstr)