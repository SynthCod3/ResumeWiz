import './index.css';

export default function Template1() {
    return (
      <div className="bg-white p-6 max-w-[21cm] mx-auto my-8 border rounded-md">
        {/* Set max width to 21cm for A4 size */}
        <div className="flex flex-col space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Anne Y. Choi</h1>
            <p className="text-sm">
              City, State ZIP | (555) 555-5555 | annechoi@email.com | linkedin.com/in/your-name-here
            </p>
          </div>
          <section>
            <h2 className="font-bold text-xl mb-2">CAREER SUMMARY</h2>
            <p className="text-sm">
              Add a resume summary that highlights what you do, the types of companies you've worked with, and why you're
              great at your job. Typically summaries should be very short at the top level, but you can go a little longer
              if necessary for your industry. Consider including expected terms, specializations, or areas of interest.
              Ensure that your summary perfectly aligns with what is asked for in the job description.
            </p>
          </section>
          <section>
            <h2 className="font-bold text-xl mb-2">SKILLS AND STRENGTHS</h2>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {/* Skills and strengths list */}
            </ul>
          </section>
          <section>
            <h2 className="font-bold text-xl mb-2">PROFESSIONAL ACCOMPLISHMENTS</h2>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {/* Professional accomplishments list */}
            </ul>
          </section>
          <section>
            <h2 className="font-bold text-xl mb-2">WORK HISTORY</h2>
            <ul className="list-none space-y-1">
              {/* Work history list */}
            </ul>
          </section>
          <section>
            <h2 className="font-bold text-xl mb-2">EDUCATION</h2>
            <p className="text-sm">Degree, Graduation Year (YYYY), College Name, Location</p>
          </section>
        </div>
      </div>
    );
  }
  