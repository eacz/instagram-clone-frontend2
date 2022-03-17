import * as Yup from 'yup'
import { Formik } from 'formik'
import { Input, PasswordInput }  from '../forms'
import { useTranslation } from 'react-i18next';
import { Form } from '../auth/'
import Button from '../common/Button';
import { login, setError, setLoading } from '../../store/auth/slice';
import axiosInstance from '../../shared/axiosInstance';
import { useAppDispatch, useAppSelector } from '../../hooks/index';

interface RegisterFields {
  username: string
  name: string
  email: string
  password: string
}

const RegisterForm = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const loading = useAppSelector(s => s.auth.loading)


  const handleSubmit = async (values: RegisterFields) => {
    dispatch(setLoading(true))
    try {
      await axiosInstance.post('/auth/signup', values)
      dispatch(login({username: values.username, password: values.password }))
    } catch (error: any) {
      dispatch(setError(error.response.data.message || 'Something went wrong'))
    } finally {
      dispatch(setLoading(false)) 
    }
  }

  return (
    <Formik 
      initialValues={{ email: '', username: '', name: '', password: '' }} 
      onSubmit={handleSubmit}
      validationSchema={
        Yup.object({
          username: Yup.string().min(4, t('register.fields.usernameError')).max(20, t('register.fields.usernameError')),
          name: Yup.string().min(3, t('register.fields.nameError')).max(30, t('register.fields.nameError')),
          email: Yup.string().email(t('register.fields.emailError')),
          password: Yup.string().trim().matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, t('register.fields.passwordError'))
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
            disabled={!values.password || !values.username || !values.name || !values.password || loading}
            style={{marginTop: '.5rem'}} type="submit"
          >
              {t('register.button')}
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default RegisterForm
