const box = document.getElementById("box")
let outerBox = document.createElement("div");
let cardBody = document.createElement("div");
let h5 = document.createElement("h5");
let para = document.createElement("p");
let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

outerBox.setAttribute("class", "card")
outerBox.setAttribute("style", "width: 18rem;")
cardBody.setAttribute("class", "card-body")
h5.setAttribute("class", "card-title")
para.setAttribute("class", "card-text")
ul.setAttribute("class", "list-group list-group-flush")
li1.setAttribute("class", "list-group-item")
li2.setAttribute("class", "list-group-item")
li3.setAttribute("class", "list-group-item")

box.appendChild(outerBox);
outerBox.appendChild(cardBody);
cardBody.appendChild(h5);
cardBody.appendChild(para);
outerBox.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);


// If API does not have an image with it then uses placeholder instead
// if(results[i].poster_path != null){
//   img_tag.setAttribute("src", `${poster_path}${results[i].poster_path}`);
// }else{
//   img_tag.setAttribute("src", "./assets/img/no-poster-available.jpg");
//   img_tag.style.height = "412.5px";
// }
h5.innerText = `${results[i].name}`
para.innerText = `${results[i].name}`
li1.innerText = `${results[i].name}`
li2.innerText = `${results[i].name}`
li3.innerText = `${results[i].name}`



// localStorage.setItem("results", JSON.stringify(results));
// Adds event listener to all images so opens next page if clicked on
// img_tag.addEventListener("click", nextPageImage)