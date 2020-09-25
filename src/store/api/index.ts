import { IMessage, IChat } from './../chats/types'
import { IUser } from '../users/types'
import axios from 'axios'


export const devURL = 'http://localhost:5000';
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? devURL : devURL

export const usersApi = {
  fetchUserById(userId: string) {
    return axios.get<IUser>(`/users/user/${userId}`)
  }
}

export const chatsApi = {
  fetchChatsByUser(userId: string) {
    return axios.get<IChat[]>(`/chats/${userId}`)
  },
  fetchMessagesByChat(chatId: string) {
    return axios.get<IMessage[]>(`/chats/chat/${chatId}/messages`)
  },
  fetchCurrentChat(chatId: string) {
    return axios.get<IChat>(`/chats/chat/${chatId}`)
  },
}
