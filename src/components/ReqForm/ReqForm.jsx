import React, { useEffect, useState } from 'react';
import { Formik, Field } from 'formik';
import shortid from 'shortid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getSymbols, getDate } from '../../service/Api';
import { Puff } from 'react-loader-spinner';

import {
  FormLayout,
  Form,
  AmountLabel,
  AmountInput,
  Btn,
  ErrorText,
  ReqWrapper,
  FieldSelect,
  CurrencyItem,
  CurrencyList,
  AmountBlock,
} from './ReqForm.styled';

const AmountForm = () => {
  const amountID = shortid.generate();
  const currencyID = shortid.generate();
  // const operationID = shortid.generate();
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [amount, setAmount] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [symbols, setSymbols] = useState(null);
  const [exchengeCourse, setExchengeCourse] = useState({});

  useEffect(() => {
    getSymbols().then(response => setSymbols(response.symbols));
  }, []);

  return (
    <ReqWrapper>
      {symbols === null ? (
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#4fa94d"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
          />
          <FormLayout>
            <Formik
              initialValues={{
                amount: '',
                currency: 'USD',
                operation: 'buy',
              }}
              validate={values => {
                const errors = {};
                if (!values.amount) {
                  errors.amount = 'This is a required field';
                } else if (values.amount.length < 1) {
                  errors.name = 'Invalid name';
                }

                if (values.amount.length > 0) {
                  setDisabledBtn(false);
                } else {
                  setDisabledBtn(true);
                }
                return errors;
              }}
              onSubmit={values => {
                const date = startDate
                  .toLocaleDateString('es-CL')
                  .split('-')
                  .reverse()
                  .join('-');
                setAmount(values.amount);
                getDate(date, values.currency).then(response =>
                  setExchengeCourse(response.rates)
                );
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <AmountLabel htmlFor={amountID} value={values.amount}>
                    Amount
                  </AmountLabel>
                  <AmountInput
                    type="text"
                    name="amount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.amount}
                    id={amountID}
                    placeholder="How much?"
                  ></AmountInput>
                  <ErrorText>
                    {errors.amount && touched.amount && errors.amount}
                  </ErrorText>
                  <AmountLabel htmlFor={currencyID} value={values.currency}>
                    Currency
                  </AmountLabel>
                  <FieldSelect
                    component="select"
                    id={currencyID}
                    name="currency"
                    multiple={false}
                  >
                    {Object.keys(symbols).map(el => (
                      <option key={el} value={el}>
                        {el + ' (' + symbols[el] + ')'}
                      </option>
                    ))}
                    ;
                  </FieldSelect>
                  {/* <AmountLabel htmlFor={operationID} value={values.operation}>
                Operation
              </AmountLabel>
              <Field
                component="select"
                id={operationID}
                name="operation"
                multiple={false}
              >
                <option>Buy</option>

                <option>Sell</option>
              </Field> */}

                  <Btn type="submit" disabled={disabledBtn}>
                    Go!
                  </Btn>
                </Form>
              )}
            </Formik>
            <CurrencyList>
              {Object.keys(exchengeCourse).map((el, index) => (
                <CurrencyItem key={index}>
                  <AmountBlock>
                    <b>{el}</b>
                    <p>{Math.floor(exchengeCourse[el] * amount * 100) / 100}</p>
                  </AmountBlock>
                  <p>{symbols[el]}</p>
                </CurrencyItem>
              ))}
            </CurrencyList>
          </FormLayout>
        </>
      )}
    </ReqWrapper>
  );
};

export default AmountForm;
