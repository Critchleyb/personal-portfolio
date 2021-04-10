import portfolioImage from "../../assets/images/portfolio.png";
import infoPupImage from "../../assets/images/infoPup.png";
import omnifoodImage from "../../assets/images/omnifood.png";
import natoursImage from "../../assets/images/natours.png";
import trilloImage from "../../assets/images/trillo.png";
import nexterImage from "../../assets/images/nexter.png";
import reactivitiesImage from "../../assets/images/reactivities.png";
import recipebookImage from "../../assets/images/recipebook.png";
import codeiconImage from "../../assets/images/web-code.png";

export interface Project {
  title: string;
  image?: string;
  shortBio?: string;
  longBio?: string[];
  hostedLink?: string;
  githubLink?: string;
  courseLink?: string;
  category: string;
  tools: string[];
}

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    hostedLink: "http://bencritchley.com",
    githubLink: "https://github.com/Critchleyb/personal-portfolio",
    image: portfolioImage,
    shortBio:
      "My Personal Portfolio, built using react with a mix of custom CSS and Semantic UI React.",
    longBio: [
      "This website is a standalone front end built using react.",
      "For this site, i wanted to go with a simple web application type design, with most of the pages fitting into a single screens height for no scrolling, and a fixed sidebar navigation to move between the pages. The website is fully reactive and able to be viewed on all device types.",
      "This is my second version of my portfolio. The First was built with Vanilla HTML.",
      "I am able to easily add or remove projects from the website by editing the projects array in the src > features > projects > project.tsx file.",
    ],
    category: "Personal",
    tools: [
      "React",
      "SCSS",
      "JavaScript",
      "TypeScript",
      "Semantic UI React",
      "Responsive Design",
      "Local State Management",
      "HTML",
    ],
  },
  {
    title: "Discord Schedule Bot",
    image: infoPupImage,
    githubLink: "https://github.com/Critchleyb/InfoPup-Schedule-Bot",
    shortBio:
      "A discord bot built in Node.JS that interacts with discord, twitch and twitter API's.",
    longBio: [
      "This project is a Node.JS back-end, with a cloud hosted MongoDB Atlas database. There is no front end for this application, all commands are given to the server directly in the Discord chat application.",
      "A friend came to me with a problem, most bots on twitch use Twitch API's live webhook. This means that notifications can be sent out to users sometimes up to 5 minutes later than the actual go live time on twitch.tv. He also wanted to give his viewers an incentive to show up early to his streams.",
      "To solve this problem, i developed Info Pup. A custom bot that you can set up a schedule with and have it post notifications in Discord and Twitter. As well as this, it logs into the users channel 5 minutes before the go live time and rewards anyone that chats with a custom role on Discord.",
      "Creating this application taught me a lot about Node.JS and working with API's. In order to access users connections on Discord, they had to go through the OAuthentication flow to allow my app to access their info.",
      "The source code for this project is currently undergoing a refactor in order to make it safe to share publicly on GitHub.",
    ],
    category: "Personal",
    tools: [
      "Node.JS",
      "REST API Intergration",
      "OAuthentication",
      "MongoDB",
      "Atlas",
      "Mongoose",
      "JavaScript ES6",
      "Cron jobs",
    ],
  },
  {
    title: "Reactivities",
    hostedLink: "https://critch-reactivities.herokuapp.com/",
    githubLink: "https://github.com/Critchleyb/Udemy-DotNet5.0-React",
    courseLink:
      "https://www.udemy.com/course/complete-guide-to-building-an-app-with-net-core-and-react/",
    image: reactivitiesImage,
    shortBio:
      "A guided course on how to build an advanced React application with a .Net Back-End.",
    longBio: [
      'This application was built for the Udemy course "Complete guide to building an app with .Net Core and React".',
      "Building this application gave me a great starting point on how to build a web application using React and .Net Core 5.0. It also introduced me to using Entity Framework and an SQL Database, in this case, GraphSQL",
      "The application is a social event planner. You can create an account, then join or host events and chat about them with other participants. You can also customise your profile with profile pictures and info, and follow other users.",
      "The application has many features, including a chat feature on each event page that uses SingalR to update in real time, no need to refresh the page when a user posts a comment!",
      "The Back-end uses JWT's for authentication, and is built using Uncle Bobs Clean Architecture design principles, CQRS and MediatR.",
    ],
    category: "Course",
    tools: [
      "React",
      "Entity Framework",
      ".Net Core 5.0",
      "MobX State Management",
      "TypeScript",
      "SignalR",
      "ASP.Net Identity",
      "SQL",
      "Heroku",
    ],
  },
  {
    title: "Recipe Book",
    image: recipebookImage,
    hostedLink: "https://ng-complete-guide-55348.web.app/",
    githubLink:
      "https://github.com/Critchleyb/Udemy-Angular/tree/master/practice-app",
    courseLink: "https://www.udemy.com/course/the-complete-guide-to-angular-2/",
    shortBio:
      "A guided course on how to build an Angular Front-End Application using Firebase as a Back-End.",
    longBio: [
      'This web application was built using Angular for the Udemy Course "Angular - The Complete Guide (2020 Edition)"',
      "The application is a place to store recipes, and has a shopping list feature where you can select the recipe you want to make and it will add those ingredients to the list.",
      "I used Firebase as the back-end of this application, for hosting and database. This was my first exposure to linking a front end application to a back-end. It allowed me to begin to understand how larger applications would be structured and served as a great introduction to my first modern framework.",
    ],
    category: "Course",
    tools: [
      "Angular",
      "Firebase",
      "Authentication",
      "Redux / NgRx",
      "Cloud Deployment",
    ],
  },
  {
    title: "Omnifood",
    hostedLink: "http://bencritchley.com/omnifood/",
    githubLink: "https://github.com/Critchleyb/Udemy-HTML-CSS-1",
    courseLink:
      "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/",
    image: omnifoodImage,
    shortBio:
      "A beginners guided course on how to use HTML and CSS to create a responsive webpage.",
    longBio: [
      'This was the first course I took on web development. Udemys "Build Responsive Real World Websites with HTML5 and CSS3".',
      "This course was a great starting point for me, and introduced me to the concept of responsive design at the very first step. Since then it has been a part of every site I build.",
    ],
    category: "Course",
    tools: ["HTML", "CSS", "Responsive Design", "External Libraries"],
  },
  {
    title: "Natours",
    image: natoursImage,
    hostedLink: "http://bencritchley.com/natours/",
    githubLink:
      "https://github.com/Critchleyb/Udemy-Advanced-CSS-SASS/tree/master/Natours",
    courseLink: "https://www.udemy.com/course/advanced-css-and-sass/",
    shortBio:
      "A guided course on how to create responsive designs with HTML and SASS.",
    longBio: [
      'The second course I completed, this one introduced me to the SASS CSS preprocessor. The course was Udemys "Advanced CSS and Sass: Flexbox, Grid, Animations and More!"',
      "This course showed me the power of more modern CSS techniques such as flexbox and keyframe animations.",
    ],
    category: "Course",
    tools: [
      "SASS / SCCS",
      "Responsive Images",
      "Clip Paths",
      "Background Videos",
    ],
  },
  {
    title: "Trillo",
    image: trilloImage,
    hostedLink: "http://bencritchley.com/trillo/",
    githubLink:
      "https://github.com/Critchleyb/Udemy-Advanced-CSS-SASS/tree/master/trillo",
    courseLink: "https://www.udemy.com/course/advanced-css-and-sass/",
    shortBio:
      "An introduction to more modern CSS, and my first exposure to Flex Box.",
    longBio: [
      'This site was built as part of the Udemy course "Advanced CSS and Sass: Flexbox, Grid, Animations and More!"',
      "Building this website introduced me to the power of CSS Flexbox. Since this course, flexbox has been my prefered method of laying out pages for responsive design.",
    ],
    category: "Course",
    tools: ["Flex Box", "Custom CSS Properties", "Masks", "SVG's"],
  },
  {
    title: "Nexter",
    image: nexterImage,
    hostedLink: "http://bencritchley.com/nexter/",
    githubLink:
      "https://github.com/Critchleyb/Udemy-Advanced-CSS-SASS/tree/master/nexter",
    courseLink: "https://www.udemy.com/course/advanced-css-and-sass/",
    shortBio:
      "How to use CSS Grid and Flexbox combined to create highly responsive designs",
    longBio: [
      'This site was built as part of the Udemy course "Advanced CSS and Sass: Flexbox, Grid, Animations and More!"',
      "The main purpose of building this website was an introduction to CSS Grid. It gave me a great understanding of how this can be used to create responsive designs, and allowed me to get a head start on most CSS frameworks grid systems.",
    ],
    category: "Course",
    tools: [
      "CSS Grid",
      "Advanced Responsive Design",
      "Grid + Flexbox",
      "Image Gallery",
    ],
  },
  {
    title: "Many more small projects",
    image: codeiconImage,
    githubLink: "https://github.com/Critchleyb?tab=repositories",
    shortBio:
      "I have many more small projects I have created whilst learning that I'm unable to host",
    longBio: [
      "All throughout 2020, I have been researching and completing courses. My GitHub repos are full of lots of other small projects that have helped me gain a base level understanding of many different web technologies and languages.",
    ],
    category: "Course",
    tools: [
      "Node.JS",
      "JQuery",
      "C#",
      "Heroku",
      "CSS",
      "SQL",
      "NoSQL",
      "JavaScript",
      "HTML",
      "CSS",
      "SASS",
    ],
  },
];
