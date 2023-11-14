import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Comment } from '.'
import { getTimeSincePost } from '../../../likes-section/helpers'

jest.mock('../../../likes-section/helpers', () => ({
  getTimeSincePost: jest.fn()
}))

const defaultProps = {
  formattedComment: "<b>username</b> comment with a <a href=''>#hashtag</a>",
  likedByViewer: false
}

describe('Comment', () => {
  beforeEach(() => {
    getTimeSincePost.mockReturnValue('4 days')
  })
  it('displays a comment with the username in bold', () => {
    const { getByText } = render(<Comment {...defaultProps} />)

    expect(getByText('username')).toHaveStyle({ 'font-weight': 'bold' })
  })

  it('displays a link for hashtags in the comment', () => {
    const { getByRole } = render(<Comment {...defaultProps} />)

    const hashtag = getByRole('link')
    expect(hashtag).toHaveTextContent('#hashtag')
  })

  it('displays an unliked icon by default when the comment is not liked by the viewer', () => {
    const { getByLabelText } = render(<Comment {...defaultProps} />)

    expect(getByLabelText('unliked icon')).toBeInTheDocument()
  })
})
