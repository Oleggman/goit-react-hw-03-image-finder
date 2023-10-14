import styled from "styled-components";
import { Form, Field } from "formik";

export const Header = styled.header`
  position: relative;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  background-color: rgb(22, 28, 45);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
`;

export const SearchForm = styled(Form)`
  position: relative;
  width: 100%;
  max-width: 400px;
`;

export const Input = styled(Field)`
  width: 100%;
  border: 3px solid #433f3f;
  outline: none;
  padding: 10px;
  font-size: 16px;
  background-color: #d0c8bc;
  border-radius: 4px;
  margin-right: 10px;
  padding-left: 50px;
`;

export const SubmitBtn = styled.button`
  top: 30%;
  left: 10px;
  position: absolute;
  width: 40px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;