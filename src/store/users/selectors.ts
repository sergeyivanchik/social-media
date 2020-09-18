import { createSelector } from "reselect"
import { IUser } from './types'


const user = (state: { users: { data: IUser } }): IUser  => state.users.data
const loading = (state: { users: {loading: boolean } }): boolean => state.users.loading

export const selectUser = createSelector(
  user,
  (currentUser): IUser => currentUser
)

type MainUserInfo = {
  name?: string
  surname?: string
  status?: string
  site?: string
  birthday?: number
  marital_status?: string
}

export const getUserInfo = createSelector(
  selectUser,
  (currentUser): MainUserInfo => ({
    name: currentUser.name,
    surname: currentUser.surname,
    status: currentUser.status,
    site: currentUser.site,
    birthday: currentUser.birthday,
    marital_status: currentUser.marital_status
  })
)

export const getFriends = createSelector(
  selectUser,
  (currentUser): IUser[] => currentUser.friends || []
)

export const getFriendCount = createSelector(
  getFriends,
  (friends): number => friends?.length || 0
)

export const getLoading = createSelector(
  loading,
  (loading): boolean => loading
)

type Photo = {
  photo?: string,
  isAvatar?: boolean
}

export const getPhotos = createSelector(
  selectUser,
  (currentUser): Photo[] => currentUser?.photos || []
)

export const getPhotosCount = createSelector(
  getPhotos,
  (photos): number => photos?.length || 0
)

export const getAvatar = createSelector(
  getPhotos,
  (photos): string => {
    const avatar = photos.find(elem => elem.isAvatar)

    return avatar?.photo || ''
  }
)

type BasicInfo = {
  hometown?: string,
  languages?: string[],
  grandparents?: IUser[],
  parents?: IUser[],
  brothers_sisters?: IUser[],
  children?: IUser[],
  grandchildren?: IUser[]
}

export const getBasicInformation = createSelector(
  selectUser,
  (currentUser): BasicInfo => ({
    hometown: currentUser.hometown,
    languages: currentUser.languages,
    grandparents: currentUser.grandparents,
    parents: currentUser.parents,
    brothers_sisters: currentUser.brothers_sisters,
    children: currentUser.children,
    grandchildren: currentUser.grandchildren
  })
)

type ContactData = {
  mobile_phone?: string,
  additional_phone?: string,
  skype?: string
}

export const getContactData = createSelector(
  selectUser,
  (currentUser): ContactData => ({
    mobile_phone: currentUser.mobile_phone,
    additional_phone: currentUser.additional_phone,
    skype: currentUser.skype
  })
)
