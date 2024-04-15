import { useEditorStore } from '@/utils/stores';
import styles from './index.module.css';

export default function Template1() {
  const name = useEditorStore((state) => state.name);
  const description = useEditorStore((state) => state.description);
  const contact = useEditorStore((state) => state.contact);
  const skills = useEditorStore((state) => state.skills);
  const experience = useEditorStore((state) => state.experience);
  const education = useEditorStore((state) => state.education);
  return (
    <div className={styles.Wrapper} style={{ aspectRatio: '1 / 1.414' }}>
    <div
      className="bg-white p-6 max-w-[21cm] mx-auto my-8 border rounded-md"
      id="resume"
    >
      {/* Set max width to 21cm for A4 size */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700' }}>{name}</h1>
          <p style={{ fontSize: '1.rem' }}>
            {contact?.address} | {contact?.phone} |  {contact?.email} |
            {contact?.linkedin}
          </p>
        </div>
        <hr />
        <section>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>CAREER SUMMARY</h2>
          <p style={{ fontSize: '1.125rem' }}>{description}</p>
        </section>

        <hr />

        <section>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>SKILLS AND STRENGTHS</h2>
          <div style={{ paddingLeft: '1.25rem', fontSize: '1.125rem' }} className='flex flex-row flex-wrap'>
            {skills.slice(0, 1).map((skill) => (
              <div>{skill}&nbsp;</div>
            ))}
            {skills.slice(1).map((skill) => (
              <div>|&nbsp;{skill}&nbsp;</div>
            ))}
          </div>
        </section>
        <section>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            PROFESSIONAL ACCOMPLISHMENTS
          </h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', fontSize: '0.875rem', marginTop: '0', marginBottom: '1rem' }}>
            {/* Professional accomplishments list */}
          </ul>
        </section>
        <section>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>WORK HISTORY</h2>
          <div>
            <ul style={{ listStyleType: 'none', marginTop: '0', marginBottom: '0', paddingInlineStart: '0' }}>{
              experience.map((exp) => (
                <li>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '700' }}>{exp.title}</h3>
                  <p style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>{exp.company}</p>
                  <p style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>{exp.startingDate} - {exp.endingDate}</p>
                  <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{exp.description}</p>
                </li>
              ))
            }</ul>
          </div>
        </section>
        <section>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>EDUCATION</h2>
          <div style={{ fontSize: '1.125rem' }}>
           {education.map((edu) => (
            <>
            <div>{edu.course}  |{edu.institution}| ({edu.university})|({edu.startingDate}) - ({edu.endingDate}) </div>
            <p>{edu.score} </p>
            </>
            )) }
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}
