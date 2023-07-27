import './App.css';
import React, {useState} from 'react';
import AddColumn from './Components/AddColumn'
import AddRow from './Components/AddRow';
import ColumnCell from './Components/Cells/ColumnCell';
import RowCell from './Components/Cells/RowCell';
import PriceCell from './Components/Cells/PriceCell';
import PercentCell from './Components/Cells/PercentCell';


function App() {

    // let [columns, setColumn] = useState(["Олег", "Вадик", "Арина"])
    let [columns, setColumn] = useState([
      {id: 0, name: "Олег"},
      {id: 1, name: "Вадик"},
      {id: 2, name: "Арина"}]);

    

    let [rows, setRow] = useState([
      {id: 0, name: "Макароны", fullPrice: "2000", prices: {"Олег": {price: "22", percent: "15%"}, "Вадик": {price: "54", percent: "54%"}, "Арина": {price: "12", percent: "12%" }}},
      {id: 1, name: "Помидоры", fullPrice: "3000", prices: {"Олег": {price: "22", percent: "15%"}, "Вадик": {price: "54", percent: "54%"}, "Арина": {price: "12", percent: "12%" }}},
      {id: 2, name: "Огурцы", fullPrice: "5000", prices: {"Олег": {price: "22", percent: "15%"}, "Вадик": {price: "54", percent: "54%"}, "Арина": {price: "12", percent: "12%" }}},
    ])

    let [buttonDisabled, setButtonDisable] = useState(true)
    let [cellID, setCellID] = useState()
    let [cellType, setCellType] = useState()

    let DeleteCell = () => {
      cellType === "row" ? rows.splice(cellID, 1) : columns.splice(cellID, 1)
    }

debugger
  return (
    <div className='App'>
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>Товары</th>
              <th>Стоимость</th>
              {columns.map((person, key) => (
                  <ColumnCell key={key} person={person} index={key} columns={columns} setColumn={setColumn} setButtonDisable={setButtonDisable} 
                  setCellID={setCellID} setCellType={setCellType}/>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, key) => (
                <tr key={key}>
                  <RowCell value={row.name} rowCellName={"name"} index={key} rows={rows} setRow={setRow} setButtonDisable={setButtonDisable} 
                  setCellID={setCellID} setCellType={setCellType}/>

                  <RowCell value={row.fullPrice} rowCellName={"fullPrice"} index={key} rows={rows} setRow={setRow} setButtonDisable={setButtonDisable} 
                  setCellID={setCellID} setCellType={setCellType}/>

                  {columns.map((person, key) => (
                    // <td>{row.prices[person.name].price} 
                    // <br/>
                    // {row.prices[person.name].percent}</td>
                    <PriceCell price={row.prices[person.name].price} percent={row.prices[person.name].percent} index={key} rows={rows} setRow={setRow} setButtonDisable={setButtonDisable} 
                    setCellID={setCellID} setCellType={setCellType}/>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <AddColumn columns={columns} setColumn={setColumn}/>
      <br/>
      <AddRow rows={rows} setRow={setRow}/>
      <br/><br/>
      <button onMouseDown={DeleteCell} disabled={buttonDisabled}>DELETE</button>
    </div>
  );
}

export default App;
