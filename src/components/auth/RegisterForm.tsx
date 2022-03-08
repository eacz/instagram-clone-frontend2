import * as Yup from 'yup'
import { Formik } from 'formik'
import { Input, PasswordInput }  from '../forms'
import { useTranslation } from 'react-i18next';
import { Form } from '../auth/'
import Button from '../common/Button';

interface RegisterFields {
  username: string
  name: string
  email: string
  password: string
}

const RegisterForm = () => {
  const { t } = useTranslation()

  const handleSubmit = (values: RegisterFields) => {
    console.log(values)
  }

  return (
    <Formik 
      initialValues={{ email: '', username: '', name: '', password: '' }} 
      onSubmit={handleSubmit}
      validationSchema={
        Yup.object({
          username: Yup.string().min(4, t('register.fields.usernameError')).max(15, t('register.fields.usernameError')),
          name: Yup.string().min(4, t('register.fields.nameError')).max(15, t('register.fields.nameError')),
          email: Yup.string().email(t('register.fields.emailError')),
          password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
        })
      }
    >
      {({ values }) => (
        <Form>
          <Input placeholder={t('register.fields.email')} name='email' />
          <Input placeholder={t('register.fields.name')} name='name' />
          <Input placeholder={t('register.fields.username')} name='username' />
          <PasswordInput showHide={!!values.password}  placeholder={t('register.fields.password')} name='password' />
          <Button 
            disabled={!values.password || !values.username || !values.name || !values.password}
            style={{marginTop: '.5rem'}}
          >
              {t('register.button')}
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default RegisterForm
