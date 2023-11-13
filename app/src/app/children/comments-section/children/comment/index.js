import { useState } from 'react'
import LikedIcon from '../../../likes-section/children/liked-icon'
import UnlikedIcon from '../../../likes-section/children/unliked-icon'
import styles from './styles'

const Comment = ({ formattedComment, likedByViewer }) => {
  const [likedComment, setLikedComment] = useState(likedByViewer)

  const handleHeartClick = () => {
    setLikedComment(!likedComment)
  }

  return (
    <li style={styles.listItem}>
      <p dangerouslySetInnerHTML={{ __html: formattedComment }} style={styles.commentText} />
      <div style={styles.heartContainer}>
        <button style={styles.likeButton} onClick={handleHeartClick} aria-label={`like button ${likedComment ? 'already liked' : 'not liked'}`}>
          {likedComment ? <LikedIcon size={14} /> : <UnlikedIcon size={14} />}
        </button>
      </div>
    </li>
  )
}

export default Comment
