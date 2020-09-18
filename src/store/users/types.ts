export interface IUser {
  id?: string,
  name?: string,
  surname?: string,
  sex?: string,
  birthday?: number,
  marital_status?: string,
  hometown?: string,
  languages?: string[],
  grandparents?: IUser[],
  parents?: IUser[],
  brothers_sisters?: IUser[],
  children?: IUser[],
  grandchildren?: IUser[],
  site?: string,
  mobile_phone?: string,
  additional_phone?: string,
  skype?: string,
  activity?: string,
  interests?: string,
  favourite_music?: string,
  favourite_teleshow?: string,
  favourite_books?: string,
  favourite_quotes?: string,
  about_me?: string,
  friends?: IUser[],
  email?: string,
  photos?: {
    photo: string,
    isAvatar: boolean
  }[]
  status?: string
}

export enum UsersActionTypes {
  GET_USER_BY_ID = '@@users/GET_USER_BY_ID',
  FETCH_FAILURE = '@@users/FETCH_FAILURE',
  SHOW_PRELOADER = '@@users/SHOW_PRELOADER',
  HIDE_PRELOADER = '@@users/HIDE_PRELOADER'
}

export interface UsersState {
  readonly data: IUser
  readonly errors?: string
  readonly loading: boolean
}