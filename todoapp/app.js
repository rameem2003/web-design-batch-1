let array = JSON.parse(localStorage.getItem("todo-app")) || [];
let index = null;
console.log(array);
// submit form elements
const submit = document.getElementById("main-form");
const name = document.getElementById("name");
const userEmail = document.getElementById("email");
const submitBtn = document.getElementById("submit");
// update form elements
const update = document.getElementById("update");
const updateName = document.getElementById("update-name");
const updateEmail = document.getElementById("update-email");
const updateSubmitBtn = document.getElementById("update-submit");
// list element
const ul = document.getElementById("list");
let updateData = {};

// delete item
const deleteItem = (i) => {
  console.log("click", i);
  array.splice(i, 1);
  localStorage.setItem("todo-app", JSON.stringify(array));
  fetchData();
};

// update item (resubmit form open function)
const updateItem = (i) => {
  index = i;
  submit.style.display = "none";
  update.style.display = "block";

  updateName.value = array[i].name;
  updateEmail.value = array[i].email;
};

// edit todo function (After resubmit form)
const edittodo = () => {
  let updateTodo = {
    name: updateName.value,
    email: updateEmail.value,
  };

  array[index].name = updateTodo.name;
  array[index].email = updateTodo.email;

  localStorage.setItem("todo-app", JSON.stringify(array));
  fetchData();

  update.style.display = "none";
  submit.style.display = "block";
};

// fetch data function
const fetchData = () => {
  update.style.display = "none";
  ul.innerHTML = "";
  array.map((item, i) => {
    let li = document.createElement("li");
    li.innerHTML = `<p>${item.name}</p>
    <p>${item.email}</p>
    <button onclick="deleteItem(${i})">Delete</button>
    <button onclick="updateItem(${i})">Update</button>
    `;

    ul.appendChild(li);
  });
};

// submit form event listener
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let data = {
    name: name.value,
    email: userEmail.value,
  };

  array.push(data);
  localStorage.setItem("todo-app", JSON.stringify(array));
  console.log(array);
  fetchData();
});

// update form event listener
updateSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  edittodo();
});

fetchData();
