import styles from './user-section.module.css'

export const UserSection = (props) => {
  const { userImage, userName, userLocation } = props.userData

  return (
    <>
      <img
        src={userImage}
        alt={`${userName} profile`}
        className={styles.userImage}
      />
      <div className={styles.userTextContainer}>
        <p className={styles.userName}>{userName}</p>
        <p className={styles.userLocation}>{userLocation}</p>
      </div>
    </>
  )
}
