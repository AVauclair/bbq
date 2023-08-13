import React, { useState } from 'react'
import EqualCheckbox from './EqualCheckbox'
import MoneyCell from './MoneyCell';
import Cell from './Cell';


export default function Rows(props) {
    let [checkbox, setCheckbox] = useState(true)
    let [disabledCheckbox, setDisabledCheckbox] = useState(false)
    let [checkboxChecked, setCheckboxChecked] = useState(false)

    return (
        <tr key={props.rowCellIndex}>
            <Cell cellType={"row"} value={props.row.name} rowCellName={"name"} index={props.index} array={props.rows} editParam={"name"}
                setArray={props.setArray} setButtonDisable={props.setButtonDisable} setArrayCellIndex={props.setRowCellIndex} setCellType={props.setCellType} />
            <Cell cellType={"row"} value={props.row.fullPrice} rowCellName={"fullPrice"} index={props.index} array={props.rows} columns={props.columns} editParam={"fullPrice"} sign={"₽"}
                setArray={props.setArray} setButtonDisable={props.setButtonDisable} setArrayCellIndex={props.setRowCellIndex} setCellType={props.setCellType} RecalculatePrices={props.RecalculatePrices} />

            {props.columns.map((person, key) => (
                <MoneyCell key={key} price={props.row.prices[person.id].price} displayedPercent={props.row.prices[person.id].displayedPercent} rows={props.rows} columns={props.columns} 
                    rowCellIndex={props.index} columnCellIndex={key} setButtonDisable={props.setButtonDisable} RecalculatePrices={props.RecalculatePrices} 
                    setRow={props.setArray} setRowCellIndex={props.setRowCellIndex} setCellType={props.setCellType}
                    checkbox={checkbox} disabledCheckbox={disabledCheckbox} checkboxChecked={checkboxChecked}
                    setCheckbox={setCheckbox} setDisabledCheckbox={setDisabledCheckbox} setCheckboxChecked={setCheckboxChecked}/>
            ))}
            <EqualCheckbox rows={props.rows} columns={props.columns} index={props.index} RecalculatePrices={props.RecalculatePrices} setRow={props.setArray} 
            checkbox={checkbox} disabledCheckbox={disabledCheckbox} checkboxChecked={checkboxChecked}
            setCheckbox={setCheckbox} setDisabledCheckbox={setDisabledCheckbox} setCheckboxChecked={setCheckboxChecked}/>
        </tr>
    )
}