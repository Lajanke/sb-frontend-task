import formatComment from './helpers'

it('returns a comment with the bold tags added to the username', () => {
  const result = formatComment('a normal comment', 'username')
  expect(result).toEqual('<b>username</b> a normal comment')
})

it('returns hashtags wrapped in a tags', () => {
  const result = formatComment('a comment #with some #hashtags', 'username')
  expect(result).toEqual("<b>username</b> a comment <a href=''>#with</a> some <a href=''>#hashtags</a>")
})
