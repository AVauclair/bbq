import './App.css';
import React, {useState} from 'react';
import AddColumn from './Components/AddColumn'
import AddRow from './Components/AddRow';
import ColumnCell from './Components/ColumnCell';
import RowCell from './Components/RowCell';


function App() {

    let [columns, setColumn] = useState([
      {id: 0, name: "Олег"},
      {id: 1, name: "Вадик"},
      {id: 2, name: "Арина"}]);

    let [rows, setRow] = useState([
      {id: 0, name: "Макароны"},
      {id: 1, name: "Помидоры"},
      {id: 2, name: "Огурцы"},
    ])

  return (
    <div className='App'>
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>Товары</th>
              <th>Стоимость</th>
              {columns.map((person, key) => (
                  <ColumnCell key={key} person={person} index={key} columns={columns} setColumn={setColumn}/>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((food, key) => (
                <tr key={key}>
                  {/* <button onClick={() => {setRow(rows.filter(f => f.id !== food.id))}}>DEL</button> */}
                  <RowCell food={food} index={key} rows={rows} setRow={setRow}/>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <AddColumn columns={columns} setColumn={setColumn}/>
      <br/>
      <AddRow rows={rows} setRow={setRow}/>
      
    </div>
  );
}

export default App;
