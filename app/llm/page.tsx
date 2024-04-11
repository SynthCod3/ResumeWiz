'use client'

import React, { useState, useEffect } from 'react';
import { llm_inference } from './services/api';

const Llm = () => {
  const [resumeFeedback, setResumeFeedback] = useState<any>();
  const resumeDetails = `
You are a strict HR manager reviewing a job applicant's resume. Provide feedback on the resume and calculate an ATS score.

Resume Details:
{
  "name": Jenin Joseph,
  "job": full stack developer
}

Feedback:
1. **Format**: Ensure the resume follows a standard format with clear sections (e.g., Contact Information, Summary/Objective, Work Experience, Education).
2. **Content**: Evaluate the content of the resume. Ensure it includes relevant skills, experiences, achievements, and qualifications tailored to the job position.
3. **Grammar and Spelling**: Check for any grammatical errors or spelling mistakes and suggest corrections.
4. **Keywords**: Ensure the resume contains relevant keywords related to the job position to pass through ATS systems.
5. **Overall Impression**: Provide an overall impression of the resume and any additional suggestions for improvement.

ATS Score Calculation:
- Assess the resume based on its compatibility with Applicant Tracking Systems (ATS). Assign a score out of 100 based on factors such as formatting, keywords, and overall suitability for ATS screening.

Output Format (JSON):
{
  "suggestions": ["Provide specific suggestions for improvement."],
  "ATS_score": 75
}
`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const feedback = await llm_inference(resumeDetails);
        setResumeFeedback(feedback);
      } catch (error) {
        console.error('Error fetching resume feedback:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once, similar to componentDidMount

  return (
    <div>
      <h1>Resume Feedback</h1>
        <div>
          <h2>Suggestions:</h2>
          <ul>
            {resumeFeedback?.suggestions.map((suggestion: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
          {/* <p>ATS Score: {resumeFeedback.ATS_score}</p> */}
          <p>{JSON.stringify(resumeFeedback)}</p>
        </div>
    </div>
  );
};

export default Llm;
