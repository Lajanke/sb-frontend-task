import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { LikesSection } from './likes-section'
import { getTimeSincePost } from './helpers'

jest.mock('./helpers', () => ({
  getTimeSincePost: jest.fn()
}))

const mockLikesData =
{ likedByViewer: false, numberOfLikes: 10000, datePosted: 1699664140 }

describe('LikesSection', () => {
  beforeEach(() => {
    getTimeSincePost.mockReturnValue('4 days')
  })
  it('displays the correct number of likes as a string', () => {
    const { getByText } = render(<LikesSection likesData={mockLikesData} />)

    expect(getByText('10,000 likes')).toBeInTheDocument()
  })

  it('displays the unliked icon on first render when the viewer has not liked the post', () => {
    const { getByLabelText } = render(<LikesSection likesData={mockLikesData} />)

    expect(getByLabelText('unliked icon')).toBeInTheDocument()
  })

  it('increments the counter when the unliked icon is clicked', () => {
    const { getByLabelText, getByText } = render(<LikesSection likesData={mockLikesData} />)

    const likeButon = getByLabelText('unliked icon')

    fireEvent.click(likeButon)

    expect(getByText('10,001 likes')).toBeInTheDocument()
  })

  it('decrements the counter when the liked icon is clicked', () => {
    const mockPropsLikedByViewer = { ...mockLikesData, likedByViewer: true }
    const { getByLabelText, getByText } = render(<LikesSection likesData={mockPropsLikedByViewer} />)

    const unlikeButon = getByLabelText('liked icon')

    fireEvent.click(unlikeButon)

    expect(getByText('9,999 likes')).toBeInTheDocument()
  })
})
