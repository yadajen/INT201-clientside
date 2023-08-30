const ch = "b"
let isVowel = false
switch (ch) {
  case "A":
  case "a":
  case "E":
  case "e":
  case "I":
  case "i":
  case "O":
  case "o":
  case "U":
  case "u":
    isVowel = true
    break
  case "*":
    isVowel = "star"
    break
  default:
    isVowel = false
}
console.log(isVowel)

for (let i = 1; i <= 10; i++) console.log(i)

//array data type
let x = [1, 3, true, "unknown"]

console.log("----")
//print element in X
//1. for...i
for (let i = 0; i < x.length; i++) console.log(x[i])
//2. for...of
for (const data of x) {
  console.log(data)
}
//3. for...each
x.forEach((element) => {
  console.log(element)
})

//object data type
let m = { id: 1, title: "pen" }
//for..in
for (const key in m) {
  console.log(key) //print  property name
  console.log(m[key]) //print  property value
}
