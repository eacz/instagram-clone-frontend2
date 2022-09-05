import { Form, Formik } from 'formik'
import { Input } from '../forms'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const SearchForm = styled(Form)`
  display: none;
  @media screen and (min-width: ${({theme}) => theme.breakpointMobile}px) {
    display: block;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const SearchBar = () => {
  const handleSubmit = (search: any) => {
    console.log(search)
  }
  return (
    <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
      <SearchForm>
        <Input hasBackgroundContrast name='search' icon={faMagnifyingGlass} />
      </SearchForm>
    </Formik>
  )
}

export default SearchBar
