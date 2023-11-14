import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { LikeButton } from './like-button'

const mockLikeButtonClicked = jest.fn()

describe('LikeButton', () => {
  it('displays the unliked icon if not liked by viewer', () => {
    const { getByLabelText } = render(<LikeButton size={20} likeButtonClicked={jest.fn()} likedByViewer={false} />)

    expect(getByLabelText('unliked icon')).toBeInTheDocument()
  })

  it('displays the liked icon when the icon is clicked and calls likeButtonClicked', () => {
    const { getByLabelText } = render(<LikeButton size={20} likeButtonClicked={mockLikeButtonClicked} likedByViewer={false} />)

    const likeButon = getByLabelText('unliked icon')

    fireEvent.click(likeButon)

    expect(getByLabelText('liked icon')).toBeInTheDocument()
    expect(mockLikeButtonClicked).toHaveBeenCalled()
  })
})
