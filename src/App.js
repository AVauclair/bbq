import './App.css';
import React, {useState, useEffect} from 'react';
import AddColumn from './Components/AddColumn'
import AddRow from './Components/AddRow';

import '@grapecity/wijmo.styles/wijmo.css';
import { getOrderList } from './makeData';

import * as wjOlap from '@grapecity/wijmo.olap';
import * as wjcOlap from '@grapecity/wijmo.react.olap';



function App() {

    let [columns, setColumn] = useState([
      {id: 1, name: "stoimost"},
      {id: 1, name: "oleg"},
      {id: 2, name: "vadik"},
      {id: 3, name: "arina"}]);

    let [rows, setRow] = useState([
      {id: 1, name: "tovarich"},
      {id: 2, name: "makaroni"},
      {id: 3, name: "pomidori"},
      {id: 4, name: "ogurci"},
    ])

    const [ng, setNG] = useState(new wjOlap.PivotEngine({
      itemsSource: getOrderList(30),
      fields: [
        {binding: 'persons', header: 'пчел'},
        {binding: 'price', header: 'стоимость'},
        {binding: 'product', header: 'товар'},
      ]
    }));

  return (
    <div className='App'>
      {/* <div className='table'>
        {rows.map((food) => (
          <tr>
            <th><input className='input' value={food.name}/></th>
            {columns.map((persons) => (
              <>
                <th>{food.id === 1 ? <input className='input' value={persons.name}/> : null}</th>
              </>
            ))}
          </tr>
        ))}
      </div>

      <AddColumn columns={columns} setColumn={setColumn}/>
      <br/>
      <AddRow rows={rows} setRow={setRow}/> */}

<div className="App">
      <div className='flextable'>
        <wjcOlap.PivotPanel itemsSource={ng}></wjcOlap.PivotPanel>
        <wjcOlap.PivotGrid itemsSource={ng} ></wjcOlap.PivotGrid>
      </div>
    </div>
      
    </div>
  );
}

export default App;
