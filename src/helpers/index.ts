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

export const getBirthday = (date: number | undefined): string | void => {
  if (date) {
    const fullDate = new Date(date)
    const day = fullDate.getDate()
    const monthNumber = fullDate.getMonth()
    const year = fullDate.getFullYear()

    return `${day} ${months[monthNumber]} ${year} г.`
  }
}