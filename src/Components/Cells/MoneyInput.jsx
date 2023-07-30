import React, {createRef, useState} from 'react';

export default function MoneyInput (props) {

    let [editMode, setEditMode] = useState(false)
    let [isSelected, setSelect] = useState (false)
    let newRows = [...props.rows]
    let prices

    let element = createRef()
    let onInputChange = () => {
        let value = element.current.value

        prices = newRows[props.index]["prices"]
        console.log(prices)

        // newRows[props.index][props.rowCellName] = value
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
        <div>
            {editMode ? 
        <input 
            ref={element}
            onChange={onInputChange}
            autoFocus={true} 
            onBlur={() => {setEditMode(false)}} 
            className='input' 
            defaultValue={props.defaultValue}/> 
        : <button 
        className={isSelected ? 'selectedCell' : 'buttonCringe'} 
        onClick={SelectCell} 
        onBlur={DeselectCell}
        onDoubleClick={DoubleClickEvent}>
        {props.defaultValue}
            </button>}
        </div>
    )
  }