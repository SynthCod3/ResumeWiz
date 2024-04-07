import styles from './index.module.css';

export default function Template1() {
  return (
   <div className=" p-10 bg-white lg:overflow-hidden scale-50 md:scale-100 border" style={{ aspectRatio: '1 / 1.414' }}>
  {/* Your content goes here */}

      <div className=" p-4 space-y-6" id="resume">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Anne Y. Choi</h1>
          <p className="text-xs">
            City, State ZIP | (555) 555-5555 | annechoi@email.com |
            linkedin.com/in/your-name-here
          </p>
        </div>
        <section>
          <h2 className="font-bold text-base mb-2">CAREER SUMMARY</h2>
          <p className="text-xs">
            Add a resume summary that highlights what you do, the types of
            companies you've worked with, and why you're great at your job.
            Typically summaries should be very short at the top level, but you
            can go a little longer if necessary for your industry. Consider
            including expected terms, specializations, or areas of interest.
            Ensure that your summary perfectly aligns with what is asked for in
            the job description.
          </p>
        </section>
        <section>
          <h2 className="font-bold text-base mb-2">SKILLS AND STRENGTHS</h2>
          <ul className="list-disc pl-3 text-xs space-y-1">
            <li>
              <strong>Skill 1:</strong>
              List your most relevant hard skills, soft skills, and experience
              for this job.
            </li>
            <li>
              <strong>Skill 2:</strong>
              Mention the skill (then briefly describe it).
            </li>
            <li>
              <strong>Skill 3:</strong>
              Refer to example (basic skill).
            </li>
            <li>
              <strong>Self-starter:</strong>
              Explain your self-starter expertise with x+ years of experience
              and a perfect match for position name (detailed skill).
            </li>
            <li>
              <strong>Skills:</strong>
              Another example (skill category).
            </li>
          </ul>
        </section>
        <section>
          <h2 className="font-bold text-base mb-2">
            PROFESSIONAL ACCOMPLISHMENTS
          </h2>
          <ul className="list-disc pl-3 text-xs space-y-1">
            <li>
              <strong>Accomplishment 1:</strong>
              Action verb (the result of an accomplishment) resulting in
              (quantifiable outcomes).
            </li>
            <li>
              <strong>Accomplishment 2:</strong>
              Action verb (the result of an accomplishment) resulting in
              (quantifiable outcomes).
            </li>
            <li>
              <strong>Accomplishment 3:</strong>
              Action verb (the result of an accomplishment) resulting in
              (quantifiable outcomes).
            </li>
            <li>
              <strong>Accomplishment 4:</strong>
              Action verb (the result of an accomplishment) resulting in
              (quantifiable outcomes).
            </li>
          </ul>
        </section>
        <section>
          <h2 className="font-bold text-base mb-2">WORK HISTORY</h2>
          <ul className="list-none space-y-1 text-xs">
            <li>
              <strong>Company A:</strong>
              Location, Job Title, (MM/YYYY) - Present
            </li>
          </ul>
        </section>
        <section>
          <h2 className="font-bold text-base mb-2">EDUCATION</h2>
          <p className="text-xs">
            Degree, Graduation Year (YYYY), College Name, Location
          </p>
        </section>
      </div>
    </div>
  );
}
