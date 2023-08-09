import React, { createRef, useState } from 'react'

export default function MoneyInput(props) {
  let [editMode, setEditMode] = useState(false)
  let [isSelected, setSelect] = useState(false)
  let newRows = [...props.rows]
  let value = null;

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

  let InputOnBlur = () => {
    setEditMode(false)
    value = parseFloat(element.current.value);
    let personPrice = 0, personPercents = 0, fixedPersonsCount = 0, fixedPersonsPercent = 0;

    if (props.rowCellName === 'price') 
    {
      personPercents = value / (newRows[props.rowCellIndex]['fullPrice'] / 100);
      personPrice = value;
    } 
    else if (props.rowCellName === 'displayedPercent') 
    {
      personPrice = value * newRows[props.rowCellIndex]['fullPrice'] / 100;
      personPercents = value;
    }

    newRows[props.rowCellIndex].prices[props.columnCellIndex] = {
      price: personPrice, 
      displayedPercent: Math.floor(personPercents), 
      realPercent: personPercents, 
      fixed: true
    };

    props.columns.forEach((person) => { 
      if (newRows[props.rowCellIndex].prices[person.id].fixed === true) { 
        fixedPersonsCount++;
        fixedPersonsPercent += newRows[props.rowCellIndex].prices[person.id].realPercent
      }
    });

    let otherPercents = (100 - fixedPersonsPercent) / (props.columns.length - fixedPersonsCount);
    let otherPrice = newRows[props.rowCellIndex]['fullPrice'] / 100 * otherPercents
    
    props.columns.forEach((person) => {
      if (newRows[props.rowCellIndex].prices[person.id].fixed === false) {
        newRows[props.rowCellIndex].prices[person.id] = {
          price: Math.ceil(otherPrice), 
          displayedPercent: Math.floor(otherPercents), 
          realPercent: otherPercents, 
          fixed: false
        };
      }
    });

    props.setRow(newRows);
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
