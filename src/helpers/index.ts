import { IUser } from '../store/users/types'

const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря'
]

export const getMessageDate = (date: number): string  | void => {
  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  const currentYear = currentDate.getFullYear()

  if (date) {
    const fullDate = new Date(date)
    const day = fullDate.getDate()
    const monthNumber = fullDate.getMonth()
    const year = fullDate.getFullYear()
    const hours = fullDate.getHours()
    const minutes = fullDate.getMinutes()
    const currentMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`


    if (year !== currentYear) {
      return `${day} ${months[monthNumber]} ${year} г.`
    } else if (currentDay !== day) {
      return `${day} ${months[monthNumber]} ${hours}:${currentMinutes}`
    } else {
      return `${hours}:${currentMinutes}`
    }
  }
}

export const getBirthday = (date: number | undefined): string | void => {
  if (date) {
    const fullDate = new Date(date)
    const day = fullDate.getDate()
    const monthNumber = fullDate.getMonth()
    const year = fullDate.getFullYear()

    return `${day} ${months[monthNumber]} ${year} г.`
  }
}

export const getOnlineDate = (date: number | undefined): string  | void => {
  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  const currentYear = currentDate.getFullYear()

  if (date) {
    const fullDate = new Date(date)
    const day = fullDate.getDate()
    const monthNumber = fullDate.getMonth()
    const year = fullDate.getFullYear()
    const hours = fullDate.getHours()
    const minutes = fullDate.getMinutes()
    const currentMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`


    if (year !== currentYear) {
      return `заходил ${day} ${months[monthNumber]} в ${hours}:${currentMinutes} ${year} г.`
    } else if (currentDay !== day) {
      return `заходил ${day} ${months[monthNumber]} в ${hours}:${currentMinutes}`
    } else {
      return `заходил в ${hours}:${currentMinutes}`
    }
  }
}

export const getChatUser = (users?: IUser[]) => {
  const me = localStorage.getItem('me')
  const currentUser = users?.find(elem => elem._id !== me)

  return currentUser
}

export const getUserAvatar = (user?: IUser) => {
  const avatar = user?.photos?.find(elem => elem.isAvatar)

    return avatar?.photo || ''
}
