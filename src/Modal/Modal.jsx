import React, { Component, useState } from 'react'
import "./Modal.scss"

export function Modal ({modalActive, setModalActive, children}) {
    return (
      <div className={modalActive?"modal active":"modal"} onClick={()=>{setModalActive(false)}}>
        <div className={modalActive?"modal__content active":"modal__content"} onClick={(e)=>{e.stopPropagation()}}>
          <button onClick={()=>{setModalActive(false)}} id='closeModalBtn'>Close</button>
          {children}
        </div>
      </div>
    )
}
