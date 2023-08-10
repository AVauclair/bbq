import React, { useState } from 'react'

export default function MoneyCell(props) {
    let newRows = [...props.rows]

    let InputOnChange = () => {
      props.setCheckbox(!props.checkbox)
      props.setCheckboxElement(!props.checkboxElement)
        if (props.checkbox) {
          props.rows.forEach((product) => { 
            props.columns.forEach((person) => {
              if (newRows[product.id].prices[person.id].fixed === true) { 
                props.setCheckbox(false)
              }
            })
          })
            props.setDisabledCheckbox(true)
            props.RecalculatePrices(props.columns, newRows[props.index])
            props.setRow(newRows)
        }
        // props.columns.forEach((person) => {newRows[props.rowCellIndex].prices[person.id].fixed = false});
      // console.log(props.checkbox)
    }

  return (
    <td>
      <input 
      type={"checkbox"}
      onChange={InputOnChange}
      disabled={props.disabledCheckbox}
      checked={props.checkboxElement}/>
    </td>
  )
}
