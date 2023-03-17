import styled, { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import fakeProfilePicture from '../../assets/fakeProfilePicture.jpg'
import { StoryType } from '../../interfaces'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div<Props>`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  .image-container {
    position: relative;
    margin: 10px;
    .image {
      height: 56px;
      border-radius: 50%;
      overflow: hidden;
      padding: 2px;
      border: ${({ storyType }) =>
        storyType === 'unwatched'
          ? '2px solid #9c0092;'
          : storyType === 'watched'
          ? '2px solid #353535;'
          : 'none'};
      cursor: pointer;
    }
    svg {
      font-size: 20px;
      position: absolute;
      left: 50%;
      top: 50%;
      path {
        color: #0575d1 !important;
      }
    }
  }
  .user-name {
    cursor: pointer;
  }
`

interface Props {
  storyType?: StoryType
}

const Story = ({ storyType = 'unwatched' }: Props) => {
  const color = useTheme().type === 'dark' ? 'white' : 'black'
  const { t } = useTranslation()

  return (
    <Container storyType={storyType}>
      <figure className='image-container'>
        <img src={fakeProfilePicture} alt='user-profile' className='image' />
        {storyType === 'new-story' && (
          <FontAwesomeIcon color={color} style={{ padding: '0 8px' }} size='lg' icon={faPlusCircle} />
        )}
      </figure>
      <span className='user-name'>{storyType === 'new-story' ? t('stories.your-story') : 'username'}</span>
    </Container>
  )
}

export default Story
