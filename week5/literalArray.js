//1.create array with literal//คือให้ค่าไปใน[]เลย
//initial x with empty array
const x = []//typeof array is object
console.log(typeof x)

if(x.length === 0) console.log('empty array')
else console.log('not empty array') //การเช็คemtpyให้เช็คว่ามีlengthมั้ย
console.log(x[0]) //ให้แสดงxindexที่0 propotiesที่1

x[0] =1  //ข้างใน[]คือindex
x[1] = 3
x[2] = 5
//add new element inthe end of array by using push function
x.push(7)
x.push(9)
console.log(x)
//1,3,5,7,9


const y = [1, true, 'beginner', 2.5] //untypes, mixed type
console.log(y)
console.log(y[0]) //1
console.log(y[y.length - 1]) //2.5
console.log(y.length) //4

//nested with array
const z =[
    [2,4,6],
    [true,false],
    ['a','b','c']
]//arayมี3propoties 
console.log(z[0]) //[2,4,6]
console.log(z[z.length-1]) //length-1 คือpropotiesสุดท้าย //['a',,'b','c']

//nested with object
const m = [
    {projectId:1,name:'pen',price:200},
    {projectId:2,name:'notebook',price:100},
    {projectId:3,name:'pencil',price:10}
]
console.log(m.length) //3
console.log(m.length) //3
console.log(m[0]) // { productId: 1, name: 'pen', price: 200 }
console.log(m[m.length - 1]) //{ productId: 3, name: 'pencil', price: 10 }

const n = { productId: [1001, 1002, 1003], productPrice: [100, 10, 15] } //object
console.log(n.productId) //[1001, 1002, 1003]
console.log(n.productPrice) //[100, 10, 15]
