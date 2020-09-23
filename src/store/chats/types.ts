import { IUser } from "../users/types";

export interface IMessage {
  _id?: string,
  from?: string,
  to?: string,
  date: number,
  text?: string
}

export interface IChats {
  _id?: string,
  participants?: IUser[],
  messages?: IMessage[],
  lastMessage: IMessage
}

export enum ChatsActionTypes {
  GET_CURRENT_USER_CHATS = '@@chats/GET_CURRENT_USER_CHATS',
  FETCH_FAILURE = '@@chats/FETCH_FAILURE',
  TYPING_MESSAGE = '@@chats/TYPING_MESSAGE',
  REMOVE_TYPING_MESSAGE = '@@chats/REMOVE_TYPING_MESSAGE',
  SHOW_PRELOADER = '@@users/SHOW_PRELOADER',
  HIDE_PRELOADER = '@@users/HIDE_PRELOADER'
}

export interface ChatsState {
  // readonly me: IUser
  readonly data: IChats[]
  readonly errors?: string
  readonly loading: boolean
  readonly typing: string[]
}