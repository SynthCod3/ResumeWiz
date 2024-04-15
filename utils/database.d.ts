interface Experience {
  index: number;
  title: string;
  company: string;
  startingDate: string;
  endingDate: string;
  description: string;
}

interface Education {
  index: number;
  course: string;
  institution: string;
  university: string;
  startingDate: string;
  endingDate: string;
  score: string;
}

interface Projects {
  title: string;
  stack: string[];
  timeFrame: string;
  description: string;
}

interface Contact {
  email: string;
  phone?: string;
  address?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  portfolio?: string;
}

interface ProfileData {
  name: string;
  data: {
    skills: string[];
    experience: Experience[];
    education: Education[];
    projects: Projects[];
    description: string;
    contact: Contact;
  };
  email: string;
  created_at: string;
}
