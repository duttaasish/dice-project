var randNo1 , randNo2;
var randImage1;
var randImage2;
var total;
function rollCount()
    {
        
        
        randNo1 = Math.floor(Math.random()*6)+1;
        randNo2 = Math.floor(Math.random()*6)+1;
        randImage1 = "images/dice" + randNo1 + ".png";
        randImage2 = "images/dice" + randNo2 + ".png";

        // document.querySelectorAll("img")[0].setAttribute("src", randImage1);           
        // document.querySelectorAll("img")[1].setAttribute("src", randImage2); 
        document.getElementById("img1").src=randImage1;  
        document.getElementById("img2").src=randImage2;  

        total = randNo1 + randNo2;
        
        document.getElementById("rollCount").style.color = "red";
        document.getElementById("rollCount").innerHTML = total;
        document.getElementById("rollCount").style.fontSize = "xxx-large";
    }


    // if (randNo1 > randNo2)
// {
//   document.querySelector("h1").innerHTML = "Player 1 Won";
// }
// else if (randNo2 > randNo1)
// {
//   document.querySelector("h1").innerHTML = "Player 2 Won";
// }
// else
// {
//   document.querySelector("h1").innerHTML = "Draw...";
// }
