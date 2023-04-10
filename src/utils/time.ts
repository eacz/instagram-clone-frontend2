import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.extend(timezone)
const timeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone

export const getRelativeTime = (date: string | Date) => dayjs.tz(date, timeZone).fromNow()
