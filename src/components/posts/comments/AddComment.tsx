import { useTranslation } from 'react-i18next'
import styled, { useTheme } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-regular-svg-icons'
import { Formik } from 'formik'
import CommentInput from './CommentInput'
import { TextButton } from '../../common'
import CommentForm from './CommentForm'

const Container = styled.section`
  border-top: 1px solid ${({ theme }) => theme.backgroundContrast};
  padding: 14px;
  display: grid;
  grid-template-columns: 1fr 11fr;
  align-items: center;
  svg {
    cursor: pointer;
  }
`

interface commentFields {
  comment: string
}

const AddComment = () => {
  const { t } = useTranslation()
  const color = useTheme().type === 'dark' ? 'white' : 'black'

  const handleSubmit = (comment: commentFields) => {
    console.log(comment)
  }

  return (
    <Container>
      <FontAwesomeIcon color={color} size='lg' icon={faSmile} />
      <Formik initialValues={{ comment: '' }} onSubmit={handleSubmit}>
        {({ values }) => (
          <CommentForm>
            {/* TODO: check if i should change this input for a textarea */}
            <CommentInput name='comment' placeholder={t('post.comment.add')} />
            <TextButton type='submit'>{t('post.comment.post')}</TextButton>
          </CommentForm>
        )}
      </Formik>
    </Container>
  )
}

export default AddComment
