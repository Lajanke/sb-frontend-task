import styles from './styles'

const UserSection = (props) => {
  const { userImage, userName, userLocation } = props.userData

  return (
    <>
      <img
        src={userImage}
        alt={`${userName} profile image`}
        style={styles.userImage}
      />
      <div style={styles.userTextContainer}>
        <p style={styles.userName}>{userName}</p>
        <p style={styles.userLocation}>{userLocation}</p>
      </div>
    </>
  )
}

export default UserSection
