import styles from  './index.module.css'
import image from '../../assets/signup.jpg'
import Navbar from '../../components/Navbar'

const SignIn = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.signInWrapper}>
      <div className={styles.signInImage}>
          <img src={image} alt="No image"/>
      </div>
    </div>
    </>
  )
}

export default SignIn