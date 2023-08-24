import React, { useState } from 'react'

let sumFullPrice = 0;
export default function Summary(props) {
  return (
    <>
    {props.SummaryCalc()}
    {props.rows.forEach((row) => {sumFullPrice += row.fullPrice})}
    <th>{sumFullPrice}</th>
    {props.selectedPerson !== -1 
    ? props.rows.map((row, rowCellIndex) => (
        row.prices[props.selectedPerson].purchaser
          ? props.columns.map((sumPersonPrice) => <th>{props.sumPersonsPrice[sumPersonPrice.id]} ₽</th>) //вот тут чет не так, если выбрать 2+ товара, то он 2+ раз и продублирует это, лень думать пока
          : null
      ))
    : props.columns.map((sumPersonPrice) => <th>{props.sumPersonsPrice[sumPersonPrice.id]} ₽</th>)
    }
    </>
  )
}
