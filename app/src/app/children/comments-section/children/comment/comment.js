import { useState } from 'react'
import LikedIcon from '../../../likes-section/children/liked-icon'
import UnlikedIcon from '../../../likes-section/children/unliked-icon'
import styles from './comment.module.css'

export const Comment = ({ formattedComment, likedByViewer }) => {
  const [likedComment, setLikedComment] = useState(likedByViewer)

  const handleHeartClick = () => {
    setLikedComment(!likedComment)
  }

  return (
    <li className={styles.listItem}>
      <p dangerouslySetInnerHTML={{ __html: formattedComment }} className={styles.commentText} />
      <div className={styles.heartContainer}>
        <button className={styles.likeButton} onClick={handleHeartClick} aria-label={`like button ${likedComment ? 'already liked' : 'not liked'}`}>
          {likedComment ? <LikedIcon size={14} /> : <UnlikedIcon size={14} />}
        </button>
      </div>
    </li>
  )
}
