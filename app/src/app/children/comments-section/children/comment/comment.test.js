import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Comment } from '.'

const defaultProps = {
  formattedComment: "<b>username</b> comment with a <a href=''>#hashtag</a>",
  likedByViewer: false
}

describe('Comment', () => {
  it('displays a comment with the username in bold', () => {
    const { getByText } = render(<Comment {...defaultProps} />)

    expect(getByText('username')).toHaveStyle({ 'font-weight': 'bold' })
  })

  it('displays a link for hashtags in the comment', () => {
    const { getByRole } = render(<Comment {...defaultProps} />)

    const hashtag = getByRole('link')
    expect(hashtag).toHaveTextContent('#hashtag')
  })
})
