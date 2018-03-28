var myarray1 = new Array(9);
var row = 0;
var column = 0,getvalue,get;
var sec = 0;
var minute = 0;
var hour = 0;
var difficult = 9;
var mainsolutionarray = new Array(9);
var solutionarray = new Array(9);

function check(getid){ // main functionto run on every keyup event
  getvalue = getid ;
  var got = document.getElementById(getvalue).value; 
  if((got > '0')&&(got <= '9')){
    get = Number(document.getElementById(getvalue).value); 
    arrayindex();
    findrc();
    crosscheck();
    checkgame();
  }
  else{
    document.getElementById(getvalue).value = "";
  }
}

function arrayindex(){
  for(var i=0;i<9;i++) //create 2-D array of input ids
    myarray1[i] = new Array(9);
    myarray1[0][0] = "r0c0"; myarray1[0][1] = "r0c1"; myarray1[0][2] = "r0c2"; myarray1[0][3] = "r0c3"; myarray1[0][4] = "r0c4";
    myarray1[0][5] = "r0c5"; myarray1[0][6] = "r0c6"; myarray1[0][7] = "r0c7"; myarray1[0][8] = "r0c8";
    myarray1[1][0] = "r1c0"; myarray1[1][1] = "r1c1"; myarray1[1][2] = "r1c2"; myarray1[1][3] = "r1c3"; myarray1[1][4] = "r1c4";
    myarray1[1][5] = "r1c5"; myarray1[1][6] = "r1c6"; myarray1[1][7] = "r1c7"; myarray1[1][8] = "r1c8";
    myarray1[2][0] = "r2c0"; myarray1[2][1] = "r2c1"; myarray1[2][2] = "r2c2"; myarray1[2][3] = "r2c3"; myarray1[2][4] = "r2c4";
    myarray1[2][5] = "r2c5"; myarray1[2][6] = "r2c6"; myarray1[2][7] = "r2c7"; myarray1[2][8] = "r2c8";
    myarray1[3][0] = "r3c0"; myarray1[3][1] = "r3c1"; myarray1[3][2] = "r3c2"; myarray1[3][3] = "r3c3"; myarray1[3][4] = "r3c4";
    myarray1[3][5] = "r3c5"; myarray1[3][6] = "r3c6"; myarray1[3][7] = "r3c7"; myarray1[3][8] = "r3c8";
    myarray1[4][0] = "r4c0"; myarray1[4][1] = "r4c1"; myarray1[4][2] = "r4c2"; myarray1[4][3] = "r4c3"; myarray1[4][4] = "r4c4";
    myarray1[4][5] = "r4c5"; myarray1[4][6] = "r4c6"; myarray1[4][7] = "r4c7"; myarray1[4][8] = "r4c8";
    myarray1[5][0] = "r5c0"; myarray1[5][1] = "r5c1"; myarray1[5][2] = "r5c2"; myarray1[5][3] = "r5c3"; myarray1[5][4] = "r5c4";
    myarray1[5][5] = "r5c5"; myarray1[5][6] = "r5c6"; myarray1[5][7] = "r5c7"; myarray1[5][8] = "r5c8";
    myarray1[6][0] = "r6c0"; myarray1[6][1] = "r6c1"; myarray1[6][2] = "r6c2"; myarray1[6][3] = "r6c3"; myarray1[6][4] = "r6c4";
    myarray1[6][5] = "r6c5"; myarray1[6][6] = "r6c6"; myarray1[6][7] = "r6c7"; myarray1[6][8] = "r6c8";
    myarray1[7][0] = "r7c0"; myarray1[7][1] = "r7c1"; myarray1[7][2] = "r7c2"; myarray1[7][3] = "r7c3"; myarray1[7][4] = "r7c4";
    myarray1[7][5] = "r7c5"; myarray1[7][6] = "r7c6"; myarray1[7][7] = "r7c7"; myarray1[7][8] = "r7c8";
    myarray1[8][0] = "r8c0"; myarray1[8][1] = "r8c1"; myarray1[8][2] = "r8c2"; myarray1[8][3] = "r8c3"; myarray1[8][4] = "r8c4";
    myarray1[8][5] = "r8c5"; myarray1[8][6] = "r8c6"; myarray1[8][7] = "r8c7"; myarray1[8][8] = "r8c8";
}

