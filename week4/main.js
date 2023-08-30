// function doSomething(msg) {
//     if(msg===null||msg===undefind){    
//         let someone ='guest'
//     }
// let x = 1
// return `hello,${msg}`
// }
// doSomething()
// console.log(msg)

let x =1
if(x===1){
    let x = "unknown"
    console.log(x)
}
console.log(x)

// รูปย่อif else
let a=1
let b = a ===1 ? Math.random()*2+3/5: a
console.log(x === 1 ? 1:0)
//optional chaining
let m = 1
// console.log(m?.charAt(0)) // string
// console.log(m?.[0]) // array
// console.log(m?.id) //propoties

//nullish
let n = m ?? 0 //equals to m!==null && m!==undefined? m=n
console.log(n)

let y =[]//array initialization with empty array
let z = {}//object initialization with empty property
console.log(typeof y)// empty array (not null and not undefind) datatypeเป็นarray แต่ตัวมันเป็นobject
console.log(typeof z)// empty object (not null and not undefind)

let c = [1,3,5,7]
c = c ?? y //c=c
console.log(c)

//MathRandom 
const rand = Math.random() //0 to 0.9999
console.log(rand)

const rando = Math.random()*10 //0 to 9.9999
console.log(rando)

//random number in a range 25to 100
const random = Math.random()*(100-25)+25
//1. 75
//2. Math.random() 0 to 0.9999
//3. 0*75 to 0.9999 *75 = 0 to 74.99999
//4. + 25 = 25 to 99.9999

//random number in a range 25to 100
let n1 =25
n2= 100
const random1 = Math.floor(Math.random()*(n2-n1+1)+25)
console.log(random1)

//reuse code funtion()
function randomNumber(min,max){
     return Math.floor(Math.random()*(max-min+1)+min) 
}
const randomNum = randomNumber(25,100)
console.log(randomNum)

console.log('-------')
console.log(Math.round(3.1)) //3
console.log(Math.round(3.4)) //3
console.log(Math.round(3.5)) //4
console.log(Math.round(3.7)) //4
console.log('-------')
console.log(Math.floor(3.1)) //3
console.log(Math.floor(3.4)) //3
console.log(Math.floor(3.5)) //3
console.log(Math.floor(3.7)) //3
console.log('-------')
console.log(Math.ceil(3.1)) //4
console.log(Math.ceil(3.4)) //4
console.log(Math.ceil(3.5)) //4
console.log(Math.ceil(3.7)) //4
console.log('-------')
console.log(Math.PI)
console.log(Math.pow(2,5)) //2^5 2ยกกำลัง5