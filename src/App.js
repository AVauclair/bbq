import './App.css';
import React, {useState} from 'react';
import AddColumn from './components/AddColumn'
import AddRow from './components/AddRow';
import MoneyCell from './components/cells/MoneyCell';
import Cell from './components/cells/Cell';


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

    let RecalculatePrices = (columns, product) => {
      let personPercents = 100 / (columns.length)
      let personPrice = Math.floor(product.fullPrice / 100 * personPercents)
      columns.forEach((person) => {product.prices[person.id] = {price: personPrice, percent: Math.floor(personPercents)}})
    }

    let DeleteCell = () => {
      if (cellType === "row") {
        rows.splice(rowCellIndex, 1)
      }
      else {
        columns.splice(columnCellIndex, 1)
        rows.map((product) => { RecalculatePrices(columns, product) })
      }
    }

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
                  <Cell cellType={"column"} key={key} value={person.name} index={key} array={columns} rowCellName={"none"} editParam={"name"}
                  setArray={setColumn} setButtonDisable={setButtonDisable} setArrayCellIndex={setColumnCellIndex} setCellType={setCellType}/>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowCellIndex) => (
                <tr key={rowCellIndex}>
                  <Cell cellType={"row"} value={row.name} rowCellName={"name"} index={rowCellIndex} array={rows} editParam={"name"}
                  setArray={setRow} setButtonDisable={setButtonDisable} setArrayCellIndex={setRowCellIndex} setCellType={setCellType}/>
                  <Cell cellType={"row"} value={row.fullPrice} rowCellName={"fullPrice"} index={rowCellIndex} array={rows} columns={columns} editParam={"fullPrice"}
                  setArray={setRow} setButtonDisable={setButtonDisable} setArrayCellIndex={setRowCellIndex} setCellType={setCellType} RecalculatePrices={RecalculatePrices}/>

                  {columns.map((person, key) => (
                    <MoneyCell price={row.prices[person.id].price} percent={row.prices[person.id].percent} rows={rows} columns={columns} rowCellIndex={rowCellIndex} 
                    columnCellIndex={key}
                    setRow={setRow} setButtonDisable={setButtonDisable} setRowCellID={setRowCellIndex} setCellType={setCellType} RecalculatePrices={RecalculatePrices}/>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <AddColumn columns={columns} setColumn={setColumn} rows={rows} setRow={setRow} RecalculatePrices={RecalculatePrices}/>
      <br/>
      <AddRow rows={rows} setRow={setRow} columns={columns} RecalculatePrices={RecalculatePrices}/>
      <br/><br/>
      <button onMouseDown={DeleteCell} disabled={buttonDisabled}>DELETE</button>
    </div>
  );
}

export default App;