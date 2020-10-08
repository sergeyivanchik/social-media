import React, { useState } from 'react'

import './index.scss'

import { sendMessage, typingMessage } from '../../../configs/socket'


interface IProps {
  userId?: string
}

const TextField: React.FC<IProps> = ({ userId }) => {
  const [text, setText] = useState('')
  const me = localStorage.getItem('me') || ''

  const sendHandler = (): void => {
    if (text) {
      sendMessage({
        from: me,
        to: userId || '',
        text,
        date: Date.now()
      })
      setText('')
    }
  }

  return (
    <>
      <textarea
        value={text}
        className='text-field'
        placeholder='Напишите сообщение...'
        onChange={e => {
          setText(e.target.value)
          typingMessage(me, userId || '')
        }}
      />
      <i
        className='material-icons text-field__send'
        onClick={sendHandler}
      >
        send
      </i>
    </>

  );
}

export default TextField
