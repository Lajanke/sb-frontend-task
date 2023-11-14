import styles from './image.module.css'

export const Image = ({ imageData: { imageText, imageUrl } }) => {

  return (
  
  <picture className={styles.image}>
    <source media="(max-width: 400px)" srcset="image-400.webp" />
    <source media="(min-width: 600px)" srcset="image.webp" />
    <img src="image.png" alt={imageText} />
</picture>
  )
}
