const gridHolder = document.querySelector(".gridHolder")
const newGridBtn = document.querySelector(".newGridBtn");
const rgbTrailBtn = document.querySelector(".rgbTrailBtn");
const blackTrailBtn = document.querySelector(".blackTrailBtn");
const resetGridBtn = document.querySelector(".resetGridBtn");
const shadeEffectBtn = document.querySelector(".shadeEffectBtn")

let gridSize = 16;

newGrid(gridSize);

newGridBtn.addEventListener("click", ()=>{
    newGrid(prompt("Enter the number of grids(<100):"));
})
blackTrailBtn.addEventListener("click",blackTrail);
rgbTrailBtn.addEventListener("click", rgbTrail);
resetGridBtn.addEventListener("click", resetGrid);
shadeEffectBtn.addEventListener("click", shadeEffect)

function newGrid(gridSize){
    let squareSize = ((500/gridSize)-2);
    while(gridHolder.firstChild){
        gridHolder.removeChild(gridHolder.firstChild);
    }
    for(let i =1;i<=gridSize*gridSize;i++){
        const square = document.createElement("div");
        square.classList.add("square");
        gridHolder.appendChild(square);
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
    }
}

function resetGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
}


function blackTrail(){
    gridHolder.addEventListener("mouseover", (event)=>{
         event.target.style.backgroundColor = 'black';
    });
    console.log("Black activated");
}

function rgbTrail(){
    gridHolder.addEventListener("mouseover", (event)=>{
         event.target.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    });
    console.log("rgb activated")
}

function shadeEffect(){
    gridHolder.addEventListener("mouseover", (event)=>{
        if(event.target.style.opacity > 0){
            event.target.style.opacity = parseFloat(event.target.style.opacity) + 0.1;
        }
        else {
            event.target.style.backgroundColor = 'black';
            event.target.style.opacity = '0.1'
        }});
}