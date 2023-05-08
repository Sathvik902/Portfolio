// import { Link } from "react-router-dom";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    triant,
    Solar,
    LDM,
    CZ,
    Deep,
    TSM,
    TW,
    CB,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Machine learning Enthusiast",
      icon: mobile,
    },
    {
      title: "Deep learning Enthusiast",
      icon: backend,
    },
    {
      title: "Problem Solver",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "Started Learning ML and DL",
      company_name: "",
      icon: Deep,
      iconBg: "black",
      date: "December 2022 - Present",
      points: [
        
        " Built Various ML models.",
        " Implimented Deep learning Network in my projects.",
        " Used Natural Language Processing to develop an application which can recognize the human language.",
        " Also, used Flutter, Transformers and HuggingFace API to Build End to End Text Summarizer.",
        " Never ending learning..."
      ],
    },
    {
      title: "React.js Intern",
      company_name: "Triant",
      icon: triant,
      iconBg: "black",
      date: "July 2022 - September 2022",
      points: [
        "Worked on rebuilding the company website using React.js",
        "Learnt about cross-browser web compatibility.",
        "Improved the website's performence from 7ms to 0.1ms!",
        "Got an appreciation for the same."

      ],
    },
    {
      title: "Full stack Developer Intern",
      company_name: "Solar Secure Solutions",
      icon: Solar,
      iconBg: "white",
      date: "June 2022 - August 2022",
      points: [
        
        " Worked on various Web applications based on MERN stack.",
        " Developed back-end using Node.js and Express.js for two ongoing websites.",
        " Integrated Mongo DB for the same.",
        " Implimented 'ETL' technique as well.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Language-detection-Model",
      description:
        "This is a language detection model with detects the language of the text provided.",
      tags: [
        {
          name: "NLP",
          color: "blue-text-gradient",
        },
        {
          name: "sk-learn",
          color:  "green-text-gradient",
        },
        {
          name: "streamlit",
          color: "blue-text-gradient",
        },
      ],
      image: LDM,
      source_code_link: "https://github.com/Sathvik902/Language-detection-Model",
    },
    {
      name: "Text Summarizer Model",
      description:
        "Text summarizer using huggingface and Transformers. This application uses Natural Language Processing to summarize the given page of text to Cool readable paragraph.",
      tags: [
        {
          name: "HuggingFace",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "Python3",
          color: "pink-text-gradient",
        },
      ],
      image: TSM,
      source_code_link: "https://github.com/Sathvik902/Text-Summarizer-Model",
    },
    {
      name: "ChatZonee",
      description:
        "This is a chat app used to communicate in groups. This uses some of the functionalities of Socket.io and broadcasts within the local network.",
      tags: [
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Socket.io",
          color: "green-text-gradient",
        },
        {
          name: "Express.js",
          color: "pink-text-gradient",
        },
      ],
      image: CZ,
      source_code_link: "https://github.com/Sathvik902/ChatZonee",
    },
    {
      name: "Triant Website",
      description:
        "This was the Internship task to rebuild the existing website using React.js to improve the performance.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Express.js",
          color: "green-text-gradient",
        },
        {
          name: "Email.js",
          color: "pink-text-gradient",
        },
      ],
      image: TW,
      source_code_link: "https://github.com/Sathvik902/Triant-website",
    },
    {
      name: "ChatBot",
      description:
        "This is a chatBot application built on python. It replies to the client to the required quiery.It uses RegEx in python.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "XML",
          color: "green-text-gradient",
        },
      ],
      image: CB,
      source_code_link: "https://github.com/Sathvik902/Chatbot.aiml",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  