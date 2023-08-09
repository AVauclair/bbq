import React, { useState } from 'react'

export default function MoneyCell(props) {
    let newRows = [...props.rows]
    let [checkbox, setCheckbox] = useState(false)
    // let checkbox = false;

    
     //а тут тип мб
    //а тут надо перебрать все цены в строке
    //и если у кого-нибудь есть фиксед
    //значит галочка false
    //а в InputOnChange просто всем ставить фиксед false

    let InputOnChange = () => {
      setCheckbox(checkbox = !checkbox)
        if (checkbox) {
          props.rows.forEach((product) => { 
            props.columns.forEach((person) => {
              if (newRows[product.id].prices[person.id].fixed === true) { 
                setCheckbox(checkbox = false)
              }
            })
          });
            // props.RecalculatePrices(props.columns, newRows[props.index])
            // props.setRow(newRows)
        }
        console.log(checkbox)
        // props.columns.forEach((person) => {newRows[props.rowCellIndex].prices[person.id].fixed = false});
    }

  return (
    <td>
      <input 
      type={"checkbox"}
      onChange={InputOnChange}
      checked={checkbox}/>
    </td>
  )
}
