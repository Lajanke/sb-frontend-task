import styles from './image.module.css'

export const Image = ({ imageData: { imageText, imageUrl } }) => {
  return (
    <img
      src={imageUrl}
      className={styles.image}
      alt={imageText}
    />
  )
}
