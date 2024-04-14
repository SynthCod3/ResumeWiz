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
    email: 'afojnvjnd@gmail.com',
    phone: '9899898988',
    address: 'City, State ZIP',
    linkedin: 'linkedin.com/in/your-name-here',
    github: 'github.com/your-name-here',
    twitter: 'twitter.com/your-name-here',
    portfolio: 'portfolio.com/your-name-here',
  },
  setContact: (contact) => set({ contact }),
}))