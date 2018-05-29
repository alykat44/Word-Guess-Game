Main = {};
Main.WordArray = [];
Main.WordUArray = [];

Main.Lives = 10;
Main.NumInWordBank = Words.Length;

Main.Word = "test";
Main.WordU = "";

// Functions...

Main.PullWord = function(){
Main.Word = Words.List[(Math.floor(Math.random()*Main.NumInWordBank))];

}

Main.SetUnderLine = function () {
  Main.PullWord ();
  for(i=o; i<Main.Word.length; i++){
  Main.WordArray[i] = Main.Word.charAt (i);
  Main.WordArray[i] = "_";
  }
  Main.WordU = Main.WordUArray.join("");
  document.getElementById("WORD").innerHTML = Main.WordU;
  document.getElementById("numLetters").innerHTML = Main.Word.length

}

Main.UpdateLetter = function(letter) {
  Main.Changes = 0;
  for (i=0; i<Main.Word.length; i++){
  Main.WordArray[i] = Main.Word.charAt(i);
  if(Main.Word.charAt(i) == letter){
    Main.WordUArray[i] = letter;
    Main.Changes += 1;

    }
} 

  if (Main.Changes < 1) {
    Main.Lives -=1;
    document.getElementById("lives").innerHTML = Main.Lives;

    }
  Main.WordU = Main.WordArray.join("");
  document.getElementById("WORD").innerHTML = Main.WordU;

  Main.Word1 = Main.WordArray.join("");
  Main.Word2 = Main.WordUArray.join("");

  if (Main.Word1 == Main.Word2) {
    alert("You Win!!! Here comes the next word!!");
    window.location.reload();

  }
 
  if (Main.Lives < 1){
    document.getElementById("WORD").innerHTML == Main.Word;
    alert("No More Lives, Please Try Again!");
    window.location.reload();
  }

  }

  Main.PullWord();
  Main.SetUnderLine();








