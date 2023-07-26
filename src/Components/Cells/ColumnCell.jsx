import React, {createRef, useState} from 'react';

export default function ColumnCell (props) {

    let [editMode, setEditMode] = useState(false)
    let [isSelected, setSelect] = useState (false)

    let newColumns = [...props.columns]
    let personElement = createRef()
    let onInputChange = () => {
        let personName = personElement.current.value
        newColumns[props.index].name = personName
        props.setColumn(newColumns)
    }
    
    let SelectCell = () => {
        props.setCellID(props.index)
        props.setCellType("column")
        props.setButtonDisable(false);
        setSelect(true);
    }

    let DeselectCell = () => {
        props.setButtonDisable(true)
        setSelect(false);
    }

    let DoubleClickEvent = () => {
        setEditMode(true) 
        DeselectCell()
    }

    return (
        <td>
            {/* <button onClick={() => {props.setColumn(props.columns.filter(p => p.id !== props.person.id))}}>DEL</button> */}
            {editMode ? 
        <input 
            ref={personElement} 
            onChange={onInputChange}
            autoFocus={true} 
            onBlur={() => {setEditMode(false)}} 
            className='input' 
            defaultValue={props.person.name}/> 
        : <button 
        className={isSelected ? 'selectedCell' : 'buttonCringe'} 
        onClick={SelectCell} 
        onBlur={DeselectCell} 
        onDoubleClick={DoubleClickEvent}>
        {props.person.name}
            </button>}</td>
    )
  }