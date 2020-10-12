import io from 'socket.io-client'

import { devURL } from '../store/api'
import { getCurrentUserChats, typing, getCurrenChatMessages } from '../store/chats/actions'
import { getIncomingFriends, getOugoingFriends } from '../store/users/actions'


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

  socket.on('newMessage', (chatId: string) => {
    dispatch(getCurrenChatMessages(chatId))
    dispatch(getCurrentUserChats())
  })

  socket.on('typingMessage', (data: string) => {
    dispatch(typing(data))
  })

  socket.on('unsubscribe', () => {
    dispatch(getIncomingFriends())
    dispatch(getOugoingFriends())
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

export const unsubscribe = (from: string, to: string) =>
  socket.emit('unsubscribe', {from, to})

export const addFriend = (from: string, to: string) =>
  socket.emit('addFriend', {from, to})

export { socketConfig }
