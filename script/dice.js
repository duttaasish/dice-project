
var randNo1 , randNo2;
var randImage1;
var randImage2;
var total;
var j=0;

function rollCountx(callback, interval, repeatTimes)
    {   
      let repeated = 0;
      const intervalTask = setInterval(doTask , interval);

      function doTask()
      {
          if (repeated <repeatTimes)
          {
              callback();
              repeated +=1;
          }
          else
          {
            clearInterval(intervalTask);
            total = randNo1 + randNo2;  
            document.getElementById("rollCount").style.color = "black";
            document.getElementById("rollCount").innerHTML = total;
            document.getElementById("rollCount").style.fontSize = "xxx-large";   
          }
      }
    
    }

function rollCount()
    {            
        randNo1 = Math.floor(Math.random()*6)+1;
        randNo2 = Math.floor(Math.random()*6)+1;
        randImage1 = "images/dice" + randNo1 + ".jpg";
        randImage2 = "images/dice" + randNo2 + ".jpg";
        document.getElementById("img1").src=randImage1;        
        document.getElementById("img2").src=randImage2;  
    }     
        
    function roll()
    {
        rollCountx(rollCount, 100, 10);        
    }
