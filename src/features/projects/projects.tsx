export interface Project {
  title: string;
  image?: string;
  link?: string;
  category: string;
  description: string;
  tools: string[];
}

export const projects: Project[] = [
  {
    title: "Peronsal Project 1",
    link: "testlink.com/1",
    category: "Personal",
    description: "Test Project 1",
    tools: ["HTML", "CSS", "SASS", "JavaScript", "NodeJS", "React", "MongoDB"],
  },
  {
    title: "Personal Project 2",
    link: "testlink.com/2",
    category: "Personal",
    description: "Test Project 2",
    tools: ["HTML", "CSS", "SASS", "JavaScript", "NodeJS"],
  },
  {
    title: "Personal Project 3",
    link: "testlink.com/3",
    category: "Personal",
    description: "Test Project 3",
    tools: ["HTML", "CSS", "SASS"],
  },
  {
    title: "Personal Project 4",
    link: "testlink.com/4",
    category: "Personal",
    description: "Test Project 4",
    tools: ["HTML"],
  },
  {
    title: "Course Project 1",
    link: "testlink.com/4",
    category: "Course",
    description: "Test Project 4",
    tools: ["HTML"],
  },
  {
    title: "Course Project 2",
    link: "testlink.com/4",
    category: "Course",
    description: "Test Project 4",
    tools: ["HTML"],
  },
  {
    title: "Course Project 3",
    link: "testlink.com/4",
    category: "Course",
    description: "Test Project 4",
    tools: ["HTML"],
  },
  {
    title: "Course Project 4",
    link: "testlink.com/4",
    category: "Course",
    description: "Test Project 4",
    tools: ["HTML"],
  },
  {
    title: "Course Project 5",
    link: "testlink.com/4",
    category: "Course",
    description: "Test Project 4",
    tools: ["HTML"],
  },
  {
    title: "Course Project 6",
    link: "testlink.com/4",
    category: "Course",
    description: "Test Project 4",
    tools: ["HTML"],
  },
];