function suduko(){
  arrayindex();
  var counter = 0;
  var sudukoarray =[suduko1,suduko2,suduko3,suduko4,suduko5,suduko6,suduko7,suduko8,suduko9,suduko10,suduko11];
  var r = Math.abs(Math.floor(Math.random()*9)+1);
  var arrayprint = sudukoarray[r];
  for(var i=0;i<9;i++){
    for(var j=0;j<9;j++){
      if(arrayprint[counter] == 0){
        document.getElementById(myarray1[i][j]).value = "";
        counter++;
      }
      else{
        document.getElementById(myarray1[i][j]).value = arrayprint[counter];
        document.getElementById(myarray1[i][j]).disabled = true;
        counter++;
      } 
    }
  }
}

function findrc(){ //function to find row and column of the selected input field
  for(var i=0;i<9;i++){
    for(var j=0;j<9;j++){
      if(myarray1[i][j] === getvalue){
        row = i;
        column = j;
        break;
      }
    }
  }
}

function crosscheck(){ 
  var c= 0 ;
  for(var i=row;i<=row;i++){
    for(var j=0;j<9;j++){
      var a = Number(document.getElementById(myarray1[i][j]).value);
      var b = Number(document.getElementById(myarray1[j][column]).value);
      if(get == a){
        c++;
      }
      if(get == b){
        c++;
      }
    } 
  }
  if(((row == 0)||(row == 1)||(row == 2))&&((column == 0)||(column == 1)||(column == 2))){// check block1
    for(i=0;i<3;i++){
      for(j=0;j<3;j++){
        var a = Number(document.getElementById(myarray1[i][j]).value);
        if(get == a){
          c++;
        }
      }
    }
  }
  if(((row == 0)||(row == 1)||(row == 2))&&((column == 3)||(column == 4)||(column == 5))){ // check block2
    for(i=0;i<3;i++){
      for(j=3;j<6;j++){
        var a = Number(document.getElementById(myarray1[i][j]).value);
        if(get == a){
          c++;
        }
      }
    }
  }
  if(((row == 0)||(row == 1)||(row == 2))&&((column == 6)||(column == 7)||(column == 8))){ // check block3
    for(i=0;i<3;i++){
      for(j=6;j<9;j++){
        var a = Number(document.getElementById(myarray1[i][j]).value);
        if(get == a){
          c++;
        }
      }
    }
  }
  if(((row == 3)||(row == 4)||(row == 5))&&((column == 0)||(column == 1)||(column == 2))){ // check block4
    for(i=3;i<6;i++){
      for(j=0;j<3;j++){
        var a = Number(document.getElementById(myarray1[i][j]).value); 
        if(get == a){
          c++;
        }
      }
    }
  }
  if(((row == 3)||(row == 4)||(row == 5))&&((column == 3)||(column == 4)||(column == 5))){ // check block5
    for(i=3;i<6;i++){
      for(j=3;j<6;j++){
        var a = Number(document.getElementById(myarray1[i][j]).value);
        if(get == a){
          c++;
        }
      }
    }
  }
  if(((row == 3)||(row == 4)||(row == 5))&&((column == 6)||(column == 7)||(column == 8))){ // check block6
    for(i=3;i<6;i++){
      for(j=6;j<9;j++){
        var a = Number(document.getElementById(myarray1[i][j]).value);
        if(get == a){
          c++;
        }
      }
    }
  }
  if(((row == 6)||(row == 7)||(row == 8))&&((column == 0)||(column == 1)||(column == 2))){ // check block7
    for(i=6;i<9;i++){
      for(j=0;j<3;j++){
        var a = Number(document.getElementById(myarray1[i][j]).value);
        if(get == a){
          c++;
        }
      }
    }
  }
  if(((row == 6)||(row == 7)||(row == 8))&&((column == 3)||(column == 4)||(column == 5))){ // check block8
    for(i=6;i<9;i++){
      for(j=3;j<6;j++){
        var a = Number(document.getElementById(myarray1[i][j]).value);
        if(get == a){
        c++;
        }
      }
    }
  }
  if(((row == 6)||(row == 7)||(row == 8))&&((column == 6)||(column == 7)||(column == 8))){ // check block9
    for(i=6;i<9;i++){
      for(j=6;j<9;j++){
        var a = Number(document.getElementById(myarray1[i][j]).value);
        if(get == a){
        c++;
      }
    }
  }
}		
if(c==3){
  document.getElementById(getvalue).setAttribute("style","color:blue;"); 
}
else{
  document.getElementById(getvalue).setAttribute("style","color:red;"); 
}
}

