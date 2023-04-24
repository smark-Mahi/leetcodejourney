let matrix = [[1,1,1],[1,0,1],[1,1,1]]
const obj=matrix.reduce((acc,cur,i)=>{
  if(cur.includes(0)){
    var reducce=cur.reduce((accc,item,i)=>{
      if(item===0){
        accc.push(i)
      }
      return accc
    },[])
  }
  reducce?acc[i]=reducce:acc[i]=[]
  return acc
},{})
console.log(obj)
const arr=Object.keys(obj)
console.log(arr,obj[1])
const a=[9,8,7,8,7]
const y=a.join("").match(/8/g)
console.log(y)
const rowss=[]
const colss=[]