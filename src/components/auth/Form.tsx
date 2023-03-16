import styled from "styled-components";
import { Form as FormikForm } from 'formik';

const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  gap: .5rem;
`

export default Form;