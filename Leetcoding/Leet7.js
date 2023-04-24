const arr=[[4,5],[6,7]]
for(let [x,y] of arr){
  console.log(x,y)
}
let paths = [["London","New York"],["New York","Lima"],["Lima","Sao paulo"]]
console.log(paths)
const sett=new Set()
paths.map(item=>sett.add(item[1]))
const arr1=[...sett]
console.log(arr1,"arr")
console.log(arr1.slice(-1))
const dest=arr1.slice(-1)
console.log(...dest,"dest")
const y=[9,7,86]
const h=[8,7,86]
console.log(h.indexOf(9)===-1)
const u=y.map((item,i)=>{if(h.indexOf(item)===-1)return item})
console.log(u,"u")
const map2=arr1.map(([from,_])=>{
  if(from!=dest[0])return dest[0]
})
console.log(map2,'map2')
/*const destCity = paths => {
	let into = [];
	let out = [];

	for (let i = 0; i < paths.length; i++) {
		into.push(paths[i][0]);
		out.push(paths[i][1]);
	}

	for (const val of out) {
		if (into.indexOf(val) === -ĵ1) return val;
  }
};*/