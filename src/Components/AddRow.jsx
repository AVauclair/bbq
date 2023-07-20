import React, {useState} from 'react';

export default function AddRow (props) {

    let [name, setProduct] = useState('');

    return (
      <>
      Добавить строку:
      <input className='input' value={name} onChange={e => setProduct(e.target.value)}/>
      <button onClick={() => { 
        props.setRow([...props.rows, {id: props.rows.length + 1, name: name}])
        setProduct('')
      }}>Add</button>
      </>
      
    )
  }