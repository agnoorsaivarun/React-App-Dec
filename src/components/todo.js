import React from "react"
import { useState } from "react"
const Todo=()=>{
    const [editState,setEditState]=useState(true)
    const [task,setTask]=useState("")
    const [taskArr,setTaskArr]=useState([]);
    const [saveItem,setSaveItem]=useState('')
    const [disable,setDisable]=useState(false)
    const item=(event)=> {
        setTask(event.target.value)
        if(event.target.value=="") setDisable(true)
        else setDisable(false)
    }
    const addItem=()=>{
        if(task.trim()!="") {
            setTaskArr([...taskArr,task])
            setTask("")
        }
        else alert("enter valid input")
    }
    const editFun=(k)=>{
        let editedElement=taskArr[k]
        setEditState(false)
        setTask(editedElement)
        setSaveItem(editedElement)
    }
    const saveFun=(e)=>{
        setTask(e.target.value)
        console.log(e.target.value)
        taskArr.splice(taskArr.indexOf(saveItem),1,task) 
        setEditState(true)
        setTask("")
        setSaveItem("")
    }
    const deleteFun=(k)=>{
        setTaskArr([...taskArr].filter((e,i)=> i!=k))
        setEditState(true)
        setTask("")
    }

 return(
    <div className="container">
        <h1>ToDo List</h1>
        <section id="todo">
        <textarea id="task"  value={task} placeholder="Enter Item" onChange={item}></textarea>
        {editState ? <button className="btn" id="btn" onClick={addItem}>Add Todo</button>:<button className="btn" id="btn0" onClick={saveFun} disabled= {disable ? "disabled":null} >Save</button>}
        </section>
        {taskArr.map((element,i)=>{
            return {element} && <li key={i} className="list"><span>{element}</span>
            <button className="btn" id="btn1" onClick={()=>{editFun(i)}}>Edit</button>
            <button className="btn" id="btn2" onClick={()=>{deleteFun(i)}}>Delete</button>
            </li>
        })}
    </div>
 )
}
export default Todo