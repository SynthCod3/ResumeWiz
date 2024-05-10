import * as React from 'react';
import styles from './index.module.css';
import { useEditorStore } from '@/utils/stores';

const Template3 = () => {

  const name = useEditorStore((state) => state.name);
  const description = useEditorStore((state) => state.description);
  const contact = useEditorStore((state) => state.contact);
  const skills = useEditorStore((state) => state.skills);
  const experience = useEditorStore((state) => state.experience);
  const education = useEditorStore((state) => state.education);
  const image = useEditorStore((state) => state.image);

  return (
    <div className={styles.Wrapper} style={{ aspectRatio: '1 / 1.414' }}>
      <div id="resume" className={styles.ResumeContainer}>
        {image[0] && <div>
            <img 
                src={`data:image/jpeg;base64,${image[0]}`}
                alt="noting" />
        </div>}
        <div>
          <h1 className={styles.heading}>{name}</h1>
          <h2>Software Engineer</h2>
        </div>
        <div>
          <h2>Contact Information</h2>
          <div className="">
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>Address: {contact?.address}</p>
          </div>
        </div>
        <div>
          <h2 className="">Summary</h2>
          <p className="">{description}</p>
        </div>
        <div>
          <h2 className="">Education</h2>
            {education.map((edu) => (
          <p className="">
               <>
            <div>{edu.course}  |{edu.institution}</div>
            <div>({edu.university})|({edu.startingDate}) - ({edu.endingDate}) </div>
            <p>Score: {edu.score} </p>
            </>
          </p>)) }
         
        </div>
        <div>
          <h2 className="">Work Experience</h2>
          {experience.length > 0 ? (
            experience.map((exp) => (
              <p className="">
                <b>{exp.title}</b> - {exp.company} ({exp.startingDate}-
                {exp.endingDate})<p>{exp.description}</p>
              </p>
            ))
          ) : (
            <p className="">
              Software Engineer - Tech Innovators Inc. (2014-2016)
              <br />- Led the development of a cutting-edge e-commerce platform
              <br />- Collaborated with cross-functional teams to deliver
              high-quality software solutions
            </p>
          )}
        </div>
        <div>
          <h2 className="">Skills</h2>

          <ul className="">
            {skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template3;
