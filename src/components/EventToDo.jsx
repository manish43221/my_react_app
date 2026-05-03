import './EventToDo.css'
import { useState } from "react";// useState is a hook
export function EventToDo(){
    // function handleSubmit(e){
    //     e.preventDefault();
    //     const input=e.target.task;
    //     const taskValue=input.value.trim();
    //     if(taskValue===""){
    //         alert("Can not add empty task");
    //         return;
    //     }
    //     alert("Your task is added");
    //     const li=document.createElement("li");
    //     li.innerHTML=`<span>${taskValue}</span>
    //     <button class="deleteBtn">Delete</button>`;
    //     document.getElementById("taskList").appendChild(li);
    // }
    // function handleListClick(e){
    //     if(e.target.className==="deleteBtn"){
    //         e.target.parentElement.remove();
    //     }
    // }
    // return(
    //     <div>
    //         <h1 id="htn">TO DO LIST</h1>
    //         <form onSubmit={handleSubmit}>
    //         <input type="text" name="task" placeholder="Enter task" />
    //         <button id ="btn" type="submit" >add task</button>
    //         </form>
    //      <ul id="taskList" onClick={handleListClick}></ul>
    //     </div>
    // )
    const [task,setTask]=useState("");
    const[tasks,setTasks]=useState([]);
    const [names] = useState(["ram", "shyam", "hari", "sita"]);
    const [search, setSearch] = useState("");

    const filteredNames = names.filter(name => name.toLowerCase().includes(search.toLowerCase()));
    function handleSubmit(e){
        e.preventDefault();
        const taskvalue=task.trim();
        if(taskvalue===""){
            alert("Cannot add empty task");
            return;
        }
        setTasks((prevtask)=>[...prevtask,taskvalue]);
        setTask("");
    }
    function handleDelete(index){
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index)
    );
    }
    return(
         <div className="todo-container">
         <h1 >To do app</h1>
         <form  onSubmit={handleSubmit}>
            <input className="todo-container2" type="text" placeholder="Enter your task" value={task} onChange={(e)=>setTask(e.target.value)}/>
            <button className="todo-container1" type="submit">Add Task</button>
         </form>
         <ul>
            {
                tasks.map((item,index)=>(
                    <li key={index}>
                        <span>{item}</span>
                        <button 
                        className='deletebtn'
                        onClick={()=>handleDelete(index)}>
                            Delete
                        </button>
                    </li>
                ))
            }
         </ul>

         <h2>Names List</h2>
         <input type="text" placeholder="Search names" value={search} onChange={(e)=>setSearch(e.target.value)} />
         <ul>
            {filteredNames.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
         </ul>

         </div>
    );
}