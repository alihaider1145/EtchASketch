const gridHolder = document.querySelector(".gridHolder")
const newGridBtn = document.querySelector(".newGridBtn");
const rgbTrailBtn = document.querySelector(".rgbTrailBtn");
const blackTrailBtn = document.querySelector(".blackTrailBtn");
const resetGridBtn = document.querySelector(".resetGridBtn");
const shadeEffectBtn = document.querySelector(".shadeEffectBtn")

let rgbActive = false;
let blackActive = false;
let shadeActive = false;
let isDraw = false;

let gridSize = 5;

newGrid(gridSize);

newGridBtn.addEventListener("click", ()=>{
    newGrid(prompt("Enter the number of grids(<100):"));
})
blackTrailBtn.addEventListener("click",blackTrail);
rgbTrailBtn.addEventListener("click", rgbTrail);
resetGridBtn.addEventListener("click", resetGrid);
shadeEffectBtn.addEventListener("click", shadeEffect)

function newGrid(gridSize){
    let squareSize = (((gridHolder.offsetWidth)/gridSize)-2);
    while(gridHolder.firstChild){
        gridHolder.removeChild(gridHolder.firstChild);
    }
    for(let i =1;i<=gridSize*gridSize;i++){
        const square = document.createElement("div");
        square.classList.add("square");
        gridHolder.appendChild(square);
        square.style.width = Math.floor(squareSize) + "px";
        square.style.height = squareSize + "px";
    }
}

function resetGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
        square.style.opacity = 1;
    });
}

gridHolder.addEventListener("mouseover", event => {
    if(!event.target.classList.contains("square")) return;
    else if (blackActive){
        event.target.style.backgroundColor = 'black';
        event.target.style.opacity = '1';
    }
    else if(rgbActive){
        event.target.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        event.target.style.opacity = '1';
    }
    else if(shadeActive){
        if((event.target.style.opacity > 0) && (event.target.style.backgroundColor === 'black')){
            event.target.style.opacity = parseFloat(event.target.style.opacity) + 0.1;
        }
        else {
            event.target.style.backgroundColor = 'black';
            event.target.style.opacity = '0.1';
        }
    }
});

gridHolder.addEventListener("touchstart", event => {
    event.preventDefault();
    isDraw = true;

    if (blackActive){
        event.target.style.backgroundColor = 'black';
        event.target.style.opacity = '1';
    }
    else if(rgbActive){
        event.target.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        event.target.style.opacity = '1';
    }
    else if(shadeActive){
        if((event.target.style.opacity > 0) && (event.target.style.backgroundColor === 'black')){
            event.target.style.opacity = parseFloat(event.target.style.opacity) + 0.1;
        }
        else {
            event.target.style.backgroundColor = 'black';
            event.target.style.opacity = '0.1';
        }
    }
});

gridHolder.addEventListener("touchmove", event => {
    event.preventDefault();
    let targetElement = document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY);

    if (!isDraw) return;
    if (targetElement && targetElement.classList.contains("square")) {
        if (blackActive){
            targetElement.style.backgroundColor = 'black';
            targetElement.style.opacity = '1';
        }
        else if(rgbActive){
            targetElement.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
            targetElement.style.opacity = '1';
        }
        else if(shadeActive){
            if((targetElement.style.opacity > 0) && (targetElement.style.backgroundColor === 'black')){
                targetElement.style.opacity = parseFloat(targetElement.style.opacity) + 0.1;
            }
            else {
                targetElement.style.backgroundColor = 'black';
                targetElement.style.opacity = '0.0000000001';
            }
        }
    }
});

gridHolder.addEventListener("touchend", event => {
    event.preventDefault();
    isDraw = false;
});

function blackTrail(){
    rgbActive = false;
    blackActive = true;
    shadeActive = false;
}

function rgbTrail(){
    rgbActive = true;
    blackActive = false;
    shadeActive = false;
}

function shadeEffect(){
    rgbActive = false;
    blackActive = false;
    shadeActive = true;
}