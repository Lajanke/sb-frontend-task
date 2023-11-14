import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Image } from '.'

const mockImageData = {
  imageText: 'mock_caption_text',
  imageUrl: 'mock_url'
}

describe('image component', () => {
  it('renders an image with alt text', () => {
    const { getByAltText } = render(<Image imageData={mockImageData} />)

    expect(getByAltText('mock_caption_text')).toBeInTheDocument()
  })
})
