import React, { useContext } from "react";
import Card from "./Card";
import styles from "./TaskViewer.module.css";
import { globalContext } from "../context/Context";
const TaskViewer = () => {

  const { jsonData, filterData, modal, modalType } = useContext(globalContext)
  const [data] = jsonData
  const [filteredData] = filterData
  const [, setIsOpen] = modal;
  const [, setTypeModal] = modalType

  const createNewTask = () => {
    setTypeModal('Create Task')
    setIsOpen(true)
  }
  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
        <div className={styles.title}>Task Manager CONTEXT</div>
        <div>
          <button onClick={createNewTask}>Create a new Task</button>
        </div>
      </div>

      <div className={styles.content}>
        {filteredData.length > 0 ? filteredData.map((item, index) => {

          return <Card item={item} key={index} />;
        }) : data.map((item, index) => {

          return <Card item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default TaskViewer;
