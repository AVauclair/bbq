import React, {createRef, useState} from 'react';

export default function RowCell (props) {

    let [editMode, setEditMode] = useState(false)
    let [isSelected, setSelect] = useState (false)
    let newRows = [...props.rows]

    let rowElement = createRef()
    let onInputChange = () => {
        let rowValue = rowElement.current.value
        newRows[props.index][props.rowCellName] = rowValue
        props.setRow(newRows)
    }

    let SelectCell = () => {
        props.setRowCellID(props.index)
        props.setCellType("row")
        props.setButtonDisable(false);
        setSelect(true);
    }

    let DeselectCell = () => {
        props.setButtonDisable(true)
        setSelect(false)
    }

    let DoubleClickEvent = () => {
        setEditMode(true) 
        DeselectCell()
    }

    return (
        <td>
            {editMode ? 
        <input 
            ref={rowElement}
            onChange={onInputChange}
            autoFocus={true} 
            onBlur={() => {setEditMode(false)}} 
            className='input' 
            defaultValue={props.value}/> 
        : <button 
        className={isSelected ? 'selectedCell' : 'buttonCringe'} 
        onClick={SelectCell} 
        onBlur={DeselectCell}
        onDoubleClick={DoubleClickEvent}>
        {props.value}
            </button>}
        </td>
        
        
    )
  }