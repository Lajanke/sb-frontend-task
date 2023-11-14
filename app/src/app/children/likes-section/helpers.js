import dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export const getTimeSincePost = (datePosted) => {
  return dayjs(datePosted * 1000).fromNow(true)
}
