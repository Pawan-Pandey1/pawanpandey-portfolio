// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import maven from  './assets/tech_logo/Maven.jpg';
import restApi from  './assets/tech_logo/RestApi.jpg';
import sql from './assets/tech_logo/sql.jpg';
import intellij from './assets/tech_logo/intellij.png';

// // Experience Section Logo's
import jpmorgan from './assets/company_logo/JpMorgan.png';
import sync from './assets/company_logo/Sync.jpg';
import oasis from './assets/company_logo/Oasis.jpg';

// Education Section Logo's
import CU from './assets/education_logo/cu.jpg';
import RGPS from './assets/education_logo/RoyalGondwana.jpg';
import SOS from './assets/education_logo/sos.jpg';

// // Project Section Logo's
import contactHub from './assets/work_logo/SCM.jpg';
// import csprepLogo from './assets/work_logo/cs_prep.png';
// import movierecLogo from './assets/work_logo/movie_rec.png';
// import taskremLogo from './assets/work_logo/task_rem.png';
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'REST API', logo: restApi },
      { name: 'Maven', logo: maven },
      { name: 'SQL', logo: sql },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'IntelliJ IDEA', logo: intellij },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: jpmorgan,
      role: "Software Engineering Job Simulation",
      company: "JPMorgan Chase & Co.",
      date: "May 2025",
      desc: "The role involved working with a robust tech stack, including Java, Maven, Spring, Kafka, SQL, and REST APIs. My responsibilities encompassed setting up the development environment, integrating necessary dependencies, configuring a database connection, and implementing Kafka for messaging. Additionally, I incorporated external REST APIs to enhance functionality.",
      skills: [
        "Java",
        "Spring",
        "Kafka",
        "REST API",
        "SQL",
      ],
    },
    {
      id: 1,
      img: oasis,
      role: "Java Intern",
      company: "Oasis Infobyte",
      date: "May 2023",
      desc: " I worked on several practical projects using Java and Core Java, focusing on solving everyday problems through effective programming.  I utilized Core Java concepts like object-oriented programming, file handling, and data structures to ensure efficient and robust functionality.",
      skills: [
        "Java",
        "Java Core",
        "Java Swing",
      ],
    },
    {
      id: 2,
      img: sync,
      role: "Python Intern",
      company: "SYNC interns",
      date: "June 2023",
      desc: "I developed multiple projects using Python, focusing on creating efficient solutions for everyday scenarios. These projects utilized key Python libraries such as pandas for data manipulation, Tkinter for creating user-friendly graphical interfaces, and matplotlib for visualizing data.",
      skills: [
        "Pthton",
        "Tkinter",
        "Pandas",
        "Matplotlib",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: CU,
      school: "Chandigarh University, Mohali, Punjab",
      date: "Aug 2021 - July 2025",
      grade: "8.44 CGPA",
      desc: "I have completed my Bachelor's degree (B.E. in Computer Science and Engineering) from Chandigarh University. During my time at Chandigarh University, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Chandigarh University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Engineering (Computer Science)",
    },
    {
      id: 1,
      img: RGPS,
      school: "Royal Gondwana Public School, Nagpur, Maharastra",
      date: "Sept 2019 - Aug 2020",
      grade: "77.4%",
      desc: "I completed my class 12 education from Royal Gondwana Public School, Nagpur, Maharashtra, under the CBSE board, where I studied Physics, Chemistry, Mathematics, English and Physical Education .",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 2,
      img: SOS,
      school: "School of Scholars, Nagpur, Maharashtra",
      date: "Aug 2017 - March 2018",
      grade: "79.8%",
      desc: "I completed my class 10 education from School of Scholars, Nagpur, Maharashtra, under the CBSE board, where I studied Science, Mathematics, English , Sanskrit and Social Science .",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "ContactHub | Smart contact manager",
      description:
        "Developed a web-based Smart Contact Manager with secure authentication, user registration, and CRUD functionality, featuring a responsive frontend built with Thymeleaf, Tailwind CSS, and JavaScript. Integrated MySQL for efficient contact management.",
      image: contactHub,
      tags: ["HTML", "Tailwind CSS", "JavaScript", "Spring Boot", "Thymeleaf", "Spring Security"],
      github: "https://github.com/Pawan-Pandey1/Contact-Hub",
      webapp: "https://github.com/Pawan-Pandey1/Contact-Hub",
    },
    {
      id: 1,
      title: "Hospital Management System",
      description:
        "Built an API-based Hospital Management System for managing medical records and billing operations using Spring Boot and Hibernate. Ensured efficient database interactions with Spring Data JPA and MySQL.",
      image: contactHub,
      tags: ["Java", "Spring Boot", "MySql"],
      github: "https://github.com/Pawan-Pandey1/HospitalManagementSystem",
      webapp: "https://github.com/Pawan-Pandey1/HospitalManagementSystem",
    },
    {
      id: 2,
      title: "Tours and travel website",
      description:
        "Implemented an interactive tour itinerary using HTML, CSS, and JS. Used HTML for structuring the content, CSS for styling, and JavaScript to make the itinerary interactive and PHP for backend.",
      image: contactHub,
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      github: "https://github.com/Pawan-Pandey1/Tours-And-Travel-Website/tree/master/Tour-Project-main",
      webapp: "https://github.com/Pawan-Pandey1/Tours-And-Travel-Website/tree/master/Tour-Project-main",
    },
    {
      id: 3,
      title: "Virtual voice assistant",
      description:
        "Developed a Python-based virtual assistant with voice recognition and text-to-speech capabilities to perform tasks like playing YouTube videos, fetching information from Wikipedia, telling jokes, and managing web navigation.",
      image: contactHub,
      tags: ["Python", "speech_recognition", "pyttsx3"],
      github: "https://github.com/Pawan-Pandey1/Virtual-Voice-Assistant",
      webapp: "https://github.com/Pawan-Pandey1/Virtual-Voice-Assistant",
    },
    // {
    //   id: 4,
    //   title: "Task Reminder Chrome Extension Tool",
    //   description:
    //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    //   image: taskremLogo,
    //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
    //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    // },
    // {
    //   id: 5,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  