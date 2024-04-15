import * as React from 'react';
import styles from './index.module.css';
import { useEditorStore } from '@/utils/stores';

const TestTemplate = () => {

  const name = useEditorStore((state) => state.name);
  const description = useEditorStore((state) => state.description);
  const contact = useEditorStore((state) => state.contact);
  const skills = useEditorStore((state) => state.skills);
  const experience = useEditorStore((state) => state.experience);
  const education = useEditorStore((state) => state.education);

  return (
    <div className={styles.Wrapper} style={{ aspectRatio: '1 / 1.414' }}>
      <div className="" id="resume">
        <div className="">
          <h1>{name}</h1>
          <h2></h2>
        </div>
        <div className="">
          <h2 className="">Contact Information</h2>
          <div className="">
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>Address: {contact.address}</p>
          </div>
        </div>
        <div>
          <h2 className="">Summary</h2>
          <p className="">
            {description}
          </p>
        </div>
        <div>
          <h2 className="">Education</h2>
            {education.map((edu) => (
          <p className="">
               <>
            <div>{edu.course}  |{edu.institution}| ({edu.university})|({edu.startingDate}) - ({edu.endingDate}) </div>
            <p>Score: {edu.score} </p>
            </>
          </p>)) }
         
        </div>
        <div>
          <h2 className="">Work Experience</h2>
            {experience.map((exp) => (
          <p className="">
              <div>{exp.company} | ({exp.endingDate}) | {exp.title} | {exp.description} </div>
          </p>
            ))}
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

export default TestTemplate;
