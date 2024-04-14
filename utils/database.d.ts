interface Experience {
  title: string;
  company: string;
  startingDate: string;
  endingDate: string;
  description: string;
}

interface Education {
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
