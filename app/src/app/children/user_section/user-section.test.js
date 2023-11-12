import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import UserSection from '.'

const mockUserData = 
    { userImage: 'image_url.png', userName: 'user_name', userLocation: 'user_location' } 


describe('user section', () => {
  it('renders the correct user data', () => {
    const { getByRole, getByText } = render(<UserSection userData={mockUserData} />)

    expect(getByRole('img')).toBeInTheDocument()
    expect(getByText('user_name')).toBeInTheDocument()
    expect(getByText('user_location')).toBeInTheDocument()
  })
})
