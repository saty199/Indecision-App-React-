import React from 'react'
import Modal from 'react-modal'

const OptionModal=(props)=> (
    <Modal
    isOpen={!!props.selectedOption}
    onRequestClose= {props.handleClearSelectedOption}
    contentLabel="selected"
    closeTimeoutMS = {200}
    className="modal"
    >
  <h2 className="modal__title">  Selected Option</h2>
  {props.selectedOption && <h2 className="modal__body">{props.selectedOption}</h2>}
  <button 
  className="button"
  onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal