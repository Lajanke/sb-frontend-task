import { LikeButton } from '../../../like-button'
import styles from './comment.module.css'

export const Comment = ({ formattedSanitizedComment, likedByViewer }) => {
  return (
    <li className={styles.listItem}>
      <p dangerouslySetInnerHTML={{ __html: formattedSanitizedComment }} className={styles.commentText} />
      <LikeButton size={14} likedByViewer={likedByViewer} />
    </li>
  )
}
