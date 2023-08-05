import React, {createRef, useState} from 'react';

export default function MoneyInput (props) {

    let [editMode, setEditMode] = useState(false)
    let [isSelected, setSelect] = useState (false)
    let newRows = [...props.rows]
    let value

    let element = createRef()
    let onInputChange = () => {
        value = element.current.value
        newRows[props.rowCellIndex].prices[props.columnCellIndex][props.rowCellName] = value
        props.setRow(newRows)
    }
    let SelectCell = () => {
        // props.setRowCellID(props.index)
        props.setCellType("row")
        setSelect(true);
    }

    let DeselectCell = () => {
        props.setButtonDisable(true)
        setSelect(false)
    }

    let InputOnBlur = () => {
        setEditMode (false)
        if (props.rowCellName === "price") {
            value = element.current.value
            let personPercents = value / (newRows[props.rowCellIndex]['fullPrice'] / 100)
            let otherPercents = (100 - personPercents) / (props.columns.length - 1)
            let otherPrice = Math.floor(newRows[props.rowCellIndex]['fullPrice'] / 100 * otherPercents)
            props.columns.forEach((person) => {newRows[props.rowCellIndex].prices[person.id] = {price: otherPrice, percent: Math.floor(otherPercents)}})
            newRows[props.rowCellIndex].prices[props.columnCellIndex] = {price: value, percent: Math.floor(personPercents)}
            props.setRow(newRows)
        }
        else if (props.rowCellName === "percent") {
            value = element.current.value
            let personPrice = value * (newRows[props.rowCellIndex]['fullPrice'] / 100)
            let otherPercents = (100 - value) / (props.columns.length - 1)
            let otherPrice = Math.floor(newRows[props.rowCellIndex]['fullPrice'] / 100 * otherPercents)
            props.columns.forEach((person) => {newRows[props.rowCellIndex].prices[person.id] = {price: otherPrice, percent: Math.floor(otherPercents)}})
            newRows[props.rowCellIndex].prices[props.columnCellIndex] = {price: personPrice, percent: value}
            props.setRow(newRows)
        }
    }

    let HandleSelect = (ev) => {
        if (props.rowCellName === "percent") {ev.target.select()}
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
            onBlur={InputOnBlur} 
            onFocus={HandleSelect}
            onKeyDown={ev => ev.key === "Enter" && ev.target.blur()}
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