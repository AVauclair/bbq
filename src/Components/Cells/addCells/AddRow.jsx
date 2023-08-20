import React, { useState } from 'react'
import Modal from "./../../Modal"
import { Form, Formik, Field } from 'formik'

export default function AddRow(props) {
  let [modalActive, setModalActive] = useState()
  let [dropboxDisabled, setDropboxDisabled] = useState(true)
  let [checkboxDisabled, setCheckboxDisabled] = useState(false)
  let currentID = 2
  let newProduct = {}
  let selectedPerson = ''

  return (
    <>
      <button onClick={() => {setModalActive(true)}}>Добавить товар</button>

      <Modal modalActive={modalActive} setModalActive={setModalActive}>
        <Formik
          initialValues={{
            name: '',
            fullPrice: '',
          }}
          onSubmit={(values) => {
            newProduct = {
              id: currentID + 1,
              name: values.name,
              fullPrice: parseFloat(values.fullPrice),
              prices: {}
            }
            if (checkboxDisabled === false) {
              // props.RecalculatePrices(props.columns, newProduct)
              let personPercent = 100 / props.columns.length
              let personPrice = Math.floor(newProduct.fullPrice / 100 * personPercent)
              props.columns.forEach((person) => {newProduct.prices[person.id] = 
                { price: personPrice, displayedPercent: Math.floor(personPercent), realPercent: personPercent, fixed: false, purchaser: false }})
            }
            else {
              props.columns.forEach((person) => {newProduct.prices[person.id] = { price: 0, displayedPercent: 0, realPercent: 0, fixed: false, purchaser: false }})
              newProduct.prices[selectedPerson] = { price: parseFloat(values.fullPrice), displayedPercent: 100, realPercent: 100, fixed: false, purchaser: false }
            }
            props.setRow([...props.rows, newProduct])
            console.log(props.rows)

            values.name = ''
            values.fullPrice = ''
          }}
        >
          <Form>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                width: '30%',
                justifyContent: 'center',
              }}
            >
              <Field
                id="name"
                name="name"
                placeholder="Введите название товара"
              />
              <Field
                id="fullPrice"
                name="fullPrice"
                placeholder="Введите стоимость товара"
              />
              <input type={"checkbox"} checked={!checkboxDisabled} onChange={() => {setCheckboxDisabled(!checkboxDisabled); setDropboxDisabled(!dropboxDisabled)}}/> Разделить стоимость поровну
              <select disabled={dropboxDisabled} onChange={e => { selectedPerson = e.target.selectedIndex}}>
                {props.columns.map(option => {
                  return (
                  <option key={option.id} value={option.name}>
                    {option.name}
                  </option>
                  )}, selectedPerson = 0)
                }
              </select>
              <button type="submit">Submit</button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </>
  )
}
