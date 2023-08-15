import './App.css';
import React, { useState } from 'react';
import AddColumn from './components/cells/addCells/AddColumn'
import AddRow from './components/cells/addCells/AddRow';
import Cell from './components/cells/Cell';
import Rows from './components/cells/Rows'
import Summary from './components/cells/Summary';


function App() {

  // let [columns, setColumn] = useState(["Олег", "Вадик", "Арина"])
  let [columns, setColumn] = useState([
    { id: 0, name: "Олег", color: "#98EA72" },
    { id: 1, name: "Вадик", color: "#EF8383" },
    { id: 2, name: "Арина", color: "#71AFF5" }]);

  let [rows, setRow] = useState([
    {
      id: 0, name: "Макароны", color: "#fff", fullPrice: 2000, prices:
      {
        0: { price: 123, displayedPercent: 123, realPercent: 123.1, fixed: false },
        1: { price: 678, displayedPercent: 678, realPercent: 123.1, fixed: false },
        2: { price: 987, displayedPercent: 987, realPercent: 123.1, fixed: false }
      }
    },
    {
      id: 1, name: "Помидоры", color: "#fff", fullPrice: 3000, prices:
      {
        0: { price: 234, displayedPercent: 234, realPercent: 123.1, fixed: false },
        1: { price: 789, displayedPercent: 789, realPercent: 123.1, fixed: false },
        2: { price: 654, displayedPercent: 654, realPercent: 123.1, fixed: false }
      }
    },
    {
      id: 2, name: "Огурцы", color: "#fff", fullPrice: 5000, prices:
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

  let sumFullPrice = 0;
  let sumPersonsPrice = []
  let SummaryCalc = () => {
      rows.forEach((row) => {sumFullPrice += row.fullPrice})
      columns.forEach((column) => {
          {sumPersonsPrice[column.id] = rows.reduce((sum, row) => {
            return (sum + row.prices[column.id].price)
          }, 0)}
          })
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
                <Cell cellType={"column"} key={key} value={person.name} index={key} array={columns} rowCellName={"none"} editParam={"name"} personColor={person.color}
                  setArray={setColumn} setButtonDisable={setButtonDisable} setArrayCellIndex={setColumnCellIndex} setCellType={setCellType} />
              ))}
              <th>Разделить<br/>поровну</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowCellIndex) => (
              <Rows row={row} rows={rows} columns={columns} index={rowCellIndex} productColor={row.color}
              setArray={setRow} setButtonDisable={setButtonDisable} setRowCellIndex={setRowCellIndex} setCellType={setCellType}
              RecalculatePrices={RecalculatePrices}/>
            ))}
            <th>Итого</th>
            <Summary rows={rows} columns={columns} SummaryCalc={SummaryCalc} sumFullPrice={sumFullPrice} sumPersonsPrice={sumPersonsPrice}/>
          </tbody>
        </table>
      </div>

      <AddColumn columns={columns} setColumn={setColumn} rows={rows} setRow={setRow} RecalculatePrices={RecalculatePrices} />
      <br />
      <AddRow rows={rows} setRow={setRow} columns={columns} RecalculatePrices={RecalculatePrices}/>
      <br /><br />
      <button onMouseDown={DeleteCell} disabled={buttonDisabled}>DELETE</button>
    </div>
  );
}

export default App;