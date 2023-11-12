import React from 'react'
import styles from './styles'

const Image = (props) => {
  const { imageText, imageUrl } = props.imageData

  return (
    <img
      src={imageUrl}
      style={styles}
      alt={imageText}
    />
  )
}

export default Image
