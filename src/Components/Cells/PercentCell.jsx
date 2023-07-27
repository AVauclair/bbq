import React, {createRef, useState} from 'react';

export default function PercentCell (props) {

    let [percentEditMode, setPercentEditMode] = useState(false)
    let [isPercentSelected, setPercentSelect] = useState (false)
    let newRows = [...props.rows]

    let percentElement = createRef()
    let onPercentInputChange = () => {
        let percentValue = percentElement.current.value
        newRows[props.index][props.rowCellName] = percentValue
        props.setRow(newRows)
    }
    let SelectPercentCell = () => {
        props.setCellID(props.index)
        props.setCellType("row")
        props.setButtonDisable(false);
        setPercentSelect(true);
    }

    let DeselectPercentCell = () => {
        props.setButtonDisable(true)
        setPercentSelect(false)
    }

    let PercentDoubleClickEvent = () => {
        setPercentEditMode(true) 
        DeselectPercentCell()
    }

    return (
        <td>
            {percentEditMode ? 
        <input 
            ref={percentElement}
            onChange={onPercentInputChange}
            autoFocus={true} 
            onBlur={() => {setPercentEditMode(false)}} 
            className='input' 
            defaultValue={props.percent}/> 
        : <button 
        className={isPercentSelected ? 'selectedCell' : 'buttonCringe'} 
        onClick={SelectPercentCell} 
        onBlur={DeselectPercentCell}
        onDoubleClick={PercentDoubleClickEvent}>
        {props.percent}
            </button>}
        </td>
    )
  }