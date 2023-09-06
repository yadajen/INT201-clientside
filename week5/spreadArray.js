//2.Ceate array with spread operator
const x = [5,7,9]
const y = [...x, 11, 13, ...x]
console.log(x) 
console.log(y) 

const z = 'today is a good day'
const m = [...z]
console.log(m)

//for...of uses with array
for (const ch of m) {
  console.log(ch)
}//ปริ้นตัวในarrayออกมาทีละตัว
for (const value of x) {
  console.log(value)
}


