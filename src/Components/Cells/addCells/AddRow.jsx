import React, { useState } from 'react'
import Modal from "./../../Modal"
import { Form, Formik, Field } from 'formik'

export default function AddRow(props) {
  let [modalActive, setModalActive] = useState()
  let currentID = 2
  let newProduct = {}

  return (
    <>
      <button onClick={() => {setModalActive(true)}}>Добавить товар</button>

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
            if (values.equalPrice) {
              props.RecalculatePrices(props.columns, newProduct)
            }
            else {
              props.columns.forEach((person) => {newProduct.prices[person.id] = { price: '0', displayedPercent: '0%', realPercent: '0', fixed: false }})
            }
            props.setRow([...props.rows, newProduct])

            values.name = ''
            values.fullPrice = ''
            values.equalPrice = 'true'
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
              {/* <br/> */}
              <Field
                id="fullPrice"
                name="fullPrice"
                placeholder="Введите стоимость товара"
              />
              {/* <br/> */}
              <Field type="checkbox" name="equalPrice" /> Разделить стоимость поровну
              {/* <br/> */}
              <button type="submit">Submit</button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </>
  )
}
