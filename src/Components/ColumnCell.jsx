import React, {createRef, useState} from 'react';

export default function ColumnCell (props) {

    let [editMode, setEditMode] = useState(false)
    let newColumns = [...props.columns]

    let personElement = createRef()
    let onInputChange =  () => {
        let personName = personElement.current.value
        newColumns[props.index].name = personName
        props.setColumn(newColumns)
    }

    return (
        <th>{editMode ? 
        <input 
            ref={personElement} 
            onChange={onInputChange}
            autoFocus={true} 
            onBlur={() => {setEditMode(false)}} 
            className='input' 
            defaultValue={props.person.name}/> 
        : <span onClick={() => setEditMode(true)}>{props.person.name}</span>}</th>
    )
  }