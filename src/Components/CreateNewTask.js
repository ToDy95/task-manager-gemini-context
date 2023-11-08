import React, { useState, useContext } from "react";
import { globalContext } from "../context/Context";
const CreateNewTask = () => {
  const { jsonData, modal } = useContext(globalContext)
  const [, setData] = jsonData
  const [, setIsOpen] = modal;
  const [taskId, SetTaskId] = useState("")
  const [taskStatus, SetTaskStatus] = useState("")
  const [taskMessage, SetTaskMessage] = useState("")
  const [taskDate, SetTaskDate] = useState("")
  const saveMyData = (event) => {
    event.preventDefault()
    const newTask = {
      id: taskId,
      status: taskStatus,
      message: taskMessage,
      dueDate: new Date(taskDate)
    }
    setData(prev => [newTask, ...prev])
    setIsOpen(false)
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
      <input type="text" name="taskId" placeholder="T-#" onChange={(e) => SetTaskId(e.target.value)} />
      <input type="text" name="taskStatus" placeholder="Status" onChange={(e) => SetTaskStatus(e.target.value)} />
      <input type="text" name="taskMessage" placeholder="Message" onChange={(e) => SetTaskMessage(e.target.value)} />
      <input type="date" name="taskDate" onChange={(e) => SetTaskDate(e.target.value)} />


      <button onClick={saveMyData}>SAVE</button>
    </div>
  )
}

export default CreateNewTask
