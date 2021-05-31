var addButton = document.getElementById("addButton");
var tasklist = document.getElementById("tasklist");
var inputField = document.getElementById("inputField");
var ctasklist=document.getElementById("ctasklist");
var myTasks=[];
var myCompletedTasks=[];
window.onload=function() {
  if(JSON.parse(localStorage.getItem("todo-storage"))!=null){
    myTasks=JSON.parse(localStorage.getItem("todo-storage"));
  }
  if(JSON.parse(localStorage.getItem("ctodo-storage"))!=null){
    myCompletedTasks=JSON.parse(localStorage.getItem("ctodo-storage"));
  }
  display();
};

//Add a new task
function addNewTask(str){
  if(str!="") myTasks.push(str);
  else alert('empty input');
  localStorage.setItem('todo-storage',JSON.stringify(myTasks));
  display();
  //tasklist.innerHTML+='<li class="task"><label for=""><input type="checkbox" id="clickme" onclick=""><span class="task-item">'+ str +'</span><span class="close">&#215;</span></label></li>';
  
}
addButton.addEventListener("click",function(){
  addNewTask(inputField.value.trim());
  inputField.value="";
});

//Remove a task
function removeTask(index){
  myTasks.splice(index,1);
  localStorage.setItem('todo-storage',JSON.stringify(myTasks));
  display();
}

function removeCTask(index){
  myCompletedTasks.splice(index,1);
  localStorage.setItem('ctodo-storage',JSON.stringify(myCompletedTasks));
  display();
}

//Check a task
function checkTask(index){
  myCompletedTasks.push(myTasks[index]);
  localStorage.setItem('ctodo-storage',JSON.stringify(myCompletedTasks));
  removeTask(index);
  
}

//Uncheck a task
function uncheckTask(index){
  myTasks.push(myCompletedTasks[index]);
  localStorage.setItem('todo-storage',JSON.stringify(myTasks));
  myCompletedTasks.splice(index,1);
  localStorage.setItem('ctodo-storage',JSON.stringify(myCompletedTasks));
  display();
}





function display(){
  tasklist.innerHTML="";
  for(var i=0; i<myTasks.length;i++){
    tasklist.innerHTML+='<li class="task"><label for=""><input type="checkbox" id="clickme" onclick="checkTask('+i+')"><span class="task-item" onclick="checkTask('+i+')">'+ myTasks[i] +'</span><span class="close" onclick="removeTask('+i+')">&#215;</span></label></li>';
  }

  ctasklist.innerHTML="";
  for(var i=0; i<myCompletedTasks.length;i++){
    ctasklist.innerHTML+='<li class="ctask"><label for=""><input type="checkbox" id="clickme" checked onclick="uncheckTask('+i+')"><span class="task-item" onclick="uncheckTask('+i+')">'+ myCompletedTasks[i] +'</span><span class="close" onclick="removeCTask('+i+')">&#215;</span></label></li>';
  }
}

function opentab(tabName) {
   //$(atab).addClass('nav a.colored');
  var i;
  var x = document.getElementsByTagName("ul");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
  //$(atab).addClass('nav a.colored');
}

var tasktab = document.getElementById("task-head");
var ctasktab = document.getElementById("ctask-head");

function tcol() {
  tasktab.classList.add('colored');
  ctasktab.classList.remove('colored');
}

function ctcol() {
  ctasktab.classList.add('colored');
  tasktab.classList.remove('colored');
}
