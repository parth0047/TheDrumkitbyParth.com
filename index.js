
for(var i=0; i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var button = this.innerHTML;
    playsound(button);
    animation1(button);

});
}


document.addEventListener("keydown",function(event){playsound(event.key);
    animation1(event.key);
});



function animation1(word)
{
    document.querySelector("."+word).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+word).classList.remove("pressed");
    },100)
}


function playsound(key)
{
    switch(key){
        case "w":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
            break;
        case "a":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var basss = new Audio("./sounds/kick-bass.mp3");
            basss.play();
            break;
        case "k":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        default:
            console.log(key);

    }
 
}
 