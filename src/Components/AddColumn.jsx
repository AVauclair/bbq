import React, {useState} from 'react';

export default function AddColumn (props) {

    let [name, setName] = useState('');

    return (
      <>
      Добавить человека:
      <input className='input' value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={() => { 
        props.setColumn([...props.columns, {id: props.columns.length + 1, name: name}])
        setName('')
      }}>Add</button>
      </>
      

    )
  }