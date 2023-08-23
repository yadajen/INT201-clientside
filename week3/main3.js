let x =1
{
    //x block scope
   let x=2 //ชื่อซ้ำแต่อยูุ่คนละscopeเลยไม่error
   console.log(x)
}
console.log(x)
console.log('--------------------------')
const a =1
{
    //a block scope
   const a=2 //ชื่อซ้ำแต่อยูุ่คนละscopeเลยไม่error
   console.log(a)
}
console.log(a)

function doIt(x){
    //x is afunction scope
    console.log(x)
}
console.log(x) //1
doIt(100) //100
console.log(x) //1

let msg = 'hello'
console.log(msg.charAt(0)) //string uses zero base index
let msgs = [...msg]// array string //spread operator
console.log(msgs)

let n ='2'
console.log(typeof n)
console.log(typeof Number(n))//explict type
console.log(5/2)