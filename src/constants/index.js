import project1 from "../assets/projects/Library.png";
import project2 from "../assets/projects/gymManagement.png";
import project3 from "../assets/projects/restaurant.png";
import project4 from "../assets/projects/smartwatering.png";
import Company1 from "../assets/Companies/Navitsa.jpg";
import { GraduationCapIcon, BookOpenIcon, CodeIcon, Languages } from "lucide-react";

import python from "../assets/certifications/pythonIntro.jpeg";
import dsa from "../assets/certifications/dsa.png";
import postman from "../assets/certifications/postman-certification.png"

import DesCloudComputing from "../assets/Badges/describe-cloud-compute.svg";

export const HERO_CONTENT = `I am a dedicated full stack developer with a strong foundation in building efficient and innovative software solutions. With hands-on experience in front-end technologies like HTML, CSS, and JavaScript, as well as back-end technologies such as Java, Spring Boot, and ASP.NET Core, I have developed a range of projects including smart IoT systems, web applications, and desktop applications. My passion for deep learning, data science, and robotics drives me to continuously explore new technologies and apply my skills to create impactful and user-centric solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATION = [
  {
    duration: "2023 - 2024",
    degree: "Higher Diploma in Software Engineering",
    institution: "National Institute of Business Management",
    icon: GraduationCapIcon,
      color: "from-blue-500 to-cyan-400",
  },
  {
    duration: "2022 - 2023",
    degree: "Diploma in Software Engineering",
    institution: "National Institute of Business Management",
    icon: BookOpenIcon,
    color: "from-purple-500 to-pink-400",
  },
  {
    duration: "2019 Jan - 2019 May",
    degree: "Diploma in IT",
    institution: "ESOFT Metro Campus",
    icon: CodeIcon,
    color: "from-amber-500 to-orange-400",
    
  },
  {
    duration: "2019 Jan - 2019 May",
    degree: "Diploma in English",
    institution: "ESOFT Metro Campus",
    icon: Languages,
    color: "from-green-600 to-lime-500",
  },
];

export const EXPERIENCE = [
  {
    year: "2025 March - 2025 Sep",
    Job: ".NET Developer Intern",
    type: "Hybrid",
    Company: "Navitsa Technologies Pvt Ltd",
    details: "Worked on enterprise ERP modules using C#, ASP.NET MVC/Core, Entity Framework, and LINQ. Gained hands-on experience in database design, REST APIs, report generation (RDLC/Excel), and front-end integration with JavaScript, jQuery, and DevExpress components.",
    logo: Company1
  }
];

export const BADGES = [
  {
    name: "Describe cloud computing",
    link: "https://learn.microsoft.com/api/achievements/share/en-us/ShehanIndrajith-9613/9R83VB9U?sharingId=F5CDDBAA0F9CDD",
    image : DesCloudComputing,
    CompletedOn : "10/12/2025",
    BadeFrom : "Microsoft Learn"
  }
];

export const PROJECTS = [
  {
    title: "Library Management System",
    image: project1,
    description:
      "Developed a robust Library Management System using React and PostgreSQL, featuring efficient book tracking, user management, and seamless CRUD operations with a user-friendly interface.",
    technologies: ["React.js", "Express.js", "Node.js" ,"PostgreSQL"],
    github: "https://github.com/ShehanIndrajith/React_LibraryManagementSystem.git",
    color: 'from-blue-500 to-indigo-600'
  },
  {
    title: "Gym Membership Management System ",
    image: project2,
    description:
      "The Gym Membership Management system, built with ASP.NET Core MVC and SQL Server, enables CRUD operations for efficient member registration and membership plan management. ",
    technologies: ["C#", "ASP.NET core", "SQL"],
    github: "https://github.com/ShehanIndrajith/GymManagementSystem.git",
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: "Restaurant Food Ordering System",
    image: project3,
    description:
      "This restaurant management system allows customers to view the menu and place orders, while the admin can add, delete, and update food items. Additionally, the admin can access the order history.",
    technologies: ["C#", "Windows Form", "SQL"],
    github: "https://github.com/ShehanIndrajith/Restaurant_Food_Odering_System.git",
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: "Smart Plant Watering System",
    image: project4,
    description:
      "Developed a smart agriculture irrigation system using IoT technology to automate soil moisture monitoring and regulation, enabling real-time data access and remote control for improved plant health and efficiency. ",
    technologies: ["Arduino", "Firebase", "Soil Moisture Sensors", "NodeMCU module"],
    github: "https://github.com/ShehanIndrajith/PlantWateringSystem.git",
    color: 'from-red-500 to-orange-500'
  },
];

export const CERTIFICATES = [
  {
  title: "Introduction to Python",
  image: python,
  link: "https://media.licdn.com/dms/image/v2/D5622AQG5i_ogZ0XqhA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1695565670688?e=1763596800&v=beta&t=WIMQuIxzM-x8xXve3PV3Vr5iIBu2QsI5nMJDzErZ7LQ",
  institute: "by Sololearn",
  date: "24/09/2023",
  skills: ["Python", "Programming Fundamentals", "Problem Solving", "Syntax & Data Types"]
},
{
  title: "Basics of Data Structures and Algorithms",
  image: dsa,
  link: "https://certificates.simplicdn.net/share/thumb_6927798_1720942147.png",
  institute: "by Simplilearn",
  date: "14/07/2024",
  skills: ["Data Structures", "Algorithms", "Time Complexity", "Optimization"]
},
{
  title: "Postman API Fundamentals Student Expert",
  image: postman,
  link: "https://media.licdn.com/dms/image/v2/D562DAQFmRQimXbJr2g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1716263216792?e=1761033600&v=beta&t=Ls2Ro58waa21WBA-5v2YlIGbht_FusII_M5Ng7_zrbE",
  institute: "by Postman",
  date: "19/05/2024",
  skills: ["API Testing", "RESTful APIs", "Postman Collections", "Automation"]
},
{
    title: "Describe cloud computing",
    link: "https://learn.microsoft.com/api/achievements/share/en-us/ShehanIndrajith-9613/9R83VB9U?sharingId=F5CDDBAA0F9CDD",
    image : DesCloudComputing,
    date : "10/12/2025",
    institute : "Microsoft Learn",
    skills: ["Cloud Concepts","shared responsibility model", "Cloud Models"]
  }

];
