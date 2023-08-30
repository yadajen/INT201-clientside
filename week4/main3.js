//compare object types including object and array data types
//aray datatype
let x = [1,3,true,'unknown']
let y = [1,3,true,'unknown']
let z = x //memory addressเดียวกัน room number เดียวกัน 
console.log(x===y) //false address ของ x == address ของ y มั้ย 
console.log(x===z) //true

z[0]='A'
x[0]='B'
y[0]='A'
console.log(x); //[ 'B', 3, true, 'unknown' ]
console.log(y); //[ 'A', 3, true, 'unknown' ]
console.log(z);//[ 'B', 3, true, 'unknown' ]
//object data type
let m = {id:1 , title:"pen"}
let n = {id:1 , title:"pen"}
let o = m
console.log(m===n)
console.log(o===m)
o.id = 888
console.log(m) //id m ก็เปลี่ยนเหมือนกัน เพราะ oกับmเป็นรูมเมทกันแล้ว
console.log(o)
//primitive type
let a = 5
let b = 5
let c = a
console.log(a===b) 
console.log(a===c)