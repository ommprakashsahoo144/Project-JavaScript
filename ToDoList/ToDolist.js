let taskFormEl=document.getElementById('task-form');
let taskInputEl=document.getElementById('task-input');
let taskListEl=document.getElementById('task-list-el');

//localStorage.clear();
let taskList=localStorage.getItem('task')?JSON.parse(localStorage.getItem('task')):[];

if(taskList.length==0)taskListEl.innerHTML="List is Empty";


taskFormEl.addEventListener('submit',function(e){
    e.preventDefault();

    if(taskInputEl.value=='')return;

    let task=taskInputEl.value.trim();
    taskList.unshift(task);
    localStorage.setItem('task',JSON.stringify(taskList));
    displayTask(taskList);

    taskInputEl.value='';
})


//display task dynamically

function displayTask(task){

    if(task.length==0)
        taskListEl.innerHTML='';
    let eachTask="";

    task.forEach((task,index)=>{

        eachTask +=` <li class="list-group-item list-group-item-danger mt-3">
                                <span class="fw-bold"> ${task}</span>
                                <i class="bi bi-archive-fill float-end br-radius mx-2 " onclick="deleteTask(${index})"></i>
                                <i class="bi bi-pen-fill float-end br-radius" onclick="updateTask(${index})"></i>
                            </li>`;
    });
    taskListEl.innerHTML=eachTask;
   
}
displayTask(taskList);



function deleteTask(id){
    console.log("hi");
    
    taskList.splice(id,1);
    localStorage.setItem('task',JSON.stringify(taskList));
    displayTask(taskList);
}

function updateTask(id){
    taskInputEl.value=taskList[id];
    taskList.splice(id,1);
    localStorage.setItem('task',JSON.stringify(taskList));
    displayTask(taskList);

}

