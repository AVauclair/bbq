import React, {createRef, useState} from 'react';

export default function RowCell (props) {

    let [editMode, setEditMode] = useState(false)
    let newRows = [...props.rows]

    let foodElement = createRef()
    let onInputChange =  () => {
        let foodName = foodElement.current.value
        newRows[props.index].name = foodName
        props.setRow(newRows)

        console.log(props.rows)
    }

    return (
        <th>{editMode ? 
        <input 
            ref={foodElement}
            onChange={onInputChange}
            autoFocus={true} 
            onBlur={() => {setEditMode(false)}} 
            className='input' 
            defaultValue={props.food.name}/> 
        : <span onClick={() => setEditMode(true)}>{props.food.name}</span>}</th>
    )
  }