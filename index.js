noOfDrum = document.querySelectorAll(".drum").length;

// key detected 

for(var i = 0; i < noOfDrum; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        
    
        var ButtonInnerHTML = this.innerHTML;

        makeSound(ButtonInnerHTML);
        buttonAnimation(ButtonInnerHTML);

        
    });
}

// keyboard key detected

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

// sound playing

    function makeSound(key){
        switch (key) {
            case "A":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;

            case "B":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            
            case "C":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "D":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

            case "E":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            
            case "F":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "G":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            
            
            default:
                console.log(ButtonInnerHTML);
        }
        
    
    }

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout ( function () {

        activeButton.classList.remove("pressed");
        
    }, 100);
}



