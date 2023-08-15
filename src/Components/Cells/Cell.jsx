import React, { createRef, useState } from 'react'
import { ChromePicker } from 'react-color'

export default function Cell(props) {
  let [editMode, setEditMode] = useState(false)
  let [isSelected, setSelect] = useState(false)

  let [color, setColor] = useState('#fff')
  let [displayColorPicker, setDisplayColorPicker] = useState(false)

  let newArray = [...props.array]
  let arrayElement = createRef()

  let personColors = []
  let selectedPerson = ''


  let InputOnChange = () => {
    let elementName = arrayElement.current.value
    newArray[props.index] = {
      ...newArray[props.index],
      [props.editParam]: elementName,
    }
    props.setArray(newArray)
  }

  let SelectCell = () => {
    props.setArrayCellIndex(props.index)
    props.setCellType(props.cellType)
    props.setButtonDisable(false)
    setSelect(true)
  }

  let DeselectCell = () => {
    props.setButtonDisable(true)
    setSelect(false)
  }

  let InputOnBlur = () => {
    setEditMode(false)
    if (props.rowCellName === 'fullPrice') {
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
      {editMode ? (
        <input
          ref={arrayElement}
          onChange={InputOnChange}
          autoFocus={true}
          onBlur={InputOnBlur}
          onKeyDown={(ev) => ev.key === 'Enter' && ev.target.blur()}
          className="input"
          defaultValue={props.value}
        />
      ) : (
        <button
          className={isSelected ? 'selectedCell' : 'buttonCringe'}
          style={{color: props.rowCellName === "name" ? props.productColor : props.personColor}}
          onClick={SelectCell}
          onBlur={DeselectCell}
          onDoubleClick={DoubleClickEvent}
        >
          {props.value} {props.sign}
        </button>
      )}

      

      {props.cellType === "column"
          ? <>
              <img src='./../../images/colorpicker' onClick={() => setDisplayColorPicker(displayColorPicker = !displayColorPicker)} onBlur={() => setDisplayColorPicker(false)}/> 
              {displayColorPicker === true
                ? <ChromePicker color={color} onChange={changedColor => {
                  setColor(changedColor.hex)
                  newArray[props.index] = {...newArray[props.index], 'color': changedColor.hex}
                  props.setArray(newArray)
                }}/> 
                : null}
            </>
          : null}

      {props.rowCellName === "name"
      ? <>
        <select onChange={e => { 
          selectedPerson = e.target.selectedIndex
          newArray[props.index] = {...newArray[props.index], 'color': personColors[e.target.selectedIndex]}
          props.setArray(newArray)
          }}>
        {props.columns.map(option => {
          personColors[option.id] = option.color
          return (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
          )}, selectedPerson = 0)
        }
      </select>
        </>
      : null}
    </td>
  )
}
