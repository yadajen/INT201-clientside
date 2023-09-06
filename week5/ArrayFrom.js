//5.create array with Array,from()
const x = [1,3,5]
const y = [2,4,6]
let z =Array.from(x) //ดึงข้อมูลจากarray x
console.log(z)
console.log(z.length)
//compared with spread operator
const a = [...x, ...y] //[ 1, 3, 5, 2, 4, 6 ]
const b = [...x, y] //[ 1, 3, 5, [ 2, 4, 6 ] ]
console.log(a)
console.log(b)