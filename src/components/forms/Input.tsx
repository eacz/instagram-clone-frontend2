import { ErrorMessage, useField } from "formik"
import styled from 'styled-components';

interface Props {
  label?: string,
  name: string,
  type?: 'text' | 'email' | 'password',
  placeholder?: string,
  [x:string]: any
}

const StyledInput = styled.input<{value: any}>`
  padding: .5rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.fontColor};
  border: 1px solid ${({ theme }) => theme.backgroundContrast};
  border-radius: 2px;
  outline: 0;
`

const Input = ({label, ...props} : Props) => {
  const [field, meta] = useField(props)
  return (
    <>
      {label && <label htmlFor={props.id || props.name}>{label}</label>}
      <StyledInput
        {...field} {...props} 
        value={meta.value} 
      />
      <ErrorMessage  name={props.name} component="span" />
    </>
  )
}

export default Input