import styled from "styled-components";
import { Form, Field } from "formik";

export const SearchForm = styled(Form)`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  background: linear-gradient(to right, red, purple);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
`;

export const Input = styled(Field)`
  border: 3px solid #433f3f;
    
  outline: none;
  padding: 10px;
  font-size: 16px;
  background-color: #d0c8bc;
  border-radius: 4px;
  margin-right: 10px;
`;

export const SubmitBtn = styled.button`
  background: #333333;
  padding: 10px;
  border-radius: 4px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #ff8000,
    0 -18px 40px #f00;
  cursor: pointer;
`;