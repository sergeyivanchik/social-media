import React from 'react'

import './index.scss'

import DetailedInfoBlock from './DetailedInfoBlock'
import InfoItem from '../InfoItem'


const DetailedInfo: React.FC = () => {
  return (
    <div className='detailed-info'>
      <DetailedInfoBlock title='Основная информация'>
        <InfoItem label='Родной город' value='Щучин' isLink={true}/>
        <InfoItem label='Языки' values={['Русский', 'Английский']} isLink={true}/>
        <InfoItem label='Дедушки, бабушки' values={['Дедушка', 'Бабушка']} isLink={true}/>
        <InfoItem label='Родители' values={['Папа', 'Мама']} isLink={true}/>
        <InfoItem label='Братья, сёстры' values={['Брат', 'Сестра']} isLink={true}/>
        <InfoItem label='Дети' values={['Сын', 'Дочь']} isLink={true}/>
        <InfoItem label='Внуки' values={['Внук', 'Внучка']} isLink={true}/>
      </DetailedInfoBlock>

      <DetailedInfoBlock title='Контактная информация'>
        <InfoItem label='Моб. телефон' value='+375331234567' isLink={false}/>
        <InfoItem label='Доп. телефон' value='+375337654321' isLink={false}/>
        <InfoItem label='Skype' value='skupeskype' isLink={true}/>
      </DetailedInfoBlock>

      <DetailedInfoBlock title='Образование'>
        <div className='no-information'>
          Информация отсутствует
        </div>
      </DetailedInfoBlock>

      <DetailedInfoBlock title='Личная информация'>
        <InfoItem label='Деятельность' value='деятельность' isLink={false}/>
        <InfoItem label='Интересы' value='интересы' isLink={false}/>
        <InfoItem label='Любимая музыка' value='музыка' isLink={false}/>
        <InfoItem label='Любимые фильмы' value='фильмы' isLink={false}/>
        <InfoItem label='Любимые телешоу' value='телешоу' isLink={false}/>
        <InfoItem label='Любимые книги' value='книги' isLink={false}/>
        <InfoItem label='Любимые цитаты' value='цитаты' isLink={false}/>
        <InfoItem label='О себе' value='человек' isLink={false}/>
      </DetailedInfoBlock>
    </div>
  )
}

export default DetailedInfo