 
 var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", 
 				"i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
 				 "s", "t", "u", "v", "w", "x", "y", "z"]

 var guess= ["CAM", "STEVE", "JULIUS", "LUKE"]

 var guessName = guess[Math.floor(Math.random() * guess.length)];


 if("_ _ _") {

guessName.text("CAM");
}

if("_ _ _ _") {

guessName.text("LUKE");
}

if ("_ _ _ _ _") {

guessName.text("STEVE")
}

if ("_ _ _ _ _ _") {

guessName.text("JULIUS")
}







 document.onkeyup = function(event) {
      var letterPressed = String.fromCharCode(event.key).toLowerCase();
      for(var i=0; i<computerRandom.length; i++)
      if (letterPressed === computerRandom[i]) {
         initialOptions[i] = letterPressed;
      } else {
        letterPressed.updatedLettersGuessed.innerHTML;
        updatedGuessesLeft--;
      }
  }