function checkgame(){
  arrayindex();
  var correct = false;
  var sum =0;
  for(var i=0;i<9;i++){
    for(var j=0;j<9;j++){
      sum+=Number(document.getElementById(myarray1[i][j]).value);
      if((document.getElementById(myarray1[i][j]).style.color != 'red')&&(Number(document.getElementById(myarray1[i][j]).value) != 0)){
      correct = true;
      }
      else{
      correct = false;
      }
    }
  }
  if((sum == 405)&&(correct == true)){ 
    result();
    disableall();
  }
}

function result(){
  arrayindex();
  var stophour = hour;
  var stopminute = minute;
  var stopsec = sec;
  for(var i=0;i<9;i++){
    for(var j=0;j<9;j++){
      document.getElementById(myarray1[i][j]).disabled = true;
    }
  }
  document.getElementById("table").setAttribute("style","opacity:0.3;");
  document.getElementById("heading").setAttribute("style","opacity:1;");
  document.getElementById("result").setAttribute("style","display : inline;");
  document.getElementById("result").innerHTML = "GAME WON";
  document.getElementById("stoptimer").innerHTML = "TIME: "+stophour+":"+stopminute+":"+stopsec;
  document.getElementById("stoptimer").setAttribute("style","display : inline;");
  document.getElementById("time").setAttribute("style","display : none;");
  document.getElementById("hint").setAttribute("style","display : none;");
  document.getElementById("rules").setAttribute("style","display : none;");
}

function restart(){ //function to reload webpage
  window.open("suduko.html","_self");
}

