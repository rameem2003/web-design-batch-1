// const btn = document.getElementById("btn");
// const navMenu = document.getElementById("nav-menu");

// btn.addEventListener("click", () => {
//   //   console.log("click");

//   navMenu.classList.toggle("show");
// });

// let firstNumber = prompt("Enter first number ");
// let secondNumber = prompt("Enter second number ");

// console.log(typeof firstNumber);

// let sum = parseInt(firstNumber) + parseInt(secondNumber);
// console.log(sum);

let array = [];

const name = document.getElementById("name");
const userEmail = document.getElementById("email");
const submitBtn = document.getElementById("submit");
const ul = document.getElementById("list");

const fetchData = () => {
  ul.innerHTML = "";
  array.map((item, i) => {
    let li = document.createElement("li");
    li.innerHTML = `<p>${item.name}</p>
    <p>${item.email}</p>`;

    ul.appendChild(li);
  });
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let data = {
    name: name.value,
    email: userEmail.value,
  };

  array.push(data);

  console.log(array);
  fetchData();
});

fetchData();
