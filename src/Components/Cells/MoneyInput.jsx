import React, { createRef, useState } from 'react'

export default function MoneyInput(props) {
  let [editMode, setEditMode] = useState(false)
  let [isSelected, setSelect] = useState(false)
  let newRows = [...props.rows]
  let value

  let element = createRef()
  let InputOnChange = () => {
    value = element.current.value
    newRows[props.rowCellIndex].prices[props.columnCellIndex][props.rowCellName] = value
    props.setRow(newRows)
  }
  let SelectCell = () => {
    props.setCellType('row')
    setSelect(true)
  }

  let DeselectCell = () => {
    props.setButtonDisable(true)
    setSelect(false)
  }

  var fixedPersonsCount = 0
  var fixedPersonsPercent = 0;

  let InputOnBlur = () => {
    setEditMode(false)

    if (props.rowCellName === 'price') 
    {
      value = element.current.value
      let personPercents = value / (newRows[props.rowCellIndex]['fullPrice'] / 100)
      let otherPercents;

      otherPercents = (100 - personPercents - fixedPersonsPercent) / (props.columns.length - 1 - fixedPersonsCount)
      
      let otherPrice = Math.floor((newRows[props.rowCellIndex]['fullPrice'] / (100 - fixedPersonsPercent)) * otherPercents)
      
      props.columns.forEach((person) => { 
        if (newRows[props.rowCellIndex].prices[person.id].fixed === false) { 
          newRows[props.rowCellIndex].prices[person.id] = {price: otherPrice, displayedPercent: Math.floor(otherPercents), realPercent: otherPercents, fixed: false}
        }})
      
      newRows[props.rowCellIndex].prices[props.columnCellIndex] = {price: value, displayedPercent: Math.floor(personPercents), realPercent: personPercents, fixed: true}
      props.setRow(newRows)

      props.columns.forEach((person) => { 
        if (newRows[props.rowCellIndex].prices[person.id].fixed === true) { 
          fixedPersonsCount++;
          fixedPersonsPercent = newRows[props.rowCellIndex].prices[person.id].displayedPercent
        }})
    } 
    else if (props.rowCellName === 'displayedPercent') 
    {
      value = element.current.value
      let personPrice = value * (newRows[props.rowCellIndex]['fullPrice'] / 100)
      let otherPercents = (100 - value) / (props.columns.length - 1)
      let otherPrice = Math.floor((newRows[props.rowCellIndex]['fullPrice'] / 100) * otherPercents)
      props.columns.forEach((person) => {newRows[props.rowCellIndex].prices[person.id] = 
        {price: otherPrice, displayedPercent: Math.floor(otherPercents), realPercent: otherPercents, fixed: false}})
      newRows[props.rowCellIndex].prices[props.columnCellIndex] = {price: personPrice, displayedPercent: value, realPercent: value, fixed: true}
      props.setRow(newRows)
    }
  }

  let HandleSelect = (ev) => {
    if (props.rowCellName === 'displayedPercent') {
      ev.target.select()
    }
  }

  let DoubleClickEvent = () => {
    setEditMode(true)
    DeselectCell()
  }

  return (
    <div>
      {editMode ? (
        <input
          ref={element}
          onChange={InputOnChange}
          autoFocus={true}
          onBlur={InputOnBlur}
          onFocus={HandleSelect}
          onKeyDown={(ev) => ev.key === 'Enter' && ev.target.blur()}
          className="input"
          defaultValue={props.defaultValue} 
        />
      ) : (
        <button
          className={isSelected ? 'selectedCell' : 'buttonCringe'}
          onClick={SelectCell}
          onBlur={DeselectCell}
          onDoubleClick={DoubleClickEvent}
        >
          {props.defaultValue} {props.defaultSign}
        </button>
      )}
    </div>
  )
}
