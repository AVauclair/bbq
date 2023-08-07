import './App.css';
import React, { useState } from 'react';
import AddColumn from './components/cells/addCells/AddColumn'
import AddRow from './components/cells/addCells/AddRow';
import MoneyCell from './components/cells/MoneyCell';
import Cell from './components/cells/Cell';
import EqualCheckbox from './components/cells/EqualCheckbox'


function App() {

  // let [columns, setColumn] = useState(["Олег", "Вадик", "Арина"])
  let [columns, setColumn] = useState([
    { id: 0, name: "Олег" },
    { id: 1, name: "Вадик" },
    { id: 2, name: "Арина" }]);

  let [rows, setRow] = useState([
    {
      id: 0, name: "Макароны", fullPrice: 2000, prices:
      {
        0: { price: 123, displayedPercent: 123, realPercent: 123.1, fixed: false },
        1: { price: 678, displayedPercent: 678, realPercent: 123.1, fixed: false },
        2: { price: 987, displayedPercent: 987, realPercent: 123.1, fixed: false }
      }
    },
    {
      id: 1, name: "Помидоры", fullPrice: 3000, prices:
      {
        0: { price: 234, displayedPercent: 234, realPercent: 123.1, fixed: false },
        1: { price: 789, displayedPercent: 789, realPercent: 123.1, fixed: false },
        2: { price: 654, displayedPercent: 654, realPercent: 123.1, fixed: false }
      }
    },
    {
      id: 2, name: "Огурцы", fullPrice: 5000, prices:
      {
        0: { price: 456, displayedPercent: 456, realPercent: 123.1, fixed: false },
        1: { price: 567, displayedPercent: 567, realPercent: 123.1, fixed: false },
        2: { price: 678, displayedPercent: 678, realPercent: 123.1, fixed: false }
      }
    },
  ])

  let [buttonDisabled, setButtonDisable] = useState(true)
  let [rowCellIndex, setRowCellIndex] = useState()
  let [columnCellIndex, setColumnCellIndex] = useState()
  let [cellType, setCellType] = useState()

  let RecalculatePrices = (columns, product) => {
    let personPercent = 100 / columns.length
    let personPrice = Math.floor(product.fullPrice / 100 * personPercent)
    columns.forEach((person) => {product.prices[person.id] = { price: personPrice, displayedPercent: Math.floor(personPercent), realPercent: personPercent, fixed: false }})
  }

  let DeleteCell = () => {
    if (cellType === "row") {
      rows.splice(rowCellIndex, 1)
    }
    else {
      columns.splice(columnCellIndex, 1)
      rows.forEach((product) => { RecalculatePrices(columns, product) })
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
                  setArray={setColumn} setButtonDisable={setButtonDisable} setArrayCellIndex={setColumnCellIndex} setCellType={setCellType} />
              ))}
              <th>Разделить<br/>поровну</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowCellIndex) => (
              <tr key={rowCellIndex}>
                <Cell cellType={"row"} value={row.name} rowCellName={"name"} index={rowCellIndex} array={rows} editParam={"name"}
                  setArray={setRow} setButtonDisable={setButtonDisable} setArrayCellIndex={setRowCellIndex} setCellType={setCellType} />
                <Cell cellType={"row"} value={row.fullPrice} rowCellName={"fullPrice"} index={rowCellIndex} array={rows} columns={columns} editParam={"fullPrice"} sign={"₽"}
                  setArray={setRow} setButtonDisable={setButtonDisable} setArrayCellIndex={setRowCellIndex} setCellType={setCellType} RecalculatePrices={RecalculatePrices} />

                {columns.map((person, key) => (
                  <MoneyCell price={row.prices[person.id].price} displayedPercent={row.prices[person.id].displayedPercent} rows={rows} columns={columns} 
                    rowCellIndex={rowCellIndex} columnCellIndex={key} key={key}
                    setRow={setRow} setButtonDisable={setButtonDisable} setRowCellID={setRowCellIndex} setCellType={setCellType} RecalculatePrices={RecalculatePrices} />
                ))}
                <EqualCheckbox rows={rows} columns={columns} index={rowCellIndex} RecalculatePrices={RecalculatePrices} setRow={setRow}/>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddColumn columns={columns} setColumn={setColumn} rows={rows} setRow={setRow} RecalculatePrices={RecalculatePrices} />
      <br />
      <AddRow rows={rows} setRow={setRow} columns={columns} RecalculatePrices={RecalculatePrices} />
      <br /><br />
      <button onMouseDown={DeleteCell} disabled={buttonDisabled}>DELETE</button>
    </div>
  );
}

export default App;