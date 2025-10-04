let button=document.createElement("button");
let input=document.createElement("input");
button.innerText="click me";

document.querySelector('body').append(input);

document.querySelector('body').append(button);
button.setAttribute("id","btn");
input.setAttribute("placeholder","username");
let btn=document.querySelector("#btn");
btn.classList.add(btn);

let p=document.createElement("p");
p.innerHTML="Apna college <b>Delta</b> practice";
document.querySelector("body").append(p);