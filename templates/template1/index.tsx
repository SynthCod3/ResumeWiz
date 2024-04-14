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
    <div
      className="bg-white p-6 max-w-[21cm] mx-auto my-8 border rounded-md"
      id="resume"
    >
      {/* Set max width to 21cm for A4 size */}
      <div className="flex flex-col space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-sm">
            {contact.address} |{contact.phone}| {contact.email} |
            {contact.linkedin}
          </p>
        </div>
        <section>
          <h2 className="font-bold text-xl mb-2">CAREER SUMMARY</h2>
          <p className="text-sm">{description}</p>
        </section>
        <section>
          <h2 className="font-bold text-xl mb-2">SKILLS AND STRENGTHS</h2>
          <ul className="flex flex-row pl-5 text-sm">
            {skills.slice(0, 1).map((skill) => (
              <div>{skill}&nbsp;</div>
            ))}
            {skills.slice(1).map((skill) => (
              <div>&nbsp;|&nbsp;{skill}</div>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-bold text-xl mb-2">
            PROFESSIONAL ACCOMPLISHMENTS
          </h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {/* Professional accomplishments list */}
          </ul>
        </section>
        <section>
          <h2 className="font-bold text-xl mb-2">WORK HISTORY</h2>
          <div>
            <ul className="list-none space-y-1">{
              experience.map((exp) => (
                <li>
                  <h3 className="text-lg font-bold">{exp.title}</h3>
                  <p className="text-sm">{exp.company}</p>
                  <p className="text-sm">{exp.startingDate} - {exp.endingDate}</p>
                  <p className="text-sm">{exp.description}</p>
                </li>
              ))
            }</ul>
          </div>
        </section>
        <section>
          <h2 className="font-bold text-xl mb-2">EDUCATION</h2>
          <p className="text-sm">
           {education.map((edu) => (
            <div>{edu.course} |({edu.endingDate}) |{edu.institution}| ({edu.university})| {edu.score} </div>)) }
          </p>
        </section>
      </div>
    </div>
  );
}
