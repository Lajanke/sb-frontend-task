import { useState } from 'react'
import styles from './likes-section.module.css'
import UnlikeIcon from './children/unliked-icon'
import LikedIcon from './children/liked-icon'
import { getTimeSincePost } from './helpers'

export const LikesSection = ({ likesData: { likedByViewer, numberOfLikes, datePosted } }) => {
  const [liked, setLiked] = useState(likedByViewer)
  const [likedCount, setLikedCount] = useState(numberOfLikes)
  const timeSincePost = getTimeSincePost(datePosted)

  const handleHeartClick = () => {
    if (liked === false) {
      setLikedCount(likedCount + 1)
    } else {
      setLikedCount(likedCount - 1)
    }
    setLiked(!liked)
  }

  return (
    <>
      <div className={styles.likeTextContainer}>
        <p className={styles.likeCount}>{`${likedCount.toLocaleString()} likes`}</p>
        <p className={styles.postTime}>{timeSincePost.toUpperCase()}</p>
      </div>
      <button className={styles.heartContainer} onClick={handleHeartClick} aria-label={`like button ${liked ? 'already liked' : 'not liked'}`}>
        {liked ? <LikedIcon size={28} /> : <UnlikeIcon size={28} />}
      </button>
    </>
  )
}
