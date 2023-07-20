import './App.css';
import React, {useState, useEffect} from 'react';
import AddColumn from './Components/AddColumn'



function App() {
  let state = {
    columns: [
      {id: 1, name: "oleg"},
      {id: 2, name: "vadik"},
      {id: 3, name: "arina"}
    ],
  
    rows: [
      {id: 1, name: "person"},
      {id: 2, name: "makaroni"},
      {id: 3, name: "pomidori"},
      {id: 4, name: "ogurci"},
    ]
  }

    let [name, setName] = useState('');
    let [columns, setColumns] = useState([state.columns]);
  
  // let addColumn = (columns) => {
  //   // let columns = [...this.state.columns];
  //   // let value = "oleg";
  //   // columns.push(value)
  //   // this.setState({ columns })
  //   state.columns.push(columns)
  // }

  return (
    <div className='App'>
      {state.rows.map((food) => (
        <tr>
          <th>{food.name}</th>
          {state.columns.map((persons) => (
            <>
              <td>{food.name === "person" ? persons.name : null}</td>
            </>
          ))}
        </tr>
      ))}

        Добавить:
      <input value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={() => { 
        setColumns([...columns, {id: columns.length + 1, name: name}])
        debugger
    }}>Add</button>

      {/* <AddColumn columns={state.columns} addColumn={addColumn}/> */}
    </div>
  );
}

export default App;
