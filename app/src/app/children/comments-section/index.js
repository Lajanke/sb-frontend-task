import Comment from './children/comment'
import formatComment from './children/comment/helpers'
import styles from './styles'

const CommentsSection = ({ commentData: { comments, captionComment, captionUserName } }) => {
  const formattedCaptionComment = formatComment(captionComment, captionUserName)

  return (
    <ul style={styles.list}>
      <li key='caption-comment' style={styles.commentText}>
        <p dangerouslySetInnerHTML={{ __html: formattedCaptionComment }} style={styles.commentText} />
      </li>
      {comments.map(comment => {
        const formattedComment = formatComment(comment.node.text, comment.node.owner.username)
        return (
          <Comment formattedComment={formattedComment} likedByViewer={comment.likedByViewer} key={comment.id} />)
      })}
    </ul>
  )
}

export default CommentsSection
