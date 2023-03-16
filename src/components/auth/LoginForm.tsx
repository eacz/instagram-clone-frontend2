import * as Yup from 'yup'
import { Formik } from 'formik'
import { useTranslation } from 'react-i18next'
import { Input, PasswordInput } from '../../components/forms'
import { Button } from '../../components/common'
import { Form } from './';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { login } from '../../store/auth/slice'

interface LoginFields {
  username: string,
  password: string
}

const LoginForm = () => {
  const { t } = useTranslation()
  const loading = useAppSelector(s => s.auth.loading)
  const dispatch = useAppDispatch()
  
  const handleSubmit = (values: LoginFields) => {
    dispatch(login(values))  
  }

  return (
    <Formik 
      initialValues={{ username: '', password: '' }} 
      onSubmit={handleSubmit}
      validationSchema={
        Yup.object({
          username: Yup.string().max(15, t('login.fields.usernameError')).min(4, t('login.fields.usernameError')),
          password: Yup.string().required(t('login.fields.passwordError'))
        })
      }
    >
      {({ values }) => (
        <Form>
          <Input placeholder={t('login.fields.username')} name='username' />
          <PasswordInput showHide={!!values.password} placeholder={t('login.fields.password')} name='password' />
          <Button 
            disabled={!values.password || !values.username || loading}
            style={{marginTop: '.5rem'}}
            type='submit'
          >
              {t('login.button')}
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
