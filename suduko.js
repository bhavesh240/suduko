var myarray1 = new Array(9);
var row = 0;
var column = 0,getvalue,get;


var suduko1 =[5,3,0,0,7,0,0,0,0,
              6,0,0,1,9,5,0,0,0,
              0,9,8,0,0,0,0,6,0,
              8,0,0,0,6,0,0,0,3,
              4,0,0,8,0,3,0,0,1,
              7,0,0,0,2,0,0,0,6,
              0,6,0,0,0,0,2,8,0,
              0,0,0,4,1,9,0,0,5,
              0,0,0,0,8,0,0,7,9];
              
              
var suduko2 =[0,9,6,0,1,8,5,7,4,
              0,8,4,0,7,0,6,0,3,
              7,0,3,0,4,5,0,0,9,
              6,0,5,0,9,0,3,4,1,
              9,0,1,4,0,6,8,0,7,
              0,7,0,5,0,0,9,2,6,
              0,6,0,2,5,0,4,9,8,
              0,5,0,7,6,0,1,3,2,
              3,0,2,0,8,0,7,0,5];
              
              

var suduko3 =[0,0,0,3,1,0,5,0,4,
              5,8,0,0,0,2,0,0,0,
              0,1,0,6,4,0,2,0,9,
              6,0,5,8,9,7,3,4,1,
              0,3,0,4,0,6,0,5,7,
              4,7,0,5,0,1,9,2,6,
              1,0,7,0,5,3,4,9,8,
              0,5,0,7,6,4,1,3,2,
              0,4,0,1,0,9,7,0,0];
              

var suduko4 =[0,0,0,0,0,0,0,0,0,
              0,8,4,9,0,2,6,1,0,
              0,1,3,6,0,5,0,8,0,
              0,2,5,8,0,7,3,4,0,
              0,0,0,0,0,0,0,0,0,
              0,7,8,5,0,1,9,2,0,
              0,6,0,2,0,3,4,9,0,
              0,5,9,7,0,4,1,3,0,
              0,0,0,0,0,0,0,0,0];
              

var suduko5 =[2,0,0,0,1,8,5,0,4,
              5,8,4,0,7,0,6,1,3,
              7,1,3,0,4,5,2,0,9,
              6,2,0,0,9,0,3,4,1,
              9,3,0,0,5,6,8,5,7,
              4,0,8,0,3,1,9,2,0,
              0,0,7,0,0,0,0,0,8,
              8,0,0,0,6,0,1,0,2,
              3,0,0,1,0,9,7,0,5];
              


var suduko6 =[1,0,2,4,8,0,3,7,6,
              7,3,0,2,0,6,0,4,1,
              4,6,8,0,0,1,2,9,5,
              0,8,0,1,2,4,6,5,9,
              0,9,1,0,6,0,0,2,8,
              2,0,0,8,0,0,7,1,3,
              0,1,0,6,0,7,5,8,2,
              6,2,5,0,4,0,1,3,7,
              0,0,0,5,1,0,9,6,4];
              

var suduko7 =[0,5,0,0,8,0,3,0,6,
              7,3,0,2,0,6,0,4,0,
              0,6,0,3,7,0,2,9,5,
              3,8,7,0,2,4,0,0,9,
              0,9,0,7,0,3,4,2,8,
              2,4,0,8,0,5,0,1,3,
              9,0,4,6,3,7,5,8,2,
              6,0,0,9,0,8,0,0,7,
              8,0,0,0,1,0,9,0,4];
              
var suduko8 =[1,0,2,4,8,9,3,7,6,
              0,3,0,2,0,0,0,4,1,
              0,6,0,0,7,1,2,9,5,
              3,8,0,1,0,0,6,5,9,
              0,9,1,7,6,0,4,2,8,
              2,0,0,8,9,5,0,1,3,
              0,1,4,6,0,7,5,0,2,
              6,0,0,9,4,8,1,0,7,
              0,0,3,0,1,0,9,0,0];
              


var suduko9= [0,4,2,0,6,1,0,5,3,
              3,8,7,5,0,0,0,4,1,
              0,1,0,8,0,4,2,0,7,
              2,6,0,1,0,7,5,8,9,
              0,7,0,9,0,5,3,0,4,
              4,5,9,0,8,0,1,7,2,
              0,0,0,2,1,8,4,3,0,
              0,2,0,4,0,3,9,0,6,
              0,3,0,6,5,0,7,2,8];
              
              
var suduko10 = [9,0,2,7,0,1,0,5,3,
                3,8,0,5,0,2,0,4,0,
                0,1,0,8,3,4,0,9,7,
                2,0,0,1,0,7,5,8,9,
                0,7,1,0,0,5,3,6,0,
                0,5,9,0,8,0,1,7,2,
                7,9,0,2,1,0,0,3,0,
                0,0,8,0,0,3,9,1,6,
                0,0,4,0,5,0,0,0,8];              



var suduko11 = [0,4,2,0,0,1,0,5,0,
                3,0,0,5,0,2,6,0,1,
                6,1,0,8,3,4,0,9,7,
                0,6,0,0,4,0,5,8,9,
                0,7,1,9,0,5,3,6,4,
                4,0,9,0,0,0,0,7,2,
                7,9,0,2,1,8,0,3,5,
                0,0,8,4,7,3,9,0,6,
                0,3,0,6,0,9,0,2,0];              


function check(getid){ // main function  to run on every keyup event
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
  if(((row == 0)||(row == 1)||(row == 2))&&((column == 0)||(column == 1)||(column == 2))){  // check block1
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
  }
}



function result(){
  arrayindex();
    for(var i=0;i<9;i++){
      for(var j=0;j<9;j++){
        document.getElementById(myarray1[i][j]).disabled = true;
      }
    }
        document.getElementById("table").setAttribute("style","opacity:0.3;");
        document.getElementById("heading").setAttribute("style","opacity:1;");
        document.getElementById("result").setAttribute("style","display : inline;");
        document.getElementById("result").innerHTML = "GAME WON";
}

function restart(){
  window.open("suduko.html","_self");
}























