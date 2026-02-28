let list1 = [1, 5, 10];
let list2 = [5, 10, 20];

// 1. Merge
let merg = list1.concat(list2)
// 2. Remove Duplicates (Hint: Use 'new Set()')
let dupli = [...new Set(merg)]
// 3. Sort
let newlist = dupli.sort((a,b)=> a-b)
// Expected Output: [1, 5, 10, 20]
console.log(newlist)

//Convert string "123" to number and back to string
let new1 = "123"
let num1 = parseInt(new1)
console.log(num1)
let str1 = num1.toString()
console.log(typeof(str1))

