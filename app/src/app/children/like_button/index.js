import React from 'react'
import styles from './styles'
import UnlikeIcon from './children/unliked_icon'

const LikeButton = (props) => {
  return (
    <>
      <div style={styles.likeTextContainer}>
        <p style={styles.likeCount}>6,244 likes</p>
        <p style={styles.postTime}>4 DAYS AGO</p>
      </div>
      <div style={styles.heartContainer}>
        <UnlikeIcon />
      </div>
    </>
  )
}

export default LikeButton
