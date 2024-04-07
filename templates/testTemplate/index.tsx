import * as React from 'react';
import styles from './index.module.css';

const TestTemplate = () => {
  return (
    <div className={styles.Wrapper} style={{ aspectRatio: '1 / 1.414' }}>
      <div className="" id="resume">
        <div className="">
          <h1>Jane Doe</h1>
          <h2>Software Engineer</h2>
        </div>
        <div className="">
          <h2 className="">Contact Information</h2>
          <div className="">
            <p>Email: janedoe@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Street, City, Country</p>
          </div>
        </div>
        <div>
          <h2 className="">Summary</h2>
          <p className="">
            Creative and detail-oriented software engineer with a passion for
            developing innovative web applications. Experienced in full-stack
            development and dedicated to writing clean and efficient code.
          </p>
        </div>
        <div>
          <h2 className="">Education</h2>
          <p className="">
            B.S. in Computer Science - University of Excellence (2010-2014)
          </p>
        </div>
        <div>
          <h2 className="">Work Experience</h2>
          <p className="">
            Software Engineer - Tech Innovators Inc. (2014-2016)
            <br />- Led the development of a cutting-edge e-commerce platform
            <br />- Collaborated with cross-functional teams to deliver
            high-quality software solutions
          </p>
        </div>
        <div>
          <h2 className="">Skills</h2>
          <ul className="">
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>HTML/CSS</li>
            <li>Agile Methodology</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TestTemplate;
