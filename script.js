
const background = document.querySelector(".background")
const dino = document.querySelector(".dino");
let isJumping = false;
let  endGame = false;
let position= 0;
let contador= 0;

function  keySalto (evento){
    if(evento.keyCode === 38) {
       if(!isJumping) {
        salto()
        contador++
        document.querySelector(".contador").innerHTML ="Saltaste: "+contador +" veces";
    }

     
            
         
    }
        
    }
function salto (){
    

    isJumping= true;
    let upInterval = setInterval(() => {
    if (position >= 150){

        //detinee el bicho en altura
        clearInterval(upInterval)

        //volver posion inicial (descer)
        let downInterval = setInterval(() => {
            if(position <= 0){
                clearInterval(downInterval)
                isJumping= false;

            } else{
             
                 position -= 10;
                 dino.style.bottom = position +"px"
            }}, 20); 
          
            }
                     else {         

          ///sube el bicho
                position += 10;                
                dino.style.bottom = position + "px"
                 }}, 20);

                

           }

        
function createCactus(){
const  cactus = document.createElement("div")
let cactusPosition = 1000;
let randomTime = Math.random() * 6000;   



cactus.classList.add("cactus")
cactus.style.left= 1000 +"px"
background.appendChild(cactus)

var leftInterval = setInterval(() => {
   
  
  
    if(cactusPosition < -60){
        clearInterval(leftInterval)
        background.removeChild(cactus)
        
    } else if(cactusPosition >0 && cactusPosition < 60 && isJumping == false && position<60 ){
        // colition XD  
        clearInterval(leftInterval)
        document.body.innerHTML= "<h2  class=fim> End Game? >>>>>>>> Press F5 restart  </h2>" 
    } else {
        cactusPosition -= 10;                
        cactus.style.left= cactusPosition +"px"
    }

}, 20);

setTimeout(createCactus,randomTime )


}
createCactus()

console.log(contador)





document.addEventListener("keyup", keySalto)