import React from 'react'
import { useSelector } from 'react-redux'

import './index.scss'

import DetailedInfoBlock from './DetailedInfoBlock'
import InfoItem from '../InfoItem'

import { getBasicInformation, getContactData } from '../../store/users/selectors'


const DetailedInfo: React.FC = () => {
  const basicInfo = useSelector(getBasicInformation)
  const contactData = useSelector(getContactData)

  return (
    <div className='detailed-info'>
      <DetailedInfoBlock title='Основная информация'>
        <InfoItem
          label='Родной город'
          value={basicInfo.hometown}
          isLink={true}
        />
        {/* <InfoItem label='Языки' values={basicInfo.languages} isLink={true}/> */}
        <InfoItem
          label='Дедушки, бабушки'
          values={basicInfo.grandparents}
          isLink={true}
        />
        <InfoItem
          label='Родители'
          values={basicInfo.parents}
          isLink={true}
        />
        <InfoItem
          label='Братья, сёстры'
          values={basicInfo.brothers_sisters}
          isLink={true}
        />
        <InfoItem
          label='Дети'
          values={basicInfo.children}
          isLink={true}
        />
        <InfoItem
          label='Внуки'
          values={basicInfo.grandchildren}
          isLink={true}
        />
      </DetailedInfoBlock>

      <DetailedInfoBlock title='Контактная информация'>
        <InfoItem
          label='Моб. телефон'
          value={contactData.mobile_phone}
          isLink={false}
        />
        <InfoItem
          label='Доп. телефон'
          value={contactData.additional_phone}
          isLink={false}
        />
        <InfoItem
          label='Skype'
          value={contactData.skype}
          isLink={true}
        />
      </DetailedInfoBlock>

      <DetailedInfoBlock title='Образование'>
        <div className='no-information'>
          Информация отсутствует
        </div>
      </DetailedInfoBlock>

      <DetailedInfoBlock title='Личная информация'>
        <InfoItem
          label='Деятельность'
          value='деятельность'
          isLink={false}
        />
        <InfoItem
          label='Интересы'
          value='интересы'
          isLink={false}
        />
        <InfoItem
          label='Любимая музыка'
          value='музыка'
          isLink={false}
        />
        <InfoItem
          label='Любимые фильмы'
          value='фильмы'
          isLink={false}
        />
        <InfoItem
          label='Любимые телешоу'
          value='телешоу'
          isLink={false}
        />
        <InfoItem
          label='Любимые книги'
          value='книги'
          isLink={false}
        />
        <InfoItem
          label='Любимые цитаты'
          value='цитаты'
          isLink={false}
        />
        <InfoItem
          label='О себе'
          value='человек'
          isLink={false}
        />
      </DetailedInfoBlock>
    </div>
  )
}

export default DetailedInfo