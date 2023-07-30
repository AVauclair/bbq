import React, {useState} from 'react';

export default function AddRow (props) {

    let [name, setProduct] = useState('');
    let currentID = 2
    let newProduct = {}

    return (
      <>
      Добавить товар:
      <input className='input' value={name} onChange={e => setProduct(e.target.value)}/>
      <button onClick={() => {
       newProduct = {
        id: currentID + 1,
        name: name,
        fullPrice: "bebe",
        prices: {},
       }
      props.columns.forEach((person) => {newProduct.prices[person.name] = {price: "0", percent: "0%"}})
      props.setRow([...props.rows, newProduct])
      setProduct('')
      }}>Add</button>
      </>
      
    )
  }