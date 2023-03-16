import styled from 'styled-components'
interface Props {
  text: string
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  div {
    border: 1px solid #eeeeee;
    width: 100px;
  }
`

const Divider = ({ text }: Props) => {
  return (
    <Wrapper>
      <div></div>
      <p>{text}</p>
      <div></div>
    </Wrapper>
  )
}

export default Divider
