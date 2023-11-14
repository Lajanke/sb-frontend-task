export const formatData = (data) => {
  const imageText = data.edge_media_to_caption.edges[0].node.text
  const imageUrl = data.display_url

  const userLocation = data.location.name
  const userName = data.owner.username
  const userImage = data.owner.profile_pic_url

  const likedByViewer = data.viewer_has_liked
  const numberOfLikes = data.edge_media_preview_like.count
  const datePosted = data.taken_at_timestamp

  const comments = data.edge_media_to_comment.edges

  return {
    imageData: {
      imageText,
      imageUrl
    },
    userData: {
      userImage,
      userName,
      userLocation
    },
    likesData: {
      likedByViewer,
      numberOfLikes,
      datePosted
    },
    commentData: {
      comments,
      captionComment: imageText,
      captionUserName: userName
    }
  }
}
