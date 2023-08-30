let str1 ='ant'
let str2 ='Ant'
let str3 ='ANT'
let str4 ='ant'
console.log(str1===str2)//false
console.log(str1!==str3)//true
console.log(str2===str3)//false
console.log(str1===str4)//true
console.log("-------")
console.log(str1<str4)//false //เปรียบเทียบเลขฐาน10 binary character
console.log(str1<str4)//true

console.log('----includes-----')
console.log(str1.includes('nt'))//true //caer sentsitive
console.log(str1.includes('Nt'))//flase
console.log(str1.toLowerCase().includes('Nt'.toLowerCase()))//true//incase sensitive
console.log(str1.toUpperCase().includes('Nt'.toUpperCase()))//true//incase sensitive
console.log(str1.includes('ant'))///true