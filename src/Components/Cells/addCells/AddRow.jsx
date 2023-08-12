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
              fullPrice: values.fullPrice,
              prices: {},
            }
            if (checkboxDisabled === false) {
              props.RecalculatePrices(props.columns, newProduct)
            }
            else {
              props.columns.forEach((person) => {newProduct.prices[person.id] = { price: 0, displayedPercent: 0, realPercent: 0, fixed: false }})
              newProduct.prices[selectedPerson] = { price: values.fullPrice, displayedPercent: 100, realPercent: 100, fixed: false }
            }
            props.setRow([...props.rows, newProduct])

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
              <select disabled={dropboxDisabled} onChange={e => { selectedPerson = e.target.selectedIndex; console.log(props.columns, e.target.selectedIndex)}}>
                {props.columns.map(option => {
                  return (
                  <option key={option.id} value={option.name}>
                    {option.name}
                  </option>
                  )
                },
                selectedPerson = 0
                )
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
