const button = document.querySelector('button');
const bgh2 = document.querySelector('h2');
const section = document.querySelector('section');

button.addEventListener('click', () =>{
    let color = "#";
    color += Math.random().toString(16).slice(2,8);
    console.log(color);
     section.style.backgroundColor = color;
     bgh2.innerText = color;
})