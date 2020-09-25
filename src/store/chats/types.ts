import { IUser } from "../users/types";

export interface IMessage {
  _id?: string,
  from?: IUser,
  to?: string,
  date: number,
  text?: string
}

export interface ILastMessage {
  _id?: string,
  from?: string,
  to?: string,
  date: number,
  text?: string
}

export interface IChat {
  _id?: string,
  participants?: IUser[],
  messages?: IMessage[],
  lastMessage?: ILastMessage
}

export enum ChatsActionTypes {
  GET_CURRENT_USER_CHATS = '@@chats/GET_CURRENT_USER_CHATS',
  REMOVE_CURRENT_USER_CHATS = '@@chats/REMOVE_CURRENT_USER_CHATS',
  GET_CURRENT_USER_CHAT = '@@chats/GET_CURRENT_USER_CHAT',
  REMOVE_CURRENT_USER_CHAT = '@@chats/REMOVE_CURRENT_USER_CHAT',
  GET_CURREN_CHAT_MESSAGES = '@@chats/GET_CURREN_CHAT_MESSAGES',
  REMOVE_CURRENT_CHAT_MESSAGES = '@@chats/REMOVE_CURRENT_CHAT_MESSAGES',
  FETCH_FAILURE = '@@chats/FETCH_FAILURE',
  TYPING_MESSAGE = '@@chats/TYPING_MESSAGE',
  REMOVE_TYPING_MESSAGE = '@@chats/REMOVE_TYPING_MESSAGE',
  SHOW_PRELOADER = '@@users/SHOW_PRELOADER',
  HIDE_PRELOADER = '@@users/HIDE_PRELOADER'
}

export interface ChatsState {
  // readonly me: IUser
  readonly data: IChat[]
  readonly currentChat: IChat
  readonly messages: IMessage[]
  readonly errors?: string
  readonly loading: boolean
  readonly typing: string[]
}