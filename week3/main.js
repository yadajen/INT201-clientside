//wealy and dynamic types
let num =1
console.log(typeof num)

num = true
console.log(typeof num)

if(typeof num === 'boolean') console.log('num is a boolean type')

let a =1n //1n ; int + n = bigint
console.log(typeof a)

let b =3.2 // no double
console.log(typeof b)

let c = `A-${b /2+1}`
console.log(c)
console.log(typeof c)

// implicit type conversation (string to boolean)
if('1') console.log('1 is aboolean true') //ในifต้องการboolean แต่อันนี้มันไม่ใช่boolean เลยเป็นimplicit type
else console.log('1 is not a boolean')

if(0) console.log('value is not zero') // 0 = false
else console.log('value is not zero')

if(2) console.log('value is two') // 2 = true
else console.log('value is not twp')

let msg = '1'
if(msg) console.log ('an empty string')
else console.log('not empty string')//true

console.log('--------------------------')
//object type mutable(เพิ่มค่าในelementได้ ถูกแก้ไข ลบ อัพเดทได้)
//simple array data type
//const เปลี่ยนไปชี้objectอื่นไม่ได้ เช่น obj = nums
const nums = [1,3,5,7]
//nums.push(9) // ใส่9เพิ่มเข้าไปในarray
nums[nums.length-1] =11 //ใส่11เพิ่มเข้าไปในarray โดยlength-1 = index
console.log(nums)
console.log('nums.length= ' + nums.length)
nums[0] = 11 // mutable เปลี่ยนแปลงค่าได้เสมอ
console.log(nums)
console.log(typeof nums)

console.log('--------------------------')
//sample object data type: collection of propoties{}
const obj ={id:1,price:100}
//obj = nums // const not allow
obj.id = 555
console.log(obj)

console.log('--------------------------')
function doSomething(activity){
    //=== check datatype and value, == check only value, do not care datatype
    if(activity===null) return 'activity is null'
    if(activity=== undefined) return  'activity is undefined'
    else return `${activity} is done`//activity + 'is done'
}
console.log(doSomething)
console.log(typeof doSomething)
let act
let act2 = null
let act3 = 'JS leaning'
console.log(doSomething(act)) // no activity
console.log(doSomething(act2)) // no activity
console.log(doSomething(act3))// String
console.log(doSomething())//เหมือนundefind //parameter undefind
//การรันแต่ละรอบ do something คนละตัว

console.log('--------------------------')
let aa
    bb =0
    cc = null

console.log(aa) //undefined
console.log(bb)
console.log(cc)
 if(aa) console.log('aa')
 else console.log('not aa')

