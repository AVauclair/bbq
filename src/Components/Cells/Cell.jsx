import React, {createRef, useState} from 'react';

export default function Cell (props) {

    let [editMode, setEditMode] = useState(false)
    let [isSelected, setSelect] = useState (false)

    let newArray = [...props.array]
    let arrayElement = createRef()

    let onInputChange = () => {
        let elementName = arrayElement.current.value
        newArray[props.index] = {...newArray[props.index], [props.editParam]: elementName}
        props.setArray(newArray)
    }
    
    let SelectCell = () => {
        props.setArrayCellIndex(props.index)
        props.setCellType(props.cellType)
        props.setButtonDisable(false);
        setSelect(true);
    }

    let DeselectCell = () => {
        props.setButtonDisable(true)
        setSelect(false);
    }

    let InputOnBlur = () => {
        setEditMode(false)
        if (props.rowCellName === "fullPrice") {
            props.RecalculatePrices(props.columns, newArray[props.index])
            props.setArray(newArray)
        }
    }

    let DoubleClickEvent = () => {
        setEditMode(true) 
        DeselectCell()
    }

    return (
        <td>
            {editMode ? 
        <input 
            ref={arrayElement} 
            onChange={onInputChange}
            autoFocus={true} 
            onBlur={InputOnBlur} 
            onKeyDown={ev => ev.key === "Enter" && ev.target.blur()}
            className='input' 
            defaultValue={props.value}/> 
        : <button 
        className={isSelected ? 'selectedCell' : 'buttonCringe'} 
        onClick={SelectCell} 
        onBlur={DeselectCell}
        onDoubleClick={DoubleClickEvent}>
        {props.value}
            </button>}</td>
    )
  }