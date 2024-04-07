import * as React from 'react';


const TestTemplate = () => {
  
  return (
    <>
      
      <div
        className="flex p-10 bg-white lg:overflow-hidden scale-50 md:scale-100 border-foreground"
        style={{ aspectRatio: '1 / 1.414' }}
        id="resume"
      >
        <div className="grid max-w-sm gap-4 lg:max-w-md">
          <div className="grid gap-1.5">
            <div className="text-3xl font-bold">Jane Doe</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Software Engineer
            </div>
          </div>
          <div className="grid gap-1.5">
            <h2 className="text-lg font-semibold">Contact Information</h2>
            <div className="grid gap-0.5">
              <div>Email: janedoe@example.com</div>
              <div>Phone: +1 (123) 456-7890</div>
              <div>Address: 123 Street, City, Country</div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Summary</h2>
            <p className="text-sm">
              Creative and detail-oriented software engineer with a passion for
              developing innovative web applications. Experienced in full-stack
              development and dedicated to writing clean and efficient code.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Education</h2>
            <p className="text-sm">
              B.S. in Computer Science - University of Excellence (2010-2014)
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Work Experience</h2>
            <p className="text-sm">
              Software Engineer - Tech Innovators Inc. (2014-2016)
              <br />- Led the development of a cutting-edge e-commerce platform
              <br />- Collaborated with cross-functional teams to deliver
              high-quality software solutions
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Skills</h2>
            <ul className="text-sm list-disc list-inside">
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>HTML/CSS</li>
              <li>Agile Methodology</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestTemplate;
