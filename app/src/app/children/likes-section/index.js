import React, { useState } from 'react'
import styles from './styles'
import UnlikeIcon from './children/unliked-icon'
import LikedIcon from './children/liked-icon'
import { getTimeSincePost } from './helpers'

const LikesSection = ({ likesData: { likedByViewer, numberOfLikes, datePosted } }) => {
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
      <div style={styles.likeTextContainer}>
        <p style={styles.likeCount}>{`${likedCount.toLocaleString()} likes`}</p>
        <p style={styles.postTime}>{timeSincePost.toUpperCase()}</p>
      </div>
      <button style={styles.heartContainer} onClick={handleHeartClick} aria-label={`like button ${liked ? 'already liked' : 'not liked'}`}>
        {liked ? <LikedIcon size={28} /> : <UnlikeIcon size={28} />}
      </button>
    </>
  )
}

export default LikesSection
