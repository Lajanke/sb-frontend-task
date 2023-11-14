import { useState } from 'react'
import { getTimeSincePost } from './helpers'
import { LikeButton } from '../like-button'
import styles from './likes-section.module.css'

export const LikesSection = ({ likesData: { likedByViewer, numberOfLikes, datePosted } }) => {
  const [likedCount, setLikedCount] = useState(numberOfLikes)
  const timeSincePost = getTimeSincePost(datePosted)

  const handleLikeCount = (number) => {
    setLikedCount(likedCount + number)
  }

  return (
    <>
      <div className={styles.likeTextContainer}>
        <p className={styles.likeCount}>{`${likedCount.toLocaleString()} likes`}</p>
        <p className={styles.postTime}>{timeSincePost.toUpperCase()}</p>
      </div>
      <LikeButton size={28} likeButtonClicked={handleLikeCount} likedByViewer={likedByViewer} />
    </>
  )
}
