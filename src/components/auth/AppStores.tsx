import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .stores {
    display: flex;
    gap: .5rem;
    img {
      height: 40px;
      cursor: pointer;
    }
  }
`

const AppStores = () => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <p>{t('login.download-app')}</p>
      <div className='stores'>
        <a href="https://apps.apple.com/app/instagram/id389801252" target="_blank" rel='noreferrer'>
          <img src={t('login.apple-store')} alt='apple store application' />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.instagram.android" target="_blank" rel="noreferrer" >
          <img src={t('login.playstore')} alt='playstore application' />
        </a>
      </div>
    </Wrapper>
  )
}

export default AppStores
