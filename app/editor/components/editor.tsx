'use client';

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/8TyaDV0rrgh
 */
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useCallback, useEffect, useState } from 'react';
import renderTemplate from '@/templates';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useEditorStore } from '@/utils/stores';
import { Button } from '@/components/ui/button';
import { llm_inference } from '@/app/llm/services/api';
import { supabase } from '@/utils/supabase';
import { toast } from 'sonner';
import AiModal from './aiModal';
import { useDropzone } from 'react-dropzone';

export function Editor() {
  const setName = useEditorStore((state) => state.setName);
  const setDescription = useEditorStore((state) => state.setDescription);
  const setContact = useEditorStore((state) => state.setContact);
  const contact = useEditorStore((state) => state.contact);
  const setSkills = useEditorStore((state) => state.setSkills);
  const skills: string[] = useEditorStore((state) => state.skills);
  const [newSkill, setNewSkill] = React.useState('');
  const experience = useEditorStore((state) => state.experience);
  const setExperience = useEditorStore((state) => state.setExperience);
  const [newExperience, setNewExperience] = React.useState<Experience>({
    title: '',
    index: experience.length + 1,
    company: '',
    startingDate: '',
    endingDate: '',
    description: '',
  });
  const education = useEditorStore((state) => state.education);
  const setEducation = useEditorStore((state) => state.setEducation);
  const [newEducation, setNewEducation] = React.useState<Education>({
    course: '',
    index: education.length + 1,
    university: '',
    institution: '',
    score: '',
    startingDate: '',
    endingDate: '',
  });
  const [isAIModuleOpen, setIsAIModuleOpen] = React.useState(false);
  const projects = useEditorStore((state) => state.projects);
  const setProjects = useEditorStore((state) => state.setProjects);
  const [newProject, setNewProject] = React.useState<Projects>();
  const setSuggestions = useEditorStore((state) => state.setSuggestions);
  const suggestions = useEditorStore((state) => state.suggestions);
  const atsScore = useEditorStore((state) => state.atsScore);
  const setAtsScore = useEditorStore((state) => state.setAtsScore);
  const setImage = useEditorStore((state) => state.setImage);
  const image = useEditorStore((state) => state.image);
  const sign = useEditorStore((state) => state.sign);
  const setSign = useEditorStore((state) => state.setSign);

  const [template, setTemplate] = React.useState(1);
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const templateId = searchParams.get('template');
    setTemplate(templateId ? parseInt(templateId) : 1);
  }, []);

  const downloadAsImage = async () => {
    const element = document.getElementById('resume'); // Ensure your resume template has this ID
    if (element) {
      const canvas = await html2canvas(element);
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'resume.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const downloadAsPDF = async () => {
    const element = document.getElementById('resume'); // Ensure your resume template has this ID
    if (element) {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [element.offsetWidth, element.offsetHeight],
      });
      doc.html(element, {
        callback: function (doc) {
          doc.save('resume.pdf');
        },
        x: 0,
        y: 0,
        width: element.offsetWidth,
      });
    }
  };
  const name = useEditorStore((state) => state.name);
  const description = useEditorStore((state) => state.description);
  const jobDescription = useEditorStore((state) => state.jobDescription);
  const setJobDescription = useEditorStore((state) => state.setJobDescription);
  const setFeedback = useEditorStore((state) => state.setFeedback);

  const resumeDetails = {
    name: name,
    description: description,
    contact: contact,
    skills: skills,
    experience: experience,
    education: education,
    projects: projects,
  };
  const prompt = `
  You are a strict HR manager reviewing a job applicant's resume. Provide feedback on the resume and calculate an ATS score.

  Job Description:
  ${jobDescription}
  
  Resume Details:
  ${JSON.stringify(resumeDetails)}  
  
  Feedback:
  1. **Format**: Ensure the resume follows a standard format with clear sections (e.g., Contact Information, Summary/Objective, Work Experience, Education).
  2. **Content**: Evaluate the content of the resume. Ensure it includes relevant skills, experiences, achievements, and qualifications tailored to the job position.
  3. **Grammar and Spelling**: Check for any grammatical errors or spelling mistakes and suggest corrections.
  4. **Keywords**: Ensure the resume contains relevant keywords related to the job position to pass through ATS systems.
  5. **Overall Impression**: Provide an overall impression of the resume and any additional suggestions for improvement.

  Suggestions:
  1. Provide specific suggestions for improvement.
  2. Provide changes that can be made to improve the resume.
  
  ATS Score Calculation:
  - Assess the resume based on its compatibility with Applicant Tracking Systems (ATS). Assign a score out of 100 based on factors such as formatting, keywords, and overall suitability for ATS screening.
  - Try to keep the ATS score as low as possible.
  
  Output Format (JSON):
  {
    "suggestions": ["Provide specific changes for improvement."],
    "ATS_score": 30,
    "feedback": ["Provide specific feedback for improvement."]
  }
  `;

  const fetchData = async () => {
    try {
      const feedbackString = await llm_inference(prompt);

      // Extract JSON data from the feedbackString
      const startIndex = feedbackString.indexOf('{'); // Find the index of the first '{'
      const endIndex = feedbackString.lastIndexOf('}'); // Find the index of the last '}'
      const jsonData = feedbackString.substring(startIndex, endIndex + 1); // Extract the JSON data

      // Parse the JSON data into an object
      const feedbacks = JSON.parse(jsonData);

      // Extract suggestions and ATS score
      const { suggestions, ATS_score, feedback } = feedbacks;

      // Now you can use the suggestions and ATS_score variables as needed
      setIsAIModuleOpen(true);
      console.log('Suggestions:', suggestions);
      console.log('ATS Score:', ATS_score);
      console.log('Feedback:', feedback);
      setAtsScore(ATS_score);
      setSuggestions(suggestions);
      setFeedback(feedback);
    } catch (error) {
      console.error('Error fetching resume feedback:', error);
    }
  };

  const handleSave = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    let { data: users, error: Check } = await supabase
      .from('users')
      .select('*')
      .eq('id', user?.id);
    if (users?.length === 0) {
      const { data: insert, error } = await supabase
        .from('users')
        .insert([
          { name: name, id: user?.id, data: resumeDetails, email: user?.email },
        ])
        .select();
      if (error) {
        throw error;
      } else if (insert) {
        toast.success('Resume saved successfully!');
        return insert;
      }
    } else if (users && users?.length > 0) {
      const { data, error } = await supabase
        .from('users')
        .update({ data: { ...resumeDetails, image, sign } })
        .eq('id', user?.id)
        .select();
      if (error) {
        toast.error(error.message);
        throw error;
      } else if (data) {
        toast.success('Resume saved successfully!');
        return data;
      }
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          const base64String = reader.result
            .toString()
            .replace('data:', '')
            .replace(/^.+,/, '');
          setImage([base64String]);
        }
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // Function to remove an image from the list
  const removeImage = (index: number) => {
    setImage(image.filter((_, i) => i !== index));
  };
  
  const onDrop2 = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          const base64String = reader.result
            .toString()
            .replace('data:', '')
            .replace(/^.+,/, '');
          setSign([base64String]);
        }
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const {
    getRootProps: getRootProps2,
    getInputProps: getInputProps2,
    isDragActive: isDragActive2,
  } = useDropzone({ onDrop: onDrop2 });

  // Function to remove an image from the list
  const removeSign = (index: number) => {
    setSign(sign.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full max-w-90 px-4 mx-auto lg:grid lg:gap-4 lg:px-6 lg:grid-cols-2 mt-20">
      <div className="border lg:border-0 lg:rounded lg:overflow-hidden">
        <div className="p-4 space-y-4 lg:p-10">
          <div className="space-y-2">
            <Label htmlFor="job">Job Description (optional)</Label>
            <Textarea
              id="job"
              placeholder="Enter the job description"
              value={jobDescription}
              onChange={(e) => {
                setJobDescription(e.target.value);
              }}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Address</Label>
            <Input
              id="address"
              placeholder="Enter your address"
              value={contact.address}
              onChange={(e) => {
                setContact({ ...contact, address: e.target.value });
              }}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Email</Label>
            <Input
              id="email"
              value={contact.email}
              placeholder="Enter your email"
              onChange={(e) => {
                setContact({ ...contact, email: e.target.value });
              }}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Phone</Label>
            <Input
              id="phone"
              value={contact.phone}
              placeholder="Enter your phone"
              onChange={(e) => {
                setContact({ ...contact, phone: e.target.value });
              }}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">LinkedIn</Label>
            <Input
              id="linkedin"
              value={contact.linkedin}
              placeholder="Enter your linkedin"
              onChange={(e) => {
                setContact({ ...contact, linkedin: e.target.value });
              }}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="summary">Summary</Label>
            <Textarea
              className="min-h-[100px]"
              id="summary"
              placeholder="Enter your summary"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="border-t">
          <div className="p-4 space-y-4 lg:p-10">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="education">Education</Label>
                <Input
                  className="min-h-[50px]"
                  placeholder="Enter your course"
                  onChange={(e) => {
                    setNewEducation({
                      ...newEducation,
                      course: e.target.value,
                    });
                  }}
                  value={newEducation.course}
                />
                <Input
                  className="min-h-[50px]"
                  placeholder="Enter your university"
                  onChange={(e) => {
                    setNewEducation({
                      ...newEducation,
                      university: e.target.value,
                    });
                  }}
                  value={newEducation.university}
                />
                <Input
                  className="min-h-[50px]"
                  placeholder="Enter your institution"
                  onChange={(e) => {
                    setNewEducation({
                      ...newEducation,
                      institution: e.target.value,
                    });
                  }}
                  value={newEducation.institution}
                />
                <Input
                  className="min-h-[50px]"
                  placeholder="Enter your score"
                  onChange={(e) => {
                    setNewEducation({
                      ...newEducation,
                      score: e.target.value,
                    });
                  }}
                  value={newEducation.score}
                />
                <Input
                  className="min-h-[50px]"
                  placeholder="Enter your starting year"
                  onChange={(e) => {
                    setNewEducation({
                      ...newEducation,
                      startingDate: e.target.value,
                    });
                  }}
                  value={newEducation.startingDate}
                />
                <Input
                  className="min-h-[50px]"
                  placeholder="Enter your ending year"
                  onChange={(e) => {
                    setNewEducation({
                      ...newEducation,
                      endingDate: e.target.value,
                    });
                  }}
                  value={newEducation.endingDate}
                />
                <Button
                  onClick={() => {
                    if (!newEducation.course) return;
                    setEducation([...education, newEducation]);
                    setNewEducation({
                      course: '',
                      index: education.length + 1,
                      university: '',
                      institution: '',
                      score: '',
                      startingDate: '',
                      endingDate: '',
                    });
                  }}
                >
                  Add Education
                </Button>
                <div>
                  {education.map((edu) => (
                    <div
                      className="inline-block mr-2"
                      key={edu.index}
                      onClick={() => {
                        setEducation(
                          education.filter(
                            (e: Education) => e.index !== edu.index,
                          ),
                        );
                      }}
                    >
                      {edu.course}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Work Experience</Label>
                <div>
                  <Input
                    placeholder="Enter title"
                    onChange={(e) => {
                      setNewExperience({
                        ...newExperience,
                        title: e.target.value,
                      });
                    }}
                    value={newExperience.title}
                  />
                  <Input
                    placeholder="Enter Company"
                    onChange={(e) => {
                      setNewExperience({
                        ...newExperience,
                        company: e.target.value,
                      });
                    }}
                    value={newExperience.company}
                  />
                  <Input
                    placeholder="Enter starting date"
                    onChange={(e) => {
                      setNewExperience({
                        ...newExperience,
                        startingDate: e.target.value,
                      });
                    }}
                    value={newExperience.startingDate}
                  />
                  <Input
                    placeholder="Enter ending date"
                    onChange={(e) => {
                      setNewExperience({
                        ...newExperience,
                        endingDate: e.target.value,
                      });
                    }}
                    value={newExperience.endingDate}
                  />
                  <Textarea
                    className="min-h-[100px]"
                    id="experience"
                    placeholder="Enter your experience"
                    onChange={(e) => {
                      setNewExperience({
                        ...newExperience,
                        description: e.target.value,
                      });
                    }}
                    value={newExperience.description}
                  />
                  <Button
                    onClick={() => {
                      if (!newExperience.title) return;
                      setExperience([...experience, newExperience]);
                      setNewExperience({
                        title: '',
                        company: '',
                        startingDate: '',
                        endingDate: '',
                        description: '',
                        index: newExperience.index + 1,
                      });
                    }}
                  >
                    Add Experience
                  </Button>
                </div>
                <div>
                  {experience.map((exp) => (
                    <div
                      className="inline-block mr-2"
                      key={exp.index}
                      onClick={() => {
                        setExperience(
                          experience.filter(
                            (e: Experience) => e.index !== exp.index,
                          ),
                        );
                      }}
                    >
                      {exp.title}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="skills">Skills</Label>
                <Input
                  id="skills"
                  placeholder="Enter a skill"
                  onChange={(e) => {
                    setNewSkill(e.target.value);
                  }}
                  value={newSkill}
                />
                <Button
                  onClick={() => {
                    if (!newSkill) return;
                    setSkills([...skills, newSkill]);
                    setNewSkill('');
                  }}
                >
                  Add Skill
                </Button>
                <div>
                  {skills.map((skill) => (
                    <div
                      className="inline-block mr-2"
                      key={skill}
                      onClick={() =>
                        setSkills(skills.filter((s) => s !== skill))
                      }
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p>Drop the files here ...</p>
                  ) : (
                    <div className="space-y-2 flex flex-col">
                      <div>
                        {image && image.length > 0 && image[0] && <div>
                          <img
                          className="w-24 h-24 object-cover rounded"
                            src={`data:image/jpeg;base64,${image[0]}`}
                            alt="Uploaded"
                          />
                          <div onClick={() => removeImage(0)}>×</div>
                        </div>}
                      </div>
                      <Label htmlFor="skills">Profile Picture</Label>
                      <Button>Upload a photo</Button>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div {...getRootProps2()}>
                  <input {...getInputProps2()} />
                  {isDragActive2 ? (
                    <p>Drop the files here ...</p>
                  ) : (
                    <div className="space-y-2 flex flex-col">
                      <div>
                        {sign &&sign.length > 0 && sign[0] && <div>
                          <img
                          className="w-24 h-24 object-cover rounded"
                            src={`data:image/jpeg;base64,${sign[0]}`}
                            alt="Uploaded"
                          />
                          <div onClick={() => removeSign(0)}>×</div>
                        </div>}
                      </div>
                      <Label htmlFor="skills">Digital Signature</Label>
                      <Button>Upload a signature</Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row">
          <Select
            onValueChange={(value) => {
              if (value === 'png') downloadAsImage();
              if (value === 'pdf') downloadAsPDF();
            }}
          >
            <Label>Download as :&nbsp;&nbsp;</Label>
            <SelectTrigger
              className="w-[180px] mb-3"
              style={{
                outline: 'none',
                /* Optional: Add custom styles for focus state to maintain accessibility */
                boxShadow: '0 0 0 1px rgba(0, 123, 255, 0.1)', // Example custom focus style
              }}
            >
              <SelectValue placeholder="Download" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Format</SelectLabel>
                <SelectItem value="png">PNG</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="px-2">
            <Button
              onClick={() => {
                fetchData();
              }}
            >
              ATS & Resume Feedback
            </Button>
          </div>
          <AiModal
            title="AI Suggestions and ATS Checker"
            onClose={() => {
              setIsAIModuleOpen(false);
            }}
            onDone={() => {
              setIsAIModuleOpen(false);
            }}
            isOpen={isAIModuleOpen}
          />
          <div className="px-2">
            <Button
              onClick={() => {
                handleSave();
              }}
            >
              Save
            </Button>
          </div>
        </div>
        {renderTemplate(template)}
      </div>
    </div>
  );
}
