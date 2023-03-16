import { ErrorMessage, useField } from 'formik'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import styled, { useTheme } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  label?: string
  name: string
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  [x: string]: any
  error?: boolean
  showError?: boolean
  icon?: IconDefinition
  hasBackgroundContrast?: boolean
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    color: ${(p) => p.theme.fontColor};
  }
  span {
    color: ${(p) => p.theme.error};
  }
  .input-with-icon {
    display: flex;
    align-items: center;
    max-height: 33px;
    svg {
      border: 1px solid ${({ theme }) => theme.backgroundContrast};
      border-right: none;
      border-radius: 2px 0 0 2px;
      padding: 0.469rem;
    }
  }

  .background-contrast {
    background-color: grey;
  }
`

interface InputProps {
  value: any
  hasIcon?: boolean
  hasBackgroundContrast?: boolean
}

const StyledInput = styled.input<InputProps>`
  padding: 0.5rem;
  background: ${(p) =>
    p.hasBackgroundContrast ? p.theme.backgroundContrast : p.theme.background};
  color: ${(p) => (p.hasBackgroundContrast ? '#262626' : p.theme.fontColor)};
  border: 1px solid ${({ theme }) => theme.backgroundContrast};
  border-left: ${(p) => p.hasIcon && 'none'};
  border-radius: ${(p) => (p.hasIcon ? '0 2px 2px 0' : '2px')};
  outline: 0;
  :-internal-autofill-selected {
    background-color: ${(p) => p.theme.background} !important;
    color: ${(p) => p.theme.fontColor} !important;
  }
`

const Input = ({
  label,
  error = true,
  icon,
  hasBackgroundContrast,
  ...props
}: Props) => {
  const [field, meta] = useField(props)
  const { backgroundContrast } = useTheme()
  return (
    <Wrapper>
      {label && <label htmlFor={props.id || props.name}>{label}</label>}
      {icon ? (
        <div className='input-with-icon'>
          <FontAwesomeIcon
            style={{
              background: (hasBackgroundContrast && backgroundContrast) || '',
            }}
            icon={icon}
            color='#262626'
          />
          <StyledInput
            hasIcon
            hasBackgroundContrast={hasBackgroundContrast}
            {...field}
            {...props}
            value={meta.value}
          />
        </div>
      ) : (
        <StyledInput {...field} {...props} value={meta.value} />
      )}
      {error && <ErrorMessage name={props.name} component='span' />}
    </Wrapper>
  )
}

export default Input
