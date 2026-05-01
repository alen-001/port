export interface WorkExperience {
  company: string;
  role: string;
  dates: string;
  description: string;
  bullets: string[];
  stack: string[];
  photo?: string;
  photoAlt?: string;
}

export interface Project {
  name: string;
  date: string;
  description: string;
  stack: string[];
  link?: string;
}

export interface BlogPost {
  title: string;
  date: string;
  href: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  aspect: "portrait" | "landscape" | "square";
}
