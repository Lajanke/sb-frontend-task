import dompurify from 'dompurify'

export const formatComment = (comment, userName) => {
  const matches = comment.match(/\B(#[a-zA-Z]+\b)/gm)

  if (matches === null) return `<b>${userName}</b> ${comment}`

  let formattedComment = comment

  matches.forEach((match) => {
    formattedComment = formattedComment.replace(match, `<a href=''>${match}</a>`)
  })

  const sanitizedComment = dompurify.sanitize(`<b>${userName}</b> ${formattedComment}`)

  return sanitizedComment
}
