console.log(z)
let z =555 // error ต้องประกาศตัวแปรก่อนconsole.log
//a, b, c, e are global scope
let a = 1
const b = 2
var c = 3
//d, e are block scope
{
  let d = 4
  const e = 5
  var f = 6
  console.log('block area')
  console.log(a)
  console.log(b)
  console.log(c)
}
//h, i, j are function scope
function doIt() {
    //h and i are local variable in function
  let h = 7
  const i = 8
  var j = 9
  console.log('function area')
  console.log(a)
  console.log(b)
  console.log(c)

  console.log(f)
  // block scope variables not allow outside block
 // console.log(d)
 // console.log(e)
}

doIt()
console.log('global area')
console.log(a)
console.log(b)
console.log(c)
//console.log(d)
 // console.log(e)

 console.log(h)
 console.log(i)
 console.log(j)