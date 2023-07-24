import './App.css';
import React, {useState} from 'react';
import AddColumn from './Components/AddColumn'
import AddRow from './Components/AddRow';
import ColumnCell from './Components/ColumnCell';
import RowCell from './Components/RowCell';


function App() {

    let [columns, setColumn] = useState([
      {id: 0, name: "oleg"},
      {id: 1, name: "vadik"},
      {id: 2, name: "arina"}]);

    let [rows, setRow] = useState([
      {id: 0, name: "makaroni"},
      {id: 1, name: "pomidori"},
      {id: 2, name: "ogurci"},
    ])

  return (
    <div className='App'>
      <div className='table'>
        <table>
          <tbody>
            <tr>
              <th>товары</th>
              <th>стоимость</th>
              {columns.map((person, key) => (
                  <ColumnCell person={person} index={key} columns={columns} setColumn={setColumn}/>
              ))}
            </tr>
          </tbody>

          {rows.map((food, key) => (
            <tbody key={key}>
              <tr>
                <RowCell food={food} index={key} rows={rows} setRow={setRow}/>
              </tr>
            </tbody>
            ))}
        </table>
      </div>

      <AddColumn columns={columns} setColumn={setColumn}/>
      <br/>
      <AddRow rows={rows} setRow={setRow}/>
      
    </div>
  );
}

export default App;
