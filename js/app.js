// var vs let vs const

// declare
// re declare
// assign
// re assign

// fucntion scope -> var
// block scope
// var name = "rameem"

// function abc(){
//     name = "shahina"
//     console.log(name);
//     console.log(10000)
// }

// console.log(name);

// abc()

// let / const
// console.log(name);

// let এ redeclare করা যায় না কিন্তু re assign করা যায়
// let block scope
// let name = "rameem";
// name = "Shahina";

// function efg() {
//   const baby = "ayat";
//   console.log(baby);
// }


// const baby = "mariam"
// efg()
// console.log(baby);


// const
// একে আপনি re declare বা re assign কোনটাই  করতে পারবেন না
// const f_name = "raeem"

// console.log(f_name);

let name = "rameem"
let age  =22
let gender = "male"

let name1 = "Shahina"
let age1 = 30
let gender1 = "female"

const object = {
    // key : value
    name : "Shahina",
    age : 30,
    gender : "female"
}

 object.phone = "0154154"
 object.age = 35



console.log(object)