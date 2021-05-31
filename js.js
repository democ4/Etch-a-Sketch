const container = document.querySelector(".container");
let k=16;
createSketch(container,k);

function createSketch(container,k){
        container.style.gridTemplateColumns= `repeat(${k},auto)` ;
        container.style.gridTemplateRows=  `repeat(${k},auto)` ;
        for(let i=0 ;i<k*k;i++){
            let  div = document.createElement("div");
            container.appendChild(div);
        }
    }

setGird();
  function setGird(){
const gird = document.querySelectorAll(".container>div");
gird.forEach(div=>  div.addEventListener("mouseenter",hovereffeic));
}
function hovereffeic(){
    this.style.backgroundColor="rgb(230, 212, 185)";
}

const reset = document.querySelector("#reset");
reset.addEventListener("click",resetColor);

function resetColor(){

    const gird = document.querySelectorAll(".container>div");
    gird.forEach(div=>div.style.backgroundColor="blanchedalmond");
}

const change = document.querySelector("#change");
change.addEventListener("click",changesize);
function changesize (){
        let size= prompt("enter size :");

        if (  size<101 &&size >0 ){
            const newcontainer= document.createElement("div");
            newcontainer.className= "container";
            const oldcontainer = document.querySelector(".container");
            oldcontainer.parentNode.replaceChild(newcontainer,oldcontainer);

            
            createSketch(newcontainer,size);
            setGird();
        }
        else {alert("Enter number under 100")
        
    }
}
