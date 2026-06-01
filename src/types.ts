export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  metrics: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  role: string;
  tags: string[];
  achievements: string[];
  liveUrl?: string;
  iconName: string; // lucide icon name
  github?: string;
  codeSnippet: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // percentage or indicator
    meta?: string; // e.g., "120 FPS", "Native Bridged"
  }[];
}

export interface ConsoleLog {
  id: string;
  timestamp: string;
  type: 'info' | 'success' | 'warn' | 'error' | 'flutter';
  message: string;
}
