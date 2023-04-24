const r =new Array(6)
console.log(r)
const t=[...Array(6)]
console.log(t)
const y=[...Array(20)].map(()=>({
  data:1906
}))
console.log(y)
let lenn=3
const yp=new Array(lenn).fill().map(x=>new Array(lenn).fill(false))
console.log(yp)

const yup=[...Array(lenn)].fill(null)
console.log(yup)

const yupp=[...Array(5)].fill(new Object())
console.log(yupp)