import React, { useContext } from "react";
import Modal from "react-modal";
import { globalContext } from "../context/Context";
import CreateNewTask from "./CreateNewTask";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    gap: 30
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const ModalComponent = () => {
  const { modal, modalType } = useContext(globalContext)
  const [modalIsOpen, setIsOpen] = modal;
  const [typeModal] = modalType
  const getModalContent = () => {

    switch (typeModal) {
      case 'Create Task':
        return <CreateNewTask />
      default:
        return null
    }
  }




  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setIsOpen(!modalIsOpen)}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Example Modal">
      <button onClick={() => setIsOpen(!modalIsOpen)}>close</button>
      abc
      {getModalContent()}
    </Modal>
  );
};

export default ModalComponent;
