
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

function removeTask(index){
  myTasks.splice(index,1);
  localStorage.setItem('todo-storage',JSON.stringify(myTasks));
  display();
}

tasklist.addEventListener("click",function(event){
  var curritem=event.target;
  if (curritem.tagName==="li"){
    var index=Array.from(curritem.parentElement.children).indexOf(curritem);
    myCompletedTasks.push(curritem.innerText); //CHECK ONCE
    myTasks=myTasks.splice(index,1);
    localStorage.setItem('todo-storage',JSON.stringify(myTasks));
    localStorage.setItem('ctodo-storage',JSON.stringify(myCompletedTasks));
    

    //curritem.childNodes[0].toggleAttribute("checked");
    //curritem.childNodes[1].classList.toggle("checked");
  }
})

function display(){
  tasklist.innerHTML="";
  for(var i=0; i<myTasks.length;i++){
    tasklist.innerHTML+='<li class="task"><label for=""><input type="checkbox" id="clickme" onclick=""><span class="task-item">'+ myTasks[i] +'</span><span class="close" onclick="removeTask('+i+')">&#215;</span></label></li>';
  }
}
/*
// Create close buttons
// var alltasks = document.getElementsByTagName("li");
// for (var i = 0; i < alltasks.length; i++) {
//   var span = document.createElement("span");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   alltasks[i].appendChild(span);
// }

//Add a new task

addButton.addEventListener("click",function() {
    //add a new task
    var newitem=document.createElement("li");
    newitem.classList.add("task")
    tasklist.appendChild(newitem)
    var newlabel=document.createElement("label");
    newitem.appendChild(newlabel);
    var newinput=document.createElement("input");
    newinput.setAttribute("type","checkbox");
    newlabel.appendChild(newinput);
    var newtext=document.createElement("span");
    newlabel.appendChild(newtext);
    newtext.innerText=inputField.value;
    var newcross = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    newcross.className = "close";
    newcross.appendChild(txt);
    newlabel.appendChild(newcross);
    // var arr=JSON.parse(sessionStorage.getItem('tasks'));
    // arr.push(newtext);
    // sessionStorage.setItem("tasks",JSON.stringify(arr));
    
    //reset inputField
    inputField.value="";

});




// Check an item off

// tasklist.addEventListener("click",function(event){
//   var curritem=event.target;
//   if (curritem.tagName==="li"){
//     curritem.childNodes[0].toggleAttribute("checked");
//     //curritem.childNodes[1].classList.toggle("checked");
//   }

// })

//
//Tasks -toggle- Completed Tasks
var ctasklist=document.getElementById("ctasklist");
var taskHead=document.getElementsByTagName('nav')[0].childNodes[0];
var ctaskHead=document.getElementsByTagName('nav')[0].childNodes[1];

/*taskHead.addEventListener('click',function(){
  ctasklist.style.display="none";
  tasklist.style.display="block";
  taskHead.classList.toggle('colored');
  ctaskHead.classList.toggle('colored');
})

ctaskHead.addEventListener('click',function(){
  tasklist.style.display="none";
  ctasklist.style.display="block";
  taskHead.classList.toggle('colored');
  ctaskHead.classList.toggle('colored');
})*/
/* TRASH

tasklist.addEventListener("click", function(event) {
  if (event.target.classList.contains("task")) {
    event.target.classList.toggle("checked");
    event.target.classList.add("checked-task");
    setTimeout(function(){
        event.target.remove();
    },500);
    //ctasklist.appendChild(event.target);
  }
  
});*/








