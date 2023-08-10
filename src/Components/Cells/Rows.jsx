import React, { useState } from 'react'
import EqualCheckbox from './EqualCheckbox'
import MoneyCell from './MoneyCell';
import Cell from './Cell';


export default function Rows(props) {
    let [checkbox, setCheckbox] = useState(true)
    let [disabledCheckbox, setDisabledCheckbox] = useState(false)
    let [checkboxElement, setCheckboxElement] = useState(false)

    return (
    <tr key={props.rowCellIndex}>
        <Cell cellType={"row"} value={props.row.name} rowCellName={"name"} index={props.rowCellIndex} array={props.rows} editParam={"name"}
            setArray={props.setRow} setButtonDisable={props.setButtonDisable} setArrayCellIndex={props.setRowCellIndex} setCellType={props.setCellType} />
        <Cell cellType={"row"} value={props.row.fullPrice} rowCellName={"fullPrice"} index={props.rowCellIndex} array={props.rows} columns={props.columns} editParam={"fullPrice"} sign={"₽"}
            setArray={props.setRow} setButtonDisable={props.setButtonDisable} setArrayCellIndex={props.setRowCellIndex} setCellType={props.setCellType} RecalculatePrices={props.RecalculatePrices} />

        {props.columns.map((person, key) => (
            <MoneyCell price={props.row.prices[person.id].price} displayedPercent={props.row.prices[person.id].displayedPercent} rows={props.rows} columns={props.columns} 
                rowCellIndex={props.rowCellIndex} columnCellIndex={key} key={key}
                setRow={props.setRow} setButtonDisable={props.setButtonDisable} setRowCellID={props.setRowCellIndex} setCellType={props.setCellType} 
                RecalculatePrices={props.RecalculatePrices} 
                checkbox={checkbox} setCheckbox={setCheckbox} 
                disabledCheckbox={disabledCheckbox} setDisabledCheckbox={setDisabledCheckbox} checkboxElement={checkboxElement} setCheckboxElement={setCheckboxElement}/>
        ))}
        <EqualCheckbox rows={props.rows} columns={props.columns} index={props.rowCellIndex} 
        RecalculatePrices={props.RecalculatePrices} setRow={props.setRow} 
        checkbox={checkbox} setCheckbox={setCheckbox} 
        disabledCheckbox={disabledCheckbox} setDisabledCheckbox={setDisabledCheckbox} checkboxElement={checkboxElement} setCheckboxElement={setCheckboxElement}/>
    </tr>
    )
}