// // tagname
// // element id
// // element class / query selector

// // classname

// let title = document.querySelector(".title");
// let subtitle = document.querySelector(".sub-title");
// // let paragraph = document.querySelector("#paragraph");
// let paragraph = document.getElementById("paragraph");
// console.log(paragraph);

// // h1.innerHTML = "Bye World!";

// // h1[0].innerHTML = "Bye World!";

// subtitle.innerHTML = "Hello Universe!";

// let allSpan = document.querySelectorAll("span");
// console.log(allSpan);

// card.innerHTML = `<h1>Hello World</h1>
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore cum
//         placeat qui hic adipisci, error iste. Officiis assumenda dolores eveniet
//         quas temporibus possimus cum perferendis labore, enim accusamus quaerat,
//         quos repellat est, laborum tenetur esse corporis laboriosam delectus
//         iure iste quam ducimus. Unde animi sed repellendus? Iste ipsam odit
//         pariatur.
//       </p>

//       <a href="https://www.google.com" target="_blank">Google</a>
//       <button>Click</button>`;

// card.innerText = "<h1>Hello World</h1>";

// let card = document.getElementById("card");

// let h1 = document.createElement("h1"); // <h1></h1>
// let p = document.createElement("p"); // <p></p>
// let a = document.createElement("a"); // <a></a>
// let button = document.createElement("button"); // <button></button>
// let img = document.createElement("img"); // <img />
// img.src =
//   "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/558930320_25081097791520792_4842277948238649316_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHd5EtjhrL5i_Nx1xdV3B_ejl5p7rsJow6OXmnuuwmjDlfuJglfkWHt0ncJPrLahkltE8k03P8pHAaoyFHozHeY&_nc_ohc=Qm4am8WsySQQ7kNvwFjqOf7&_nc_oc=Adn8ATGRWlbY7KoJwhLp0eylFQo-8O0LgMMk2jqeTD7GBXVg7gpXoSwb0ylpg39YRqw&_nc_zt=23&_nc_ht=scontent.fdac155-1.fna&_nc_gid=SUWSaIbtXimkUiXUk87IrQ&oh=00_AfdAj6MNKpVgJnWXV5Fo9Qwkyy5UxES1RdkQeodPrpUYaA&oe=68EC6190"; // <img src="https://via.placeholder.com/150" />
// card.appendChild(img);

// button.innerText = "Click Me";
// a.innerText = "Google"; // <a>Google</a>
// a.href = "https://www.google.com"; // <a href="https://www.google.com">Google</a>
// p.innerText =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."; // <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
// h1.innerText = "Hello World from JS to Card element"; // <h1>Hello World from JS to Card element</h1>

// card.appendChild(h1);
// card.appendChild(p);
// card.appendChild(a);
// card.appendChild(button);

const title = document.getElementById("title");
const input = document.getElementById("input");
// title.style.color = "blue";
// title.style.backgroundColor = "yellow";

// background-color
// title.classList.add("title");
// title.classList.remove("title");
// title.classList.add("title", "font");
// title.className = "title font";

// Event Listener / Handler
const button = document.getElementById("btn");
button.addEventListener("click", () => {
  // document.write("Button Clicked");
  // console.log("Button clicked");

  // alert("Button Clicked");
  // title.innerText = "Button Clicked";
  // button.innerText = "Button Clicked";
  title.classList.toggle("title");
});

button.addEventListener("mouseover", () => {
  button.style.color = "blue";
});

button.addEventListener("mouseout", () => {
  button.style.color = "pink";
});

input.addEventListener("input", (event) => {
  console.log(event.target.value);
});
