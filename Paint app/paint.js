// let area=document.querySelector(".paintarea");
const canvas = document.querySelector('.paintarea');
const ctx = canvas.getContext('2d');
let key=false;
let posx ,posy;
let size=3;
let erase=false;
let curr_colour="black";
const log = document.getElementById("log");
canvas.addEventListener("mousemove",(e)=>{
    posx=e.offsetX;
    posy=e.offsetY;
    if(key){
    document.querySelector("h4").innerHTML=`Client pos( ${posx} , ${posy})`;
    ctx.lineTo(posx,posy);
        ctx.stroke();
    
}
});
canvas.addEventListener("mouseover",()=>{
    
    canvas.focus();
});
canvas.addEventListener("mouseout",()=>{
    canvas.blur();
});
canvas.addEventListener("keydown",(evt)=>{
    if(evt.key==='Control'){ 
        ctx.beginPath();
        ctx.moveTo(posx,posy);
        console.log(posx,posy);
        ctx.lineWidth=check();
        ctx.lineCap="round";
        ctx.strokeStyle=curr_colour;
        key=true;
    }
});
canvas.addEventListener("keyup",(evt)=>{
    if(evt.key==='Control'){
        console.log("key up");
        key=false;
    }
});
function check(){
    if(!erase){
        size=func();
        return size;
    }
    else if(erase){
        size=func();
        size= size*2;
        console.log("size is:",size);
        return size;
    }
    return 6;

}
const input=document.getElementById("size");

function func(){
    temp=input.valueAsNumber;
    if(temp<=30 && temp>=3){
          return temp;
    }
    else{
        alert('invalid size input---enter size between 2 to 30-----');
        input.value=6;
        return 6;
    }

}
function toggleButton(btn) {
// Remove 'active' class from all buttons
document.querySelectorAll('.color').forEach(button => {
            button.classList.remove('active');
        });
        
        // Add 'active' class to the clicked button
        btn.classList.add('active');
  }
function setcolor(color){
      switch(color){
        case "blue":
            curr_colour="rgb(70, 70, 146)";
            erase=false;
            break;
        
        case "black":
            curr_colour="black";
            erase=false;
            break;
        
        case "red":
            curr_colour="red";
            erase=false;
            break;
        case "eraser":
            curr_colour="white";
            erase=true;
            break;
      }
    }