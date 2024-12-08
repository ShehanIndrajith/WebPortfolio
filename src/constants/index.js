import project1 from "../assets/projects/Library.png";
import project2 from "../assets/projects/gymManagement.png";
import project3 from "../assets/projects/restaurant.png";
import project4 from "../assets/projects/smartwatering.png";

import python from "../assets/certifications/pythonIntro.jpeg";
import dsa from "../assets/certifications/dsa.png";
import postman from "../assets/certifications/postman-certification.png"

export const HERO_CONTENT = `I am a dedicated full stack developer with a strong foundation in building efficient and innovative software solutions. With hands-on experience in front-end technologies like HTML, CSS, and JavaScript, as well as back-end technologies such as Java, Spring Boot, and ASP.NET Core, I have developed a range of projects including smart IoT systems, web applications, and desktop applications. My passion for deep learning, data science, and robotics drives me to continuously explore new technologies and apply my skills to create impactful and user-centric solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATION = [
  {
    year: "2023 - Present",
    Course: "Higher Diploma in Software Engineering",
    institute: "National Institute of Business Management",
  },
  {
    year: "2022 - 2023",
    Course: "Diploma in Software Engineering",
    institute: "National Institute of Business Management",
    
  },
  {
    year: "2019 Jan - 2019 May",
    Course: "Diploma in IT",
    institute: "ESOFT Metro Campus",
    
  },
  {
    year: "2019 Jan - 2019 May",
    Course: "Diploma in English",
    institute: "ESOFT Metro Campus",
    
  },
];

export const PROJECTS = [
  {
    title: "Library Management System",
    image: project1,
    description:
      "Developed a robust Library Management System using React and PostgreSQL, featuring efficient book tracking, user management, and seamless CRUD operations with a user-friendly interface.",
    technologies: ["React.js", "Express.js", "Node.js" ,"PostgreSQL"],
    github: "https://github.com/ShehanIndrajith/React_LibraryManagementSystem.git",
  },
  {
    title: "Gym Membership Management System ",
    image: project2,
    description:
      "The Gym Membership Management system, built with ASP.NET Core MVC and SQL Server, enables CRUD operations for efficient member registration and membership plan management. ",
    technologies: ["C#", "ASP.NET core", "SQL"],
    github: "https://github.com/ShehanIndrajith/GymManagementSystem.git",
  },
  {
    title: "Restaurant Food Ordering System",
    image: project3,
    description:
      "This restaurant management system allows customers to view the menu and place orders, while the admin can add, delete, and update food items. Additionally, the admin can access the order history.",
    technologies: ["C#", "Windows Form", "SQL"],
    github: "https://github.com/ShehanIndrajith/Restaurant_Food_Odering_System.git",
  },
  {
    title: "Smart Plant Watering System",
    image: project4,
    description:
      "Developed a smart agriculture irrigation system using IoT technology to automate soil moisture monitoring and regulation, enabling real-time data access and remote control for improved plant health and efficiency. ",
    technologies: ["Arduino", "Firebase", "Soil Moisture Sensors", "NodeMCU module"],
    github: "https://github.com/ShehanIndrajith/PlantWateringSystem.git",
  },
];

export const CERTIFICATES = [
  {
    title: "Introduction to Python",
    image: python,
    institute: "by Sololearn",
    date:"24/09/2023",
  },
  {
    title: "Basics of Data Structures and Algorithms",
    image: dsa,
    institute: "by Simplilearn",
    date: "14/07/2024",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    image: postman,
    institute: "by Postman",
    date: "19/05/2024",
  }
];
