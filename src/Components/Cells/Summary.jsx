import React, { useState } from 'react'

export default function Summary(props) {
  return (
    <>
    {props.SummaryCalc()}
    <th>{props.rows.reduce((sum, row) => {return sum + row.fullPrice}, 0)}</th>
    {props.selectedPerson !== -1 
    ? props.rows.map((row, rowCellIndex) => (
        row.prices[props.selectedPerson].purchaser && (<th>{row.fullPrice}</th>, props.columns.map((sumPersonPrice) => <th>{props.sumPersonsPrice[sumPersonPrice.id]} ₽</th>)) 
        // вот тут проблемы: 
        // 1) роу.фуллПрайс не рендерится
        // 2) если выбрать 2+ товара, то он 2+ раз и продублирует это, лень думать пока
      ))
    : props.columns.map((sumPersonPrice) => <th>{props.sumPersonsPrice[sumPersonPrice.id]} ₽</th>)
    }
    </>
  )
}
