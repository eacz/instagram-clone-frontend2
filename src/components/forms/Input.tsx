import { ErrorMessage, useField } from "formik"
import styled from 'styled-components';

interface Props {
  label?: string,
  name: string,
  type?: 'text' | 'email' | 'password',
  placeholder?: string,
  [x:string]: any,
  error?: boolean,
  showError?: boolean
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    color: ${p => p.theme.fontColor}
  }
  span {
    color: ${p => p.theme.error}
  }
`

const StyledInput = styled.input<{value: any}>`
  padding: .5rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.fontColor};
  border: 1px solid ${({ theme }) => theme.backgroundContrast};
  border-radius: 2px;
  outline: 0;
  :-internal-autofill-selected {
    background-color: ${p => p.theme.background} !important;
    color: ${p => p.theme.fontColor} !important;
  }
`

const Input = ({label, error = true, ...props} : Props) => {
  const [field, meta] = useField(props)
  return (
    <Wrapper>
      {label && <label htmlFor={props.id || props.name}>{label}</label>}
      <StyledInput
        {...field} {...props} 
        value={meta.value} 
      />
      {error && <ErrorMessage name={props.name} component="span" />}
    </Wrapper>
  )
}

export default Input