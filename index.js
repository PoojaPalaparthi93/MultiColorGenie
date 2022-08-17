var like= document.getElementById("paint");
var c = document.querySelectorAll(".fillcolor"); 
var bg =document.querySelectorAll(".color-box");

// will selects all the elements which are having the mentioned class names.

function generatecolor(){
    c.forEach((color) => { // in this statement color is an user-defined name
    let hexcode="#"+ Math.random().toString(16).substring(2 , 8); 
    // by using tostring() we are converting all the random values into string format where it is going to have characters too...
    color.innerHTML=hexcode; 
    });

    bg.forEach((bgcolor) => {
        let hexcode="#"+ Math.random().toString(16).substring(2 , 8); 
        bgcolor.style.backgroundColor = hexcode;
        bgcolor.addEventListener("click", saveColor()); 
        });

        

        function saveColor() {
            localStorage.setItem("bgdcolor", this.value);
        }

        function getColor(){
            console.log(localStorage.getItem("bgdcolor")) ;
        }

        getColor();
}




