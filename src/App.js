import './App.css';
import React from 'react';
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
  
  // let onAddColumn = () => {
  //   let columns = [...this.state.columns];
  //   let value = "oleg";
  //   columns.push(value)
  //   this.setState({ columns })
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

      <AddColumn columns={state.columns}/>
    </div>
  );
}

export default App;
