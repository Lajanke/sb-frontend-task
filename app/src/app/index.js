import React from 'react'
import Image from './children/image'
import LikeButton from './children/like_button'
import styles from './styles'

const App = (props) => {
  const imageText = props.data.edge_media_to_caption.edges[0].node.text
  const imageUrl = props.data.display_url

  const imageData = {
    imageText,
    imageUrl
  }

  return (
    <main style={styles.main}>
      <div style={styles.imageContainer}>
        <Image imageData={imageData} />
      </div>
      <div style={styles.text}>
        <p>User block</p>
        <p>Comments block</p>
        <LikeButton />
      </div>
    </main>
  )
}

export default App
