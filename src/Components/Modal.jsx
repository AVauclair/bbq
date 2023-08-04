import React from 'react'
import "./../css/Modal.css"

export default function Modal (props) {
    return (
        <div className={props.modalActive ? 'modal active' : 'modal'} onClick={() => props.setModalActive(false)}>
            <div className={props.modalActive ? "modal_content active" : 'modal_content'} onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
}