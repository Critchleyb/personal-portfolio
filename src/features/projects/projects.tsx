import portfolioImage from "../../assets/images/portfolio.png";

export interface Project {
  title: string;
  image?: string;
  shortBio?: string;
  longBio?: string[];
  hostedLink?: string;
  githubLink?: string;
  category: string;
  tools: string[];
}

export const projects: Project[] = [
  {
    title: "Personsal Portfolio",
    hostedLink: "bencritchley.com",
    githubLink: "https://github.com/Critchleyb/personal-portfolio",
    image: portfolioImage,
    shortBio:
      "My Personal Portfolio, built using react with a mix of custom CSS and Semantic Ui React.",
    longBio: [
      "This website is a standalone front end built using react.",
      "For this site, i wanted to go with a simple web application type design, with most of the pages fitting into a single screens height for no scrolling, and a fixed sidebar navigation to move between the pages. The website is fully reactive and able to be viewed on all device types",
      "I am able to easily add or remove projects from the website by editing the projects array in the src > features > projects > project.tsx file.",
    ],
    category: "Personal",
    tools: [
      "React",
      "SCSS",
      "JavaScript",
      "Semantic UI React",
      "Responsive Design",
      "Local State Management",
      "HTML",
    ],
  },
  {
    title: "Personal Project 2",
    hostedLink: "testlink.com/2",
    shortBio:
      "A project to do this that and another for some reason to show shomething off",
    category: "Personal",
    tools: ["HTML", "CSS", "SASS", "JavaScript", "NodeJS"],
  },
  {
    title: "Personal Project 3",
    hostedLink: "testlink.com/3",
    shortBio:
      "A project to do this that and another for some reason to show shomething off",
    category: "Personal",
    tools: ["HTML", "CSS", "SASS"],
  },
  {
    title: "Personal Project 4",
    hostedLink: "testlink.com/4",
    shortBio:
      "A project to do this that and another for some reason to show shomething off",
    category: "Personal",
    tools: ["HTML"],
  },
  {
    title: "Course Project 1",
    hostedLink: "testlink.com/4",
    shortBio:
      "A project to do this that and another for some reason to show shomething off",
    category: "Course",
    tools: ["HTML"],
  },
  {
    title: "Course Project 2",
    hostedLink: "testlink.com/4",
    shortBio:
      "A project to do this that and another for some reason to show shomething off",
    category: "Course",
    tools: ["HTML"],
  },
  {
    title: "Course Project 3",
    hostedLink: "testlink.com/4",
    shortBio:
      "A project to do this that and another for some reason to show shomething off",
    category: "Course",
    tools: ["HTML"],
  },
  {
    title: "Course Project 4",
    hostedLink: "testlink.com/4",
    shortBio:
      "A project to do this that and another for some reason to show shomething off",
    category: "Course",
    tools: ["HTML"],
  },
  {
    title: "Course Project 5",
    hostedLink: "testlink.com/4",
    shortBio:
      "A project to do this that and another for some reason to show shomething off",
    category: "Course",
    tools: ["HTML"],
  },
  {
    title: "Course Project 6",
    hostedLink: "testlink.com/4",
    shortBio:
      "A project to do this that and another for some reason to show shomething off",
    category: "Course",
    tools: ["HTML"],
  },
];
