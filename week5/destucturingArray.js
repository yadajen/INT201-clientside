

const [m] = [10,20,30]
console.log(m) //10

const [, ,n] = [10,20,30]
console.log(n) //30

//create array name numms
const nums = [1,3,5,7,9]
//destucturing
const[a, b, c] = nums
console.log(a)//1
console.log(b)//3
console.log(c)//5

console.log(typeof a)//number
console.log(typeof b)
console.log(typeof c)

const[x] = nums
console.log(x)
//destucturing with skip some indexs and use rest to the last destucturing
const[ , , , y, , ...z] = [5, 10 ,15, 20, 25, 30, 35, 40, 45, 50]
console.log(y)//20
console.log(z)//[ 30, 35, 40, 45, 50 ] // restทำได้แค่ตัวสุดท้าย

const [...d] = nums
console.log(d) //[ 1, 3, 5, 7, 9 ]

//const nums = [1, 3, 5, 7, 9]
const e = nums //memory address of nums to n
e[0] = 999
console.log(nums)//[ 999, 3, 5, 7, 9 ]
console.log(e)//[ 999, 3, 5, 7, 9 ]
//all below are destructuring
const [o] = nums //999
const [, p] = nums //3
const [...q] = nums //[ 999, 3, 5, 7, 9 ]
console.log(o)
console.log(p)
console.log(q)