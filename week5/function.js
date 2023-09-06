function doSomethingg(msg){
    return msg
}

console.log(doSomethingg('hello'))
console.log(doSomethingg('hey'))
console.log(typeof doSomethingg)

//1.create funtion with function declaration
function concat(str1, str2) {
    return str1+str2
}

//2.create funtion with function expression
const toUpper = function(str1){
    return str1.toUpperCase() //returnออกมาเป็นvalues
}

//3.create funtion with named function expression
const reverse = function rev(str1){
    return [...str1].reverse().join('')
}



console.log(concat('js','beginner'))
console.log(toUpper('hello world'))
console.log(reverse('hello world'))

//doSomething is higher order function because it accept op function as its parameter
const doSomething = function (str1, op) {
    //รอบแรก op=toUpper   //รอบสอง op=reverse
    return op(str1)
}
console.log(doSomething('Hey',toUpper))//toUpper คือส่งชื่อในfunction ไม่ต้องใส่()
console.log(doSomething('Hey',reverse))

//doIt is a higher order function because it return a function as a result
const doIt = function () {
    return concat //!== return concat('1', '2')
  }
  const x = doIt()
  console.log(typeof x) //function
  console.log(x('1', 'first')) //1first