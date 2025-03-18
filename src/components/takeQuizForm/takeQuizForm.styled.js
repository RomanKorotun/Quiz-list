import { Field as FieldFormik } from "formik";
import styled from "styled-components";

export const Name = styled.h3`
  margin-bottom: 20px;
`;

export const Description = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
`;

export const Field = styled(FieldFormik)`
  max-width: 400px;
  margin-right: 10px;
`;
