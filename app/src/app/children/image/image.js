import styles from './image.module.css'

export const Image = (props) => {
  const { imageText, imageUrl } = props.imageData

  return (
    <img
      src={imageUrl}
      className={styles.image}
      alt={imageText}
    />
  )
}
