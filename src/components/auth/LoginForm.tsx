import * as Yup from 'yup'
import styled from 'styled-components'
import { Form, Formik } from 'formik'
import { useTranslation } from 'react-i18next'
import { Input, PasswordInput } from '../../components/forms'
import { Button } from '../../components/common'

const Wrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  gap: .5rem;
`

interface LoginFields {
  username: string,
  password: string
}

const LoginForm = () => {
  const { t } = useTranslation()

  const handleSubmit = (values: LoginFields) => {
    console.log(values);
  }

  return (
    <Formik 
      initialValues={{ username: '', password: '' }} 
      onSubmit={handleSubmit}
      validationSchema={
        Yup.object({
          username: Yup.string().max(15, t('login.fields.usernameError')).min(4, t('login.fields.usernameError'))
        })
      }
    >
      {({ values }) => (
        <Wrapper>
          <Input placeholder={t('login.fields.username')} name='username' />
          <PasswordInput showHide={!!values.password} placeholder={t('login.fields.password')} name='password' />
          <Button 
            disabled={!values.password || !values.username}
            style={{marginTop: '.5rem'}}
          >
              {t('login.button')}
          </Button>
        </Wrapper>
      )}
    </Formik>
  )
}

export default LoginForm
