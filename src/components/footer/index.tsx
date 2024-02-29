import { RiTwitterXFill } from 'react-icons/ri'
import styles from './index.module.css'
import { SlSocialLinkedin } from 'react-icons/sl'
import { SiGithub } from 'react-icons/si'


const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
        <div className={styles.footerHeading}>
            <div className={styles.footerName}>ResumeWiz</div>
            <div className={styles.footerRights}>
                <span>© ResumeWiz 2024</span>
                <span>Privacy Policy</span>
                <span>Terms of Use</span>
            </div>
        </div>
        <div className={styles.footerContent}>
            <div className={styles.footerLinks}>
                <div className={styles.footerAbout}>
                    <span>Our Story</span>
                    <span>FAQ</span>
                    <span>Contact</span>
                </div>
                <div className={styles.footerAbout}>
                    <span>Services</span>
                    <span>Build Resume</span>
                    <span>Templates</span>
                </div>
                <div className={styles.footerAbout}>
                    <span>About</span>
                    <span>Developers</span>
                    <span>Team</span>
                </div>
            </div>
            <div className={styles.footerConnection}>
                <span><SlSocialLinkedin /></span>
                <span><SiGithub /></span>
                <span><RiTwitterXFill /></span>
            </div>
        </div>
    </div>
  )
}

export default Footer