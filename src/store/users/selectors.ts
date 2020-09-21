import { createSelector } from "reselect"
import { IUser } from './types'


const user = (state: { users: { data: IUser } }): IUser  => state.users.data
const currentUser = (state: { users: { me: IUser } }): IUser  => state.users.me
const loading = (state: { users: {loading: boolean } }): boolean => state.users.loading

export const selectUser = createSelector(
  user,
  (currentUser): IUser => currentUser
)

export const selectCurrentUser = createSelector(
  currentUser,
  (currentUser): IUser => currentUser
)

type MainUserInfo = {
  name?: string
  surname?: string
  status?: string
  site?: string
  birthday?: number
  marital_status?: string,
  online: string
}

export const getUserInfo = createSelector(
  selectUser,
  (currentUser): MainUserInfo => ({
    name: currentUser.name,
    surname: currentUser.surname,
    status: currentUser.status,
    site: currentUser.site,
    birthday: currentUser.birthday,
    marital_status: currentUser.marital_status,
    online: currentUser.online
  })
)

export const getFriends = createSelector(
  selectUser,
  (currentUser): IUser[] => currentUser.friends || []
)

export const getOnlineFriends = createSelector(
  selectUser,
  (currentUser): IUser[] => currentUser.friends?.filter(elem => elem.online === 'online') || []
)

export const getFriendCount = createSelector(
  getFriends,
  (friends): number => friends?.length || 0
)

export const getOnlineFriendCount = createSelector(
  getOnlineFriends,
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

export const getCurrentUserPhotos = createSelector(
  selectCurrentUser,
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

export const getCurrentUserAvatar = createSelector(
  getCurrentUserPhotos,
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

type PersonalInformation = {
  activity?: string
  interests?: string
  favourite_music?: string
  favourite_films?: string
  favourite_teleshow?: string
  favourite_books?: string
  favourite_quotes?: string
  about_me?: string
}

export const getPersonalInformation = createSelector(
  selectUser,
  (currentUser): PersonalInformation => ({
    activity: currentUser.activity,
    interests: currentUser.interests,
    favourite_music: currentUser.favourite_music,
    favourite_films: currentUser.favourite_films,
    favourite_teleshow: currentUser.favourite_teleshow,
    favourite_books: currentUser.favourite_books,
    favourite_quotes: currentUser.favourite_quotes,
    about_me: currentUser.about_me
  })
)
