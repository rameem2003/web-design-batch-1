// function doSomething() {
//   console.log("Doing something");
// }

// const doSomethingElse = () => {
//   console.log("Doing something else");
// };

// for loop
// while loop

// for(initial state, condition, increment/decrement){}

// for (let i = 0; i < 5; i = i + 1) {
//   console.log("Hello World");
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`1 x ${i} = ${i * 1}`);
// }

// const numberTable = (number, limit) => {
//   for (let i = 0; i <= limit; i++) {
//     console.log(`${number} x ${i} = ${i * number}`);
//   }

//   let i = 0;
//   while (i <= limit) {
//     console.log(`${number} x ${i} = ${i * number}`);
//     i++;
//   }
// };

// numberTable(500, 200);

// for(ইনিসিয়াল  স্টেট, কন্ডিশন, ইনক্রিমেন্ট/ডিক্রিমেন্ট){}
/**
 * ১. ইনিসিয়াল স্টেটঃ লুপের শুরুতে কোন ভ্যালু থেকে শুরু করবে সেটা ডিফাইন করে
 * ২. কন্ডিশনঃ লুপ কতক্ষণ চলবে সেটা ডিফাইন করে
 * ৩. ইনক্রিমেন্ট/ডিক্রিমেন্টঃ প্রতিবার লুপের শেষে ভ্যালুটা কত করে বাড়বে বা কমবে সেটা ডিফাইন করে
 */


let array = [
  { name: "Charlie", age: 25, status: "active" },
  { name: "Bob", age: 30, status: "inactive" },
  { name: "Charlie", age: 22, status: "inactive" },
  { name: "Diana", age: 28, status: "active" },
  { name: "Ethan", age: 35, status: "inactive" },
  { name: "Fiona", age: 27, status: "active" },
  { name: "George", age: 32, status: "inactive" },
  { name: "Hannah", age: 24, status: "active" },
  { name: "Ian", age: 29, status: "inactive" },
  { name: "Julia", age: 26, status: "active" },
]


// console.log(array[0]);
// for(let i = 0; i< array.length; i++){
//   console.log(`My name is ${array[i].name}, my age is ${array[i].age} and my status is ${array[i].status}`);
// }
// My name is Charlie, my age is 25 and my status is active

// map()
// let newArray = array.map((item) => {
//   let items = []
//   items.push(item)
//   return items
// })
// console.log(newArray);

// forEach()



// const calculator = (a, b) => {
//   let c = a+b
//   return c
// }
// // calculator(50,10)
// let d = calculator(50,10)

// let e = 10

// let f = d+e
// console.log(f);
// let g = calculator(10, 10)
// let h = f + g
// console.log(h);



let newArray = array.forEach((item)=> {
  // console.log(`My name is ${item.name}, my age is ${item.age} and my status is ${item.status}`);
  
  return item
})

// map রিটার্ন করতে পারে কিন্তু DOM নিয়ে কাজ করতে পারে না
// foreach রিটার্ন করতে পারে না কিন্তু DOM এ প্রবেশ করে DOM এর access নিয়ে কাজ করে


console.log(newArray);
