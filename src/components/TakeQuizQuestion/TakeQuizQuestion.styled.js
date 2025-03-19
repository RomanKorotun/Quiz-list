import { Field, Form } from "formik";
import styled from "styled-components";

export const CustomForm = styled(Form)`
  min-height: 200px;
`;

export const CustomField = styled(Field)`
  max-width: 200px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 250px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
export const Button = styled.button`
  height: 30px;
`;

export const Error = styled.div`
  color: #e32636;
`;
