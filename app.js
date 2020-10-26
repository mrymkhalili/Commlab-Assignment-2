let counter = 0;                                                             //Counter to check the question on which you are on


var start = document.getElementById('start_button');                        //Start button
var choice1 = document.getElementById('choice_1');                          //Choice 1 button
var choice2 = document.getElementById('choice_2');                          //Choice 2 button
var restart = document.getElementById('restart_button');                    //Restart button

start.onclick = function(){                                                 //If start is clicked the function for starting the comic is triggered and its
    counter++;                                                              //changing the image source, hiding the start button, and raising the counter by 1
    document.getElementById("start_button").style.visibility = "hidden";    //meaning you are on the first question
    document.getElementById("comic_screen").src = "choice1.png";
}

function choiceScreen2(){                                                   //Functions for loading the choice screens (used below in a timeout fucnction)
    document.getElementById("comic_screen").src = "choice2.png";       
}

function choiceScreen3(){
    document.getElementById("comic_screen").src = "choice3.png";
}

function choiceScreen4(){
    document.getElementById("comic_screen").src = "choice4.png";
}

choice1.onclick = function(){                                               //If the button for choice 1 is clicked, the current question number is checked
    if(counter == 1){                                                       //since the answers are predetermined, an appropirate result is given
        document.getElementById("comic_screen").src = "question2.png"; 
        setTimeout(choiceScreen2, 3000);                                    //Wait 3 seconds before displaying the choice screen
    }
    if(counter == 2){
        document.getElementById("comic_screen").src = "question3.png";      
        setTimeout(choiceScreen3, 3000);       
    }
    if(counter == 3){
        document.getElementById("comic_screen").src = "death3.png";         //If the user picks the wrong choice, a death sceen is loaded and the restart
        document.getElementById('restart_button').style.display = "block"   //button is shown   
    }
    if(counter == 4){
        document.getElementById("comic_screen").src = "death4a.png";
        document.getElementById('restart_button').style.display = "block"       
    }

    counter++

}

choice2.onclick = function(){
    if(counter == 1 ){
        document.getElementById("comic_screen").src = "death1.png";   
        document.getElementById('restart_button').style.display = "block"    
    }
    if(counter == 2 ){
        document.getElementById("comic_screen").src = "death2.png";  
        document.getElementById('restart_button').style.display = "block"
    }
    if(counter == 3 ){
        document.getElementById("comic_screen").src = "question4.png";
        setTimeout(choiceScreen4, 3000);       
    }
    if(counter == 4){
        document.getElementById("comic_screen").src = "death4b.png"; 
        document.getElementById('restart_button').style.display = "block"      
    }

    counter++;
}

restart.onclick = function(){     //If the user clicks the restart button the entire page is reloaded and the comic starts from the beginning.
    location.reload();
}

