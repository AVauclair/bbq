import React, {useState} from 'react';
import Modal from './Modal';
import { Form, Formik, Field } from 'formik';

export default function AddRow (props) {

    let [modalActive, setModalActive] = useState()
    let currentID = 2
    let newProduct = {}

    return (
      <>
      <button onClick={() => { setModalActive(true)} }>Добавить товар</button>

      <Modal modalActive={modalActive} setModalActive={setModalActive}>
        <Formik
            initialValues = {{
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
            values.equalPrice ? props.RecalculatePrices(props.columns, newProduct) : props.columns.forEach((person) => {newProduct.prices[person.id] = {price: "0", percent: "0%"}})
            props.setRow([...props.rows, newProduct])

            values.name = ''
            values.fullPrice = ''
            values.equalPrice = "true"
            }}>

          <Form>
            {/* <label htmlFor='name'>Имя: </label> */}
            <Field id='name' name='name' placeholder="Введите название товара"/>
            <br/>
            <Field id='fullPrice' name='fullPrice' placeholder="Введите стоимость товара"/>
            <br/>
            <Field type='checkbox' name='equalPrice'/> Разделить стоимость поровну
            <br/>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </Modal>

      </>
      
    )
  }