function generatesuduko(){// function to generate random suduko
  var firstrow1 = [3,1,5,8,2,7,4,6,9];
  var firstrow2 = [1,4,7,8,5,2,3,6,9];
  var firstrow3 = [1,5,9,7,3,4,6,2,8];
  var firstrow4 = [9,1,8,2,3,7,4,5,6];
  var firstrow5 = [9,8,7,4,5,6,3,2,1];
  var firstrow6 = [1,2,3,4,5,6,7,8,9];
  var firstrow7 = [7,4,1,2,3,6,9,8,5];
  var firstrow8 = [1,4,7,8,9,6,3,2,5];
  var firstrow9 = [9,8,7,3,2,1,4,5,6];

  var suduko1 = [firstrow1,firstrow2,firstrow3,firstrow4,firstrow5,firstrow6,firstrow7,firstrow8,firstrow9];
  var selectsuduko = suduko1[Math.abs(Math.floor(Math.random()*7))];
  var suduko = new Array(9);
  var randomcounter = Math.abs(Math.floor(Math.random()*8));
  for(var i=0;i<9;i++){
    if(randomcounter == 9){
      randomcounter = 0;
    }
    suduko[i] = selectsuduko[randomcounter];
    randomcounter++;
  }
  document.getElementById("r0c0").value = suduko[0];
  document.getElementById("r0c1").value = suduko[1];
  document.getElementById("r0c2").value = suduko[2];
  document.getElementById("r0c3").value = suduko[3];
  document.getElementById("r0c4").value = suduko[4];
  document.getElementById("r0c5").value = suduko[5];
  document.getElementById("r0c6").value = suduko[6];
  document.getElementById("r0c7").value = suduko[7];
  document.getElementById("r0c8").value = suduko[8];

  document.getElementById("r1c0").value = document.getElementById("r0c3").value;
  document.getElementById("r1c1").value = document.getElementById("r0c4").value;
  document.getElementById("r1c2").value = document.getElementById("r0c5").value;
  document.getElementById("r1c3").value = document.getElementById("r0c6").value;
  document.getElementById("r1c4").value = document.getElementById("r0c7").value;
  document.getElementById("r1c5").value = document.getElementById("r0c8").value;
  document.getElementById("r1c6").value = document.getElementById("r0c0").value;
  document.getElementById("r1c7").value = document.getElementById("r0c1").value;
  document.getElementById("r1c8").value = document.getElementById("r0c2").value;

  document.getElementById("r2c0").value = document.getElementById("r0c6").value;
  document.getElementById("r2c1").value = document.getElementById("r0c7").value;
  document.getElementById("r2c2").value = document.getElementById("r0c8").value;
  document.getElementById("r2c3").value = document.getElementById("r0c0").value;
  document.getElementById("r2c4").value = document.getElementById("r0c1").value;
  document.getElementById("r2c5").value = document.getElementById("r0c2").value;
  document.getElementById("r2c6").value = document.getElementById("r0c3").value;
  document.getElementById("r2c7").value = document.getElementById("r0c4").value;
  document.getElementById("r2c8").value = document.getElementById("r0c5").value;

  document.getElementById("r3c0").value = document.getElementById("r0c7").value;
  document.getElementById("r3c1").value = document.getElementById("r0c8").value;
  document.getElementById("r3c2").value = document.getElementById("r0c0").value;
  document.getElementById("r3c3").value = document.getElementById("r0c1").value;
  document.getElementById("r3c4").value = document.getElementById("r0c2").value;
  document.getElementById("r3c5").value = document.getElementById("r0c3").value;
  document.getElementById("r3c6").value = document.getElementById("r0c4").value;
  document.getElementById("r3c7").value = document.getElementById("r0c5").value;
  document.getElementById("r3c8").value = document.getElementById("r0c6").value;

  document.getElementById("r4c0").value = document.getElementById("r0c1").value;
  document.getElementById("r4c1").value = document.getElementById("r0c2").value;
  document.getElementById("r4c2").value = document.getElementById("r0c3").value;
  document.getElementById("r4c3").value = document.getElementById("r0c4").value;
  document.getElementById("r4c4").value = document.getElementById("r0c5").value;
  document.getElementById("r4c5").value = document.getElementById("r0c6").value;
  document.getElementById("r4c6").value = document.getElementById("r0c7").value;
  document.getElementById("r4c7").value = document.getElementById("r0c8").value;
  document.getElementById("r4c8").value = document.getElementById("r0c0").value;

  document.getElementById("r5c0").value = document.getElementById("r0c4").value;
  document.getElementById("r5c1").value = document.getElementById("r0c5").value;
  document.getElementById("r5c2").value = document.getElementById("r0c6").value;
  document.getElementById("r5c3").value = document.getElementById("r0c7").value;
  document.getElementById("r5c4").value = document.getElementById("r0c8").value;
  document.getElementById("r5c5").value = document.getElementById("r0c0").value;  
  document.getElementById("r5c6").value = document.getElementById("r0c1").value;
  document.getElementById("r5c7").value = document.getElementById("r0c2").value;
  document.getElementById("r5c8").value = document.getElementById("r0c3").value;

  document.getElementById("r6c0").value = document.getElementById("r0c5").value;
  document.getElementById("r6c1").value = document.getElementById("r0c6").value;
  document.getElementById("r6c2").value = document.getElementById("r0c7").value;
  document.getElementById("r6c3").value = document.getElementById("r0c8").value;
  document.getElementById("r6c4").value = document.getElementById("r0c0").value;
  document.getElementById("r6c5").value = document.getElementById("r0c1").value;
  document.getElementById("r6c6").value = document.getElementById("r0c2").value;
  document.getElementById("r6c7").value = document.getElementById("r0c3").value;
  document.getElementById("r6c8").value = document.getElementById("r0c4").value;

  document.getElementById("r7c0").value = document.getElementById("r0c8").value;
  document.getElementById("r7c1").value = document.getElementById("r0c0").value;
  document.getElementById("r7c2").value = document.getElementById("r0c1").value;
  document.getElementById("r7c3").value = document.getElementById("r0c2").value;
  document.getElementById("r7c4").value = document.getElementById("r0c3").value;
  document.getElementById("r7c5").value = document.getElementById("r0c4").value;
  document.getElementById("r7c6").value = document.getElementById("r0c5").value;
  document.getElementById("r7c7").value = document.getElementById("r0c6").value;
  document.getElementById("r7c8").value = document.getElementById("r0c7").value;

  document.getElementById("r8c0").value = document.getElementById("r0c2").value;
  document.getElementById("r8c1").value = document.getElementById("r0c3").value;
  document.getElementById("r8c2").value = document.getElementById("r0c4").value;
  document.getElementById("r8c3").value = document.getElementById("r0c5").value;
  document.getElementById("r8c4").value = document.getElementById("r0c6").value;
  document.getElementById("r8c5").value = document.getElementById("r0c7").value;
  document.getElementById("r8c6").value = document.getElementById("r0c8").value;
  document.getElementById("r8c7").value = document.getElementById("r0c0").value;
  document.getElementById("r8c8").value = document.getElementById("r0c1").value; 
  arrayindex();
  disableall();
  solution();
  for(var i=0;i<9;i++){
    for(var j=0;j<difficulty;j++){
      var randomnumber1 = Math.abs(Math.floor(Math.random()*9)); 
      var randomnumber2 = Math.abs(Math.floor(Math.random()*9));
      document.getElementById(myarray1[randomnumber1][randomnumber2]).value = '';
    }
  } 
}

