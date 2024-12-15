function addTask(){
    var taskInput= document.getElementById("taskinput").value
    var tasklist=document.getElementById("tasklist")
    if(taskInput=="")
    {
       alert("please enter the task")
       return
    }
    var listItems=document.createElement('li')
     listItems.innerText=taskInput
     tasklist.appendChild(listItems)
   
   
     var buttoncontainer=document.createElement('div')
     listItems.appendChild(buttoncontainer)
     buttoncontainer.className="task-button"
   
     var deletebutton=document.createElement('button')
     buttoncontainer.appendChild(deletebutton)
     deletebutton.innerText="Delete"
     deletebutton.onclick=function(){
       tasklist.removeChild(listItems)
   
     }
   
     var completebutton=document.createElement('button')
     buttoncontainer.appendChild(completebutton)
     completebutton.innerText="Complete"
     completebutton.onclick=function(){
     listItems.classList.toggle('complete')
     }
     taskInput.value=""
   
   
   }
