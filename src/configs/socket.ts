import io from 'socket.io-client'

import { devURL } from '../store/api'
import { getCurrentUserChats, typing } from '../store/chats/actions'


const socket = io(devURL)
const me = localStorage.getItem('me') || ''

const socketConfig = (dispatch : any) => {
  socket.on('connect', () => {
    console.log('connected')
    socket.emit('changeOnline', { online: 'online', userId: me })
  })

  socket.on('disconnect', () => {
    console.log('disconnected')
  })

  socket.on('newMessage', () => {
    dispatch(getCurrentUserChats())
  })

  socket.on('typingMessage', (data: string) => {
    dispatch(typing(data))
  })

  return socket
};

type Message = {
  from: string,
  to: string,
  chatId?: string,
  date: number,
  text: string
}

export const sendMessage = (data: Message) =>
  socket.emit('sendMessage', {...data})

export const typingMessage = (from: string, to: string) =>
  socket.emit('typingMessage', {from, to})

export { socketConfig }
