import { useState } from 'react'
import { LikedIcon, UnlikedIcon } from '.'
import styles from '../likes-section/likes-section.module.css'

export const LikeButton = ({ size, setLikedCount = () => {}, likedByViewer }) => {
  const [liked, setLiked] = useState(likedByViewer)

  const handleHeartClick = () => {
    if (liked) {
      setLikedCount(-1)
    } else { setLikedCount(1) }
    setLiked(!liked)
  }

  return (
    <button className={styles.heartContainer} onClick={handleHeartClick} aria-label={`like button ${liked ? 'already liked' : 'not liked'}`}>
      {liked ? <LikedIcon size={size} /> : <UnlikedIcon size={size} />}
    </button>
  )
}
