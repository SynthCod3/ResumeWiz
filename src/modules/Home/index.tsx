import styles from './index.module.css'
import image from '../../assets/profile.png'
import Navbar from '../../components/Navbar'
import template2 from '../../assets/Template 1.png'
import template1 from '../../assets/Template 2.png'
import template3 from '../../assets/Template 3.png'
import Footer from '../../components/footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
        <div className={styles.homeWrapper}>
          <div className={styles.homeContent}>
            <span>ENHANCE YOUR CAREER PROSPECTS.</span>
            <span>Improve your career opportunities by securing your desired position </span>
            <span>with visually appealing resume</span>
            <span>Create awesome resumes with one of our template in just few seconds.</span>
            <button>Create your own Resume</button> 
          </div>
          <div className={styles.homeImage}>
            <img src={image} alt="No image available" />
          </div>
        </div>
        <div className={styles.templateContainer}>
            <div className={styles.templateHeader}><span>Start by selecting a </span><span>resume template design</span></div>
            <div className={styles.templateContentWrapper}>
                <div className={styles.templateContent}>
                  <img src={template2} alt="Template 1" />
                </div>
                <div className={styles.templateContent}>
                 <img src={template1} alt="Template 2" />
                </div>
                <div className={styles.templateContent}>
                  <img src={template3} alt="Template 3" />
                </div>
                
            </div>
        </div>
        <Footer />
      </div>
  )
}

export default Home