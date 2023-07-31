import './App.css';
import React, {useState} from 'react';
import AddColumn from './Components/AddColumn'
import AddRow from './Components/AddRow';
import ColumnCell from './Components/Cells/ColumnCell';
import RowCell from './Components/Cells/RowCell';
import MoneyCell from './Components/Cells/MoneyCell';


function App() {

    // let [columns, setColumn] = useState(["Олег", "Вадик", "Арина"])
    let [columns, setColumn] = useState([
      {id: 0, name: "Олег"},
      {id: 1, name: "Вадик"},
      {id: 2, name: "Арина"}]);

    let [rows, setRow] = useState([
      {id: 0, name: "Макароны", fullPrice: "2000", prices: 
      {0: {price: "123", percent: "123%"}, 1: {price: "678", percent: "678%"}, 2: {price: "987", percent: "987%"}}},
      {id: 1, name: "Помидоры", fullPrice: "3000", prices: 
      {0: {price: "234", percent: "234%"}, 1: {price: "789", percent: "789%"}, 2: {price: "654", percent: "654%"}}},
      {id: 2, name: "Огурцы", fullPrice: "5000", prices: 
      {0: {price: "456", percent: "456%"}, 1: {price: "8910", percent: "8910%"}, 2: {price: "321", percent: "321%"}}},
    ])

    let [buttonDisabled, setButtonDisable] = useState(true)
    let [rowCellIndex, setRowCellIndex] = useState()
    let [columnCellIndex, setColumnCellIndex] = useState()
    let [cellType, setCellType] = useState()

    let DeleteCell = () => {
      cellType === "row" ? rows.splice(rowCellIndex, 1) : columns.splice(columnCellIndex, 1)
    }

    let columnIndex;
    let rowIndex;

    // debugger
  return (
    <div className='App'>
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>Товары</th>
              <th>Стоимость</th>
              {columns.map((person, key) => (
                  <ColumnCell key={key} person={person} index={key} columns={columns} rows={rows}
                  setColumn={setColumn} setRow={setRow} setButtonDisable={setButtonDisable} setColumnCellIndex={setColumnCellIndex} setCellType={setCellType}/>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowCellIndex) => (
                <tr key={rowCellIndex}>

                  <RowCell value={row.name} rowCellName={"name"} index={rowCellIndex} rows={rows} 
                  setRow={setRow} setButtonDisable={setButtonDisable} setRowCellIndex={setRowCellIndex} setCellType={setCellType}/>
                  <RowCell value={row.fullPrice} rowCellName={"fullPrice"} index={rowCellIndex} rows={rows} 
                  setRow={setRow} setButtonDisable={setButtonDisable} setRowCellIndex={setRowCellIndex} setCellType={setCellType}/>

                  {columns.map((person, key) => (
                    <MoneyCell price={row.prices[person.id].price} percent={row.prices[person.id].percent} rows={rows} rowCellIndex={rowCellIndex} columnCellIndex={key}
                    setRow={setRow} setButtonDisable={setButtonDisable} setRowCellID={setRowCellIndex} setCellType={setCellType}/>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <AddColumn columns={columns} setColumn={setColumn} rows={rows} setRow={setRow}/>
      <br/>
      <AddRow rows={rows} setRow={setRow} columns={columns}/>
      <br/><br/>
      <button onMouseDown={DeleteCell} disabled={buttonDisabled}>DELETE</button>
    </div>
  );
}

export default App;