function checkposition(){ //function to disable some inputs
  arrayindex();
  for(var i=0;i<9;i++){
    for(var j=0;j<9;j++){
      if(document.getElementById(myarray1[i][j]).value != ''){
        document.getElementById(myarray1[i][j]).disabled = true;
      }
      else{
        document.getElementById(myarray1[i][j]).disabled = false;
      }
    }
  }	
}

function myTimer(){
  if(sec>=60){
    sec=0;
    minute++;
  }
  if(minute>=60){
    minute = 0;
    hour++;
  }
  document.getElementById("time").innerHTML = "Time: "+hour+":"+minute+":"+sec;
  sec++;
  setTimeout(myTimer,1000);
}

function easylevel(){
  difficulty = Math.abs(Math.floor(Math.random()*3)+1);
  generatesuduko();
  checkposition(); 
  document.getElementById("easybtn").disabled = true; 
  document.getElementById("mediumbtn").disabled = true;
  document.getElementById("hardbtn").disabled = true;
  document.getElementById("levelheading").setAttribute("style","opacity : 0.2;");
  myTimer();
  document.getElementById("hint").setAttribute("style","display : inline;");
}

function mediumlevel(){
  difficulty = 9;
  var medium = Math.abs(Math.floor(Math.random()*3));
  difficulty = Math.abs(difficulty-medium);
  generatesuduko();
  checkposition();
  document.getElementById("easybtn").disabled = true;
  document.getElementById("mediumbtn").disabled = true;
  document.getElementById("hardbtn").disabled = true;
  document.getElementById("levelheading").setAttribute("style","opacity : 0.2;");
  myTimer();
  document.getElementById("hint").setAttribute("style","display : inline;");
}

function hardlevel(){
  difficulty = 15;
  var medium = Math.abs(Math.floor(Math.random()*3));
  difficulty = Math.abs(difficulty-medium);
  generatesuduko();
  checkposition();
  document.getElementById("mediumbtn").disabled = true;
  document.getElementById("easybtn").disabled = true;
  document.getElementById("hardbtn").disabled = true;
  document.getElementById("levelheading").setAttribute("style","opacity : 0.2;");
  myTimer();
  document.getElementById("hint").setAttribute("style","display : inline;");
}

function disableall(){
  arrayindex();
  for(var i=0;i<9;i++){
    for(var j=0;j<9;j++){
      document.getElementById(myarray1[i][j]).disabled = true;
    }
  }
}

function solution(){
  var text2 = "";
  arrayindex();
  for(var i=0;i<9;i++){
    solutionarray[i] = new Array(9);
    for(var j=0;j<9;j++){
      solutionarray[i][j] = document.getElementById(myarray1[i][j]).value;
    }
    text2 = text2+solutionarray[i]+"\n";
    mainsolutionarray[i] = solutionarray[i];
  }
}

function printsolution(){
  var text = "";
  for(var i=0;i<9;i++){
    text = text+mainsolutionarray[i]+"<br>";
  }
  showhint();
  setTimeout(killhint,1000);
}

function showhint(){
  arrayindex();
  for(var i=0;i<9;i++){
    for(var j=0;j<9;j++){
      if((document.getElementById(myarray1[i][j]).value == '')||(document.getElementById(myarray1[i][j]).style.color == "red")){
        document.getElementById(myarray1[i][j]).value = solutionarray[i][j];
        document.getElementById(myarray1[i][j]).setAttribute("style","color : brown;");
        document.getElementById(myarray1[i][j]).disabled = true;
      }
    }
  }
}

function killhint(){
  arrayindex();
  for(var i=0;i<9;i++){
    for(var j=0;j<9;j++){
      if(document.getElementById(myarray1[i][j]).style.color == "brown"){
        document.getElementById(myarray1[i][j]).value = '';
        document.getElementById(myarray1[i][j]).disabled = false;
      }
    }
  }
}
