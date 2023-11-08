import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom'
import { globalContext } from "../context/Context";
const Task = () => {
  const { id } = useParams();
  const { jsonData, routeData } = useContext(globalContext)
  const [data] = jsonData
  const [individualData, setIndividualData] = routeData
  useEffect(() => {
    setIndividualData(data.filter(item => item.id === id));
  }, [])

  return (
    <>
      {individualData.map((item, index) => {
        return (
          <div key={index} style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', textAlign: 'center', alignItems: 'center', width: '100%', gap: 20 }}>
            <div >{item.title}</div>
            <div>{item.details}</div>
          </div>
        )
      })}


    </>
  )
}

export default Task
