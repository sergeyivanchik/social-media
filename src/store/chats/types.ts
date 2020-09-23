export interface IMessage {
  _id?: string,
  from?: string,
  to?: string,
  date?: number,
  text?: string
}

export interface IChats {
  _id?: string,
  participants?: string[],
  messages?: IMessage[],
  lastMessage?: IMessage
}

export enum ChatsActionTypes {
  GET_CURRENT_USER_CHATS = '@@chats/GET_CURRENT_USER_CHATS',
  // GET_CURRENT_USER = '@@users/GET_CURRENT_USER',
  FETCH_FAILURE = '@@chats/FETCH_FAILURE',
  SHOW_PRELOADER = '@@users/SHOW_PRELOADER',
  HIDE_PRELOADER = '@@users/HIDE_PRELOADER'
}

export interface ChatsState {
  // readonly me: IUser
  readonly data: IChats[]
  readonly errors?: string
  readonly loading: boolean
}