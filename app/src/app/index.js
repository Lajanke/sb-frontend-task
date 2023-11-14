import React from 'react'
import { formatData } from './helpers'
import { Image } from './children/image'
import { LikesSection } from './children/likes-section'
import { UserSection } from './children/user-section'
import { CommentsSection } from './children/comments-section'
import styles from './styles.module.css'

const App = (props) => {
  const {imageData, userData, commentData, likesData} = formatData(props.data)

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
