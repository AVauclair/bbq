import React, { useState } from 'react'
import Modal from "./../../Modal"
import { Form, Formik, Field } from 'formik'
import { ChromePicker } from 'react-color'

export default function AddColumn(props) {
  let [modalActive, setModalActive] = useState()
  let [color, setColor] = useState('#fff')
  let newPersons
  let newProduct = {}
  let personPercents
  let personPrice
  let currentID = 2

  return (
    <>
      <button onClick={() => { setModalActive(true)}}>Добавить человека</button>

      <Modal modalActive={modalActive} setModalActive={setModalActive}>
        <Formik
          initialValues={{
            name: '',
            fullPrice: '',
            equalPrice: true,
          }}
          onSubmit={(values) => {
            newProduct = {
              id: currentID + 1,
              name: values.name,
              fullPrice: values.fullPrice,
              prices: {},
            }

            props.setColumn([...props.columns, { id: props.columns.length, name: values.name, color: color.hex }])
            newPersons = props.rows.map((product) => {
              if (values.equalPrice) {
                personPercents = 100 / (props.columns.length + 1)
                personPrice = Math.ceil((product.fullPrice / 100) * personPercents)
                product.prices[props.columns.length] = {price: personPrice, displayedPercent: Math.floor(personPercents), realPercent: personPercents, fixed: false, purchaser: false}

                props.columns.forEach((person) => {product.prices[person.id] = 
                  {...product.prices[person.id], price: personPrice, displayedPercent: Math.floor(personPercents), realPercent: personPercents, fixed: false}})
              }
              else {
                product.prices[props.columns.length] = {price: 0, displayedPercent: 0, realPercent: 0, fixed: false, purchaser: false}
              }
              return product
            })
            props.setRow(newPersons)

            values.name = ''
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
              <Field id="name" name="name" placeholder="Введите имя" style={{color: !color.hex ? "#FFFFFF" : color.hex, backgroundColor: '#282c34', fontWeight: 'bold'}}/>
              {/* <br/> */}
              <Field type="checkbox" name="equalPrice" /> Сравнять стоимость всех товаров с остальными
              {/* <br/> */}
              <ChromePicker color={color} onChange={changedColor => setColor(changedColor)}/>
              <button type="submit">Submit</button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </>
  )
}
