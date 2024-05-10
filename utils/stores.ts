import { create } from 'zustand';

type EditorState = {
  name: string;
  setName: (name: string) => void;
  skills: string[];
  setSkills: (skills: string[]) => void;
  experience: Experience[];
  setExperience: (experience: Experience[]) => void;
  education: Education[];
  setEducation: (education: Education[]) => void;
  projects: Projects[];
  setProjects: (projects: Projects[]) => void;
  description: string;
  setDescription: (description: string) => void;
  contact: Contact;
  setContact: (contact: Contact) => void;
  atsScore: number;
  setAtsScore: (atsScore: number) => void;
  suggestions: string[];
  setSuggestions: (suggestions: string[]) => void;
  feedback: string[];
  setFeedback: (feedback: string[]) => void;
  refresh: boolean
  toggleRefresh: () => void
  jobDescription: string
  setJobDescription: (jobDescription: string) => void
  image: string[]
  setImage: (image: string[]) => void
};

export const useEditorStore = create<EditorState>((set) => ({
  name: '',
  setName: (name) => set({ name }),
  skills: [],
  setSkills: (skills) => set({ skills }),
  experience: [],
  setExperience: (experience) => set({ experience }),
  education: [],
  setEducation: (education) => set({ education }),
  projects: [],
  setProjects: (projects) => set({ projects }),
  description: '',
  setDescription: (description) => set({ description }),
  contact: {
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    github: '',
    twitter: '',
    portfolio: '',
  },
  setContact: (contact) => set({ contact }),
  atsScore: 0,
  setAtsScore: (atsScore) => set({ atsScore }),
  suggestions: [],
  setSuggestions: (suggestions) => set({ suggestions }),
  refresh: false,
  toggleRefresh: () => set((state) => ({ refresh: !state.refresh })),
  jobDescription: '',
  setJobDescription: (jobDescription) => set({ jobDescription }),
  feedback: [],
  setFeedback: (feedback) => set({ feedback }),
  image: [],
  setImage: (image) => set({ image }),
}));
