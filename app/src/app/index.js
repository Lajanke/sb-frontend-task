import React from 'react'
import { Image } from './children/image'
import { LikesSection } from './children/likes-section'
import { UserSection } from './children/user-section'
import { CommentsSection } from './children/comments-section'
import styles from './styles.module.css'

const App = (props) => {
  const imageText = props.data.edge_media_to_caption.edges[0].node.text
  const imageUrl = props.data.display_url

  const userLocation = props.data.location.name
  const userName = props.data.owner.username
  const userImage = props.data.owner.profile_pic_url

  const likedByViewer = props.data.viewer_has_liked
  const numberOfLikes = props.data.edge_media_preview_like.count
  const datePosted = props.data.taken_at_timestamp

  const comments = props.data.edge_media_to_comment.edges

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

  const commentData = {
    comments,
    captionComment: imageText,
    captionUserName: userName
  }

  return (
    <main className={styles.main}>
      <div className={styles.imageContainer}>
        <Image imageData={imageData} />
      </div>
      <div className={styles.text}>
        <div className={styles.userSection}>
          <UserSection userData={userData} />
        </div>
        <div className={styles.commentsSection}>
          <CommentsSection commentData={commentData} />
        </div>
        <div className={styles.likesContainer}>
          <LikesSection likesData={likesData} />
        </div>
      </div>
    </main>
  )
}

export default App
