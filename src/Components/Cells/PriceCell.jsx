import React, {createRef, useState} from 'react';

export default function PriceCell (props) {

    let [priceEditMode, setPriceEditMode] = useState(false)
    let [percentEditMode, setPercentEditMode] = useState(false)
    let [isPriceSelected, setPriceSelect] = useState (false)
    let [isPercentSelected, setPercentSelect] = useState (false)
    let newRows = [...props.rows]

    let priceElement = createRef()
    let percentElement = createRef()
    let onInputChange = (nameElement) => {
        // let cellValue = nameElement.current.value
        // newRows[props.index][props.rowCellName] = cellValue
        // props.setRow(newRows)
    }

    let SelectCell = (setSelect) => {
        props.setCellID(props.index)
        props.setCellType("row")
        props.setButtonDisable(false);
        setSelect(true);
    }

    let DeselectCell = (setSelect) => {
        props.setButtonDisable(true)
        setSelect(false)
    }

    let DoubleClickEvent = (setEditMode, deselectCell) => {
        setEditMode(true) 
        DeselectCell(deselectCell)
    }

    return (
        <td>
            {priceEditMode ? 
        <input 
            ref={priceElement}
            onChange={onInputChange(priceElement)}
            autoFocus={true} 
            onBlur={() => {setPriceEditMode(false)}} 
            className='input' 
            defaultValue={props.price}/> 
        : <button 
        className={isPriceSelected ? 'selectedCell' : 'buttonCringe'} 
        onClick={SelectCell(setPriceSelect)} 
        onBlur={DeselectCell(setPriceSelect)}
        onDoubleClick={DoubleClickEvent(setPriceEditMode, setPriceSelect)}>
        {props.price}
            </button>}

            <br/>

            {percentEditMode ? 
        <input 
            ref={percentElement}
            onChange={onInputChange(percentElement)}
            autoFocus={true} 
            onBlur={() => {setPercentEditMode(false)}} 
            className='input' 
            defaultValue={props.percent}/> 
        : <button 
        className={isPercentSelected ? 'selectedCell' : 'buttonCringe'} 
        onClick={SelectCell(setPercentSelect)} 
        onBlur={DeselectCell(setPercentSelect)}
        onDoubleClick={DoubleClickEvent(setPercentEditMode, setPercentSelect)}>
        {props.price}
            </button>}
        </td>
    )
  }