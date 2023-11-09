import React, { useContext } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { globalContext } from "../context/Context";

const Card = () => {
  const navigate = useNavigate()
  const { jsonData, filterData, checked, checkedElement } = useContext(globalContext);
  const [data] = jsonData;
  const [filteredData] = filterData;
  const [checkedList, setCheckedList] = checkedElement
  const [check, setCheck] = checked

  const removeFromList = (item) => {

    setCheck(true)

    setCheckedList(prev => [...prev, item])

    setCheck(false)

  }
  return (
    // <Link to={'task/'+item.id}>
    //

    <>
      {
        filteredData.length > 0
          ? filteredData.map((item, index) => {
            return (<div className={styles.card} key={index} >
              <div className={styles.firstLine}>
                <div className={styles.taskId}>T - {item.id}</div>
                <div>
                  <input type="checkbox" checked={check} onChange={() => removeFromList(item.id)} />
                </div>
                <div className={styles.toDo}>{item.status}</div>
              </div>
              <div className={styles.secondLine}>{item.message}</div>
              <div className={styles.thirdLine}>
                <div className={styles.dueDate}>Due Date</div>
                <div className={styles.date}>
                  {new Date(item.dueDate).toLocaleDateString("ro-RO")}
                </div>
              </div>
              <div onClick={() => navigate('task/' + item.id)} style={{ fontSize: 14, display: 'flex', justifyContent: 'center', alignItems: 'center', border: 1, borderColor: 'black', borderStyle: 'solid', padding: 5 }}>View Details</div>
            </div>)
          })
          : data.map((item, index) => {
            return (<div className={styles.card} key={index}>
              <div className={styles.firstLine}>
                <div className={styles.taskId}>T - {item.id}</div>
                <div>
                  <input type="checkbox" checked={check} onChange={() => removeFromList(item.id)} />
                </div>
                <div className={styles.toDo}>{item.status}</div>
              </div>
              <div className={styles.secondLine}>{item.message}</div>
              <div className={styles.thirdLine}>
                <div className={styles.dueDate}>Due Date</div>
                <div className={styles.date}>
                  {new Date(item.dueDate).toLocaleDateString("ro-RO")}
                </div>
              </div>
              <div onClick={() => navigate('task/' + item.id)} style={{ fontSize: 14, display: 'flex', justifyContent: 'center', alignItems: 'center', border: 1, borderColor: 'black', borderStyle: 'solid', padding: 5 }}>View Details</div>
            </div>)
          })
      }</>

    // </Link>
  );
};

export default Card;
