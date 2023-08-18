import React, { useState } from 'react'

export default function Summary(props) {
  return (
    <>
    {props.SummaryCalc()}
    <th>{props.sumFullPrice}</th>
    {props.columns.map((sumPersonPrice) => (<th>{props.sumPersonsPrice[sumPersonPrice.id]} ₽</th>))}
    </>
  )
}
