import React from 'react'
import Image from './children/image'
import LikesSection from './children/likes-section'
import styles from './styles'
import UserSection from './children/user-section'

const App = (props) => {
  const imageText = props.data.edge_media_to_caption.edges[0].node.text
  const imageUrl = props.data.display_url

  const userLocation = props.data.location.name
  const userName = props.data.owner.username
  const userImage = props.data.owner.profile_pic_url

  const likedByViewer = props.data.viewer_has_liked
  const numberOfLikes = props.data.edge_media_preview_like.count
  const datePosted = props.data.taken_at_timestamp

  const imageData = {
    imageText,
    imageUrl
  }

  const userData = {
    userImage,
    userName,
    userLocation
  }

  const likesData = {
    likedByViewer,
    numberOfLikes,
    datePosted
  }

  return (
    <main style={styles.main}>
      <div style={styles.imageContainer}>
        <Image imageData={imageData} />
      </div>
      <div style={styles.text}>
        <div style={styles.userSection}>
          <UserSection userData={userData} />
        </div>
        <div style={styles.commentsSection}>
          <p>Comments block</p>
          <p>Comments block</p>
          <p>Comments block</p>
          <p>Comments block</p>
          <p>Comments block</p>
          <p>Comments block</p>
          <p>Comments block</p>
          <p>Comments block</p>
          <p>Comments block</p>
          <p>Comments block</p>
          <p>Comments block</p>
        </div>
        <div style={styles.likesContainer}>
          <LikesSection likesData={likesData} />
        </div>
      </div>
    </main>
  )
}

export default App
