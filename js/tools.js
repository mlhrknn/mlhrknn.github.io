function getRandomInt(form) {
ans=form.level.value*(Math.floor(Math.random() * 3)+1);
if(ans==3)      {document.getElementById("demo").innerHTML="SQL for Beginners"}
else if(ans==5) {document.getElementById("demo").innerHTML="Intermediate SQL"}
else if(ans==7) {document.getElementById("demo").innerHTML="Advanced SQL"}
else if(ans==6) {document.getElementById("demo").innerHTML="R for Beginners"}
else if(ans==10) {document.getElementById("demo").innerHTML="Intermediate R"}
else if(ans==14) {document.getElementById("demo").innerHTML="Advanced R"}
else if(ans==9) {document.getElementById("demo").innerHTML="Python for Beginners"}
else if(ans==15) {document.getElementById("demo").innerHTML="Intermediate Python"}
else{document.getElementById("demo").innerHTML="Advanced Pyhton"}


}

function count (form) {
    var ans = form.career.value/form.hr.value;
    if(form.hr.value>=10){document.getElementById("demo2").innerHTML="You need "+ parseInt(ans) +" week(s) to become one!"}
   else{document.getElementById("demo2").innerHTML="Sorry but you have to work harder! You need "+ parseInt(ans) +" week(s) to become one!"}
   } 

function wage (form) {
    var ans = form.career.value*form.year.value;
  document.getElementById("demo3").innerHTML="You'll earn "+ parseInt(ans) +"$ in " + form.year.value +" years!!!"
   } 


