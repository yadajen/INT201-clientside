//optional chaining ?.
let a //undefinde
//with array
console.log(a?.[0]) //ถ้าเป็นnull or undefined จะไม่erorและโปรแกรมจะไปต่อได้

//with object
let b = { id: 1, fullname: "somchai" }
//1. use . before propoty name
console.log(b?.id)
//2.
console.log(b["id"])
