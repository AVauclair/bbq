import React, {useState} from 'react';

//[{id: 0, name: "oleg"}, {id: 1, name: "arina"}, {id: 2, name: "vladik"}]

export default function AddColumn (props) {

    const [name, setName] = useState('');
    // const [columns, setColumns] = useState(props.state.columns);
  
    return (
      <>
      Добавить:
      <input value={name} onChange={e => setName(e.target.value)}/>
  
      <button onClick={() => {
        // setColumns([...props.columns, {id: nextID++, name: name}]);
        // setColumns([...columns, {id: columns.length + 1, name: name}]);
        debugger;
        let columns = [...props.columns];
        props.setState({ id: columns.length + 1, name: name })
      }}>Add</button>

        {/* {columns.map(columns => (
          <tr key={columns.id}>{columns.name}</tr>
        ))} */}
      </>
      
    )
  }