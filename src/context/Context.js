import React, { createContext, useState, useEffect } from 'react'

export const globalContext = createContext()
const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [individualData, setIndividualData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [check, setCheck] = useState(false)
  const [checkedList, setCheckedList] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('')
  //adumi datele originale din Json
  const fetchData = async () => {
    const response = await fetch('./data.json');

    const res = await response.json();
    setData(res)
  }
  useEffect(() => {
    fetchData()
  }, [])
  //daca fac search arata-mi doar ce caut
  useEffect(() => {
    setFilteredData(
      data.filter(find =>
        find.message.toLowerCase().includes(inputValue.toLowerCase())
      )
    );

  }, [inputValue]);
  // daca bifez -> scoate card din ecran
  useEffect(() => {
    setFilteredData(data.filter(item => !checkedList.includes(item.id)));
  }, [checkedList, setFilteredData]);
  return (
    <globalContext.Provider value={{
      jsonData: [data, setData],
      filterData: [filteredData, setFilteredData],
      searchInput: [inputValue, setInputValue],
      checked: [check, setCheck],
      modal: [modalIsOpen, setIsOpen],
      modalType: [modalType, setModalType],
      routeData: [individualData, setIndividualData],
      checkedElement: [checkedList, setCheckedList]
    }}>
      {children}
    </globalContext.Provider>
  )
}

export default Context
