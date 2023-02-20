import styled from 'styled-components';
import { Field } from 'formik';

export const ReqWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormLayout = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 380px;
  }
`;

export const Form = styled.form`
  position: relative;
  padding-top: 20px;
`;

export const AmountLabel = styled.label`
  padding-left: 10px;
`;

export const AmountInput = styled.input`
  font-size: 16px;
  line-height: 26px;
  background-color: transparent;
  color: #7e7e7e;
  border: 1px solid #d0cfcf;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  margin-bottom: 30px;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 34px;
  border: none;
  border-radius: 80px;
  background-color: #4fa94d;
  font-size: 16px;
  line-height: 26px;
  text-decoration: none;
  text-align: center;
  color: inherit;
  margin: 0 auto;
  margin-bottom: 30px;
  :hover {
    background-color: #65db63;
  }
  &:disabled {
    background-color: #b4b4b4;
    color: #ffffff;
  }
`;

export const ErrorText = styled.span`
  display: flex;
  position: absolute;
  top: 90px;
  color: #cb3d40;
  /* &:nth-of-type(2) {
    top: 162px;
  }
  &:last-of-type {
    top: 266px;
  } */
`;

export const FieldSelect = styled(Field)`
  width: 100%;
  margin-bottom: 30px;
`;

export const CurrencyList = styled.ul`
  list-style-type: none;
  padding: 0;
  gap:20px;
`;

export const CurrencyItem = styled.li`
  margin-bottom: 10px;
  border: 1px solid black;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
`;
export const AmountBlock = styled.div`
display:flex;
justify-content:space-between;
`;

export const AmountText = styled.li`
  width: 100%;
  margin-bottom: 30px;
`;

