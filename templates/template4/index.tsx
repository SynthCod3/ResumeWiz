import styles from './index.module.css';
import { FaBookOpen, FaUser } from 'react-icons/fa';
import { GrTechnology } from 'react-icons/gr';
import { IoBag } from 'react-icons/io5';

const Template4 = () => {
  return (
    <div className="border w-[2480px]! h-[3508px]! bg-background">
      <div id="resume" className="min-w-[2480px] min-h-[3508px]">
        <div className={styles.Header}>
          <div className={styles.imageouter}>
            <img
              src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY="
              alt=""
            />
          </div>
          <div className={styles.Content}>
            <div className={styles.top}>
              <h1 style={{ fontSize: '2rem', fontWeight: 600 }}>
                DENICE HARRIS
              </h1>
              <p>Senior Graphic Design Specialist</p>
            </div>
            <div className={styles.social}>
              <label htmlFor="">
                <h3>PHONE</h3>
                <p>(212) 256-1414</p>
              </label>{' '}
              <label htmlFor="">
                <h3>EMAIL</h3>
                <p>deniceharris@gmail.com</p>
              </label>{' '}
              <label htmlFor="">
                <h3>WEBSITE</h3>
                <p>deniceharris.com</p>
              </label>{' '}
              <label htmlFor="">
                <h3>ADDRESS</h3>
                <p>Chicago, Illinois</p>
              </label>
            </div>
          </div>
        </div>
        <div className={styles.Container}>
          <div className={styles.LeftContainer}>
            <div>
              <FaUser />
              <h2>PROFILE</h2>
            </div>
            <p>
              Senior Graphic Design Specialist with 6+ years of experience
              managing design processes, from conceptualization to delivery.
              Skilled with Adobe Creative Suite (Illustrator, Photoshop,
              InDesign), Microsoft Office, and web design applications
              (Dreamweaver, HTML). Able to stretch the boundaries of web design
              and digital storytelling to help my client's brands stand out and
              grow.
            </p>
            <div>
              <FaBookOpen />
              <h2>EDUCATION</h2>
            </div>
            <div
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 0,
              }}
            >
              <h3>Bachelor Of Fine Arts In Graphic Design</h3>
              <p>
                Rochester Technology, New York, NY
                <br /> GPA: 3.7/4.0 <br />
                May 2015
              </p>
            </div>
            <div>
              <GrTechnology />
              <h2>SKILLS</h2>
            </div>
            <ul>
              <li>InDesign</li>
              <li>Illustrator</li>
              <li>Photoshop</li>
              <li>Figma </li>
              <li>Blender </li>
              <li>Sketchbook</li>
              <li> HTML and CSS</li>
            </ul>
          </div>
          <div className={styles.RTightContainer}>
            <div className={styles.title}>
              <IoBag />
              <h2>PROFESSIONAL EXPERIENCE</h2>
            </div>
            <div className={styles.individual}>
              <div>
                <h3>Senior Graphic Design Specialist</h3>
                <h4>Experion, New York, NY </h4>
                <h4>Sep 2019 – Present</h4>
              </div>
              <ul>
                <li>
                  Lead the design, development and implementation of graphic,
                  layout, and production communication materials while helping
                  clients cut costs by an average of 12%
                </li>
                <li>
                  Delegate tasks to a 7-member design team and provide counsel
                  on all aspects of the project
                </li>
                <li>
                  Assess all graphic materials created in-house to ensure the
                  quality and accuracy of their designs
                </li>
                <li>
                  Oversee design project budgets ranging from $2,000 – $25,000
                </li>
              </ul>
            </div>
            <div className={styles.individual}>
              <div>
                <h3>Senior Graphic Design Specialist</h3>
                <h4>Experion, New York, NY </h4>
                <h4>Sep 2019 – Present</h4>
              </div>
              <ul>
                <li>
                  Lead the design, development and implementation of graphic,
                  layout, and production communication materials while helping
                  clients cut costs by an average of 12%
                </li>
                <li>
                  Delegate tasks to a 7-member design team and provide counsel
                  on all aspects of the project
                </li>
                <li>
                  Assess all graphic materials created in-house to ensure the
                  quality and accuracy of their designs
                </li>
                <li>
                  Oversee design project budgets ranging from $2,000 – $25,000
                </li>
              </ul>
            </div>
            <div className={styles.individual}>
              <div>
                <h3>Senior Graphic Design Specialist</h3>
                <h4>Experion, New York, NY </h4>
                <h4>Sep 2019 – Present</h4>
              </div>
              <ul>
                <li>
                  Lead the design, development and implementation of graphic,
                  layout, and production communication materials while helping
                  clients cut costs by an average of 12%
                </li>
                <li>
                  Delegate tasks to a 7-member design team and provide counsel
                  on all aspects of the project
                </li>
                <li>
                  Assess all graphic materials created in-house to ensure the
                  quality and accuracy of their designs
                </li>
                <li>
                  Oversee design project budgets ranging from $2,000 – $25,000
                </li>
              </ul>
            </div>
            <img
            className={styles.sign}
              src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY="
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template4;
