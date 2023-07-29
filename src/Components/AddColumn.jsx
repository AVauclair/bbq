import React, {useState} from 'react';

export default function AddColumn (props) {

    let [name, setName] = useState('');
    let newRows = [...props.rows]

    let newArr;

    return (
      <>
      Добавить человека:
      <input className='input' value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={() => {
        props.setColumn([...props.columns, {id: props.columns.length + 1, name: name}])
        newArr = props.rows.map((product, key) => {
          product.prices[name] = {price: "1", percent: "1%"}
          return product
        })
        props.setRow(newArr)
        setName('')
      }}>Add</button> 
      </>
      

    )
  }