import { Comment, formatComment } from './children'

import styles from './comments-section.module.css'

export const CommentsSection = ({ commentData: { comments, captionComment, captionUserName } }) => {
  const formattedCaptionComment = formatComment(captionComment, captionUserName)

  return (
    <ul className={styles.list}>
      <li key='caption-comment' className={styles.commentText}>
        <p dangerouslySetInnerHTML={{ __html: formattedCaptionComment }} className={styles.commentText} />
      </li>
      {comments.map(comment => {
        const formattedComment = formatComment(comment.node.text, comment.node.owner.username)
        return (
          <Comment formattedComment={formattedComment} likedByViewer={comment.likedByViewer} key={comment.node.id} />)
      })}
    </ul>
  )
}
