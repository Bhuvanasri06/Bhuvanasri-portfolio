export interface PersonalInfo {
  name: string;
  shortName: string;
  brandName: string;
  role: string;
  subheading: string;
  description: string;
  email: string;
  phone: string;
  phoneRaw: string;
  linkedin: string;
  github: string;
  location: string;
  availability: string;
  degree: string;
  institution: string;
  cgpa: string;
  resumePath: string;
}

export interface AboutPillar {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface AboutStat {
  label: string;
  value: string;
  suffix?: string;
}

export interface AboutMeData {
  title: string;
  content: string;
  pillars: AboutPillar[];
  stats: AboutStat[];
}

export interface SkillItem {
  name: string;
  level: string;
  badge: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  badge: string;
  accentColor: string;
  responsibilities: string[];
  techStack: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  duration: string;
  category: string;
  badge: string;
  description: string;
  technologies: string[];
  highlights: string[];
  architecture?: string;
  githubUrl: string;
  illustrationType: 'chat-network' | 'security-shield' | 'molecule-dna' | 'vision-scan';
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  status: string;
  highlights: string[];
}

export interface AcademicAchievement {
  title: string;
  event: string;
  date: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  category: string;
  icon: string;
  color: string;
}

export interface SoftSkillItem {
  name: string;
  desc: string;
  icon: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  level: string;
  badge: string;
}
