import styles from './index.module.css'
import image from '../../assets/profile.png'
import Button from '../../components/Button'

const Home = () => {
  return (
    <div>
        <div className={styles.homeWrapper}>
          <div className={styles.homeContent}>
            <span>ENHANCE YOUR CAREER PROSPECTS.</span>
            <span>Improve your career opportunities by securing your desired position </span>
            <span>with visually appealing resume</span>
            <span>Create awesome resumes with one of our template in just few seconds.</span>
            <Button name="Create your own Resume"/>
          </div>
          <div className={styles.homeImage}>
            <img src={image} alt="No image available" />
          </div>
        </div>
      </div>
  )
}

export default Home