import React, {useState} from 'react';

//[{id: 0, name: "oleg"}, {id: 1, name: "arina"}, {id: 2, name: "vladik"}]

export default function AddColumn (props) {

    let [name, setName] = useState('');
    let [columns, setColumns] = useState(props.columns);

    return (
      <>
      Добавить:
      <input value={name} onChange={e => setName(e.target.value)}/>
  
      {/* <button onClick={() => {
        // debugger;
        let columns = [...props.columns];
        props.addColumn({ id: columns.length + 1, name: name })

        console.log(props)
      }}>Add</button> */}

      <button onClick={() => {
        debugger;
        setColumns([...columns, {id: columns.length + 1, name: name}])

        console.log(props)
      }}>Add</button>

        {/* {columns.map(columns => (
          <tr key={columns.id}>{columns.name}</tr>
        ))} */}
      </>
      
    )
  }