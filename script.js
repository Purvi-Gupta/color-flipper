console.log("hello");
const btn = document.querySelector(".btn");
const color_text = document.querySelector('#color-text');

const heaxcode =[0,1,2,3,4,5,6,"A","B","C","D","F"];

function getRandomNumber(){
    return Math.floor((Math.random() * heaxcode.length));
}

btn.addEventListener('click',() => {
    let hexacolor = "#";

    for( let i = 0; i<6; i++){
        hexacolor += heaxcode[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexacolor;
    color_text.textContent = hexacolor;
});