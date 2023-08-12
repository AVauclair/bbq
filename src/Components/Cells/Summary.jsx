import React, { useState } from 'react'

let sumFullPrice = 0
let sumPersonsPrice = []
let result = 0;

export default function Summary(props) {
  return (
    <>
    {props.rows.forEach((row) => {sumFullPrice += row.fullPrice})}
    {props.columns.forEach((column) => {
        {sumPersonsPrice = props.rows.reduce((sum, row) => {return sum + row.prices[column.id].price})}
    })}
      
    <td>{sumFullPrice}</td>
    <td>{sumPersonsPrice}</td>
    </>
  )
}
