import { useState } from 'react'
import { LikedIcon, UnlikedIcon } from '.'
import styles from '../likes-section/likes-section.module.css'

export const LikeButton = ({ size, likeButtonClicked = () => {}, likedByViewer }) => {
  const [liked, setLiked] = useState(likedByViewer)

  const handleHeartClick = () => {
    if (liked) {
      likeButtonClicked(-1)
    } else { likeButtonClicked(1) }
    setLiked(!liked)
  }

  return (
    <button className={styles.heartContainer} onClick={handleHeartClick} aria-label={`like button ${liked ? 'already liked' : 'not liked'}`}>
      {liked ? <LikedIcon size={size} /> : <UnlikedIcon size={size} />}
    </button>
  )
}
