
var i;
var selectbtn=1;
var s=1;

function picrun(){
	 i=setInterval("showpic();",1000);
}

function showpic(){
   var ele=document.getElementById("sp");
       ele.src="images/pic"+selectbtn+".jpg";
       if (s!=0) {
        document.getElementById("btn"+s).style.backgroundColor="#ccc"; 
        document.getElementById("btn"+s).style.color="rgb(255, 102, 0)"
       };
       document.getElementById("btn"+selectbtn).style.backgroundColor="rgb(255, 102, 0)"; 
       document.getElementById("btn"+selectbtn).style.color="#fff"; 
       s= selectbtn;  
       selectbtn++;
       if (selectbtn==6) {
       	selectbtn=1;
       };
}

function shownpic(index){
     clearInterval(i);
     var ele=document.getElementById("sp");
       ele.src="images/pic"+index+".jpg";
       if (s!=0) {
        document.getElementById("btn"+s).style.backgroundColor="#ccc"; 
         document.getElementById("btn"+s).style.color="rgb(255, 102, 0)"
       };
       document.getElementById("btn"+index).style.backgroundColor="rgb(255, 102, 0)"; 
       document.getElementById("btn"+index).style.color="#fff";
      s= index;  
}
function startrun(b){
     if (b==5) {
      selectbtn=1;
     }else{
      selectbtn=b+1;
     }
     
     s=b;
     i=setInterval("showpic();",1000);
}
