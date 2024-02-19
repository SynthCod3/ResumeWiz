import styles from './index.module.css'
const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbarHeading}>ResumeWiz</div>
      <div className={styles.navbarLinks}>
        <ul>
          <li>Home</li>
          <li>Template</li>
          <li>About</li>
        </ul>
      </div>
      <div className={styles.navbarButton}>
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar