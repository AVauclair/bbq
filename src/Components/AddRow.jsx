import React, {useState} from 'react';

export default function AddRow (props) {

    let [name, setProduct] = useState('');
    let newArr;
    let prices;
    let newRows = [...props.rows]

    return (
      <>
      Добавить товар:
      <input className='input' value={name} onChange={e => setProduct(e.target.value)}/>
      <button onClick={() => { 
        newArr = props.rows.map((product, key) => {
          newRows = product.prices
          return newRows
        })
        prices = newRows
        props.setRow([...props.rows, {id: props.rows.length + 1, name: name, fullPrice: "null", prices}])
        setProduct('')
      }}>Add</button>
      </>
      
    )
  }