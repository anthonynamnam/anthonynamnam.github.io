/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Anthony Kwok",
  logo_name: "anthony.k()",
  nickname: "Anthony / Orange",
  full_name: "Anthony Kwok",
  subTitle: "Data Scientist & Analyst. Data Enthusiast 🔥. Non-stop learning.",
  resumeLink:
    "https://drive.google.com/file/d/1Ty0-51DZ72PE30kfJ2p1jjw9SHYCnDAi/view?usp=sharing",
  mail: "mailto:kwokanthony073@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/anthonynamnam",
  linkedin: "https://www.linkedin.com/in/anthonykwok073",
  gmail: "kwokanthony073@gmail.com",
  medium: "https://kwokanthony.medium.com/",
  kaggle: "https://www.kaggle.com/anthonynam",
};

const skills = {
  data: [
    {
      title: "ML/AI Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Performing statistical analysis & regression analysis from massive data",
        "⚡ Developing machine learning & deep learning models for business applications",
        "⚡ Providing data-driven business analysis",
        "⚡ Creating dynamic and interactive data visualization",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python", // icon for software skills
          style: {
            color: "#4B8BBE", // color for software skills
          },
        },
        
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: {
            color: "#165CAA",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            // backgroundColor: "#FFFFFF",
            color: "#F29111",
          },
        },
        
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#0DB7ED",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            color: "#FF6F00",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#FFBA01",
          },
        },
        {
          skillName: "Tabelau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            color: "#FFBC79",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Platform & CI/CD",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience working with version control tools",
        "⚡ Experience with Continuous Integration/ Continuous Delivery",
      ],
      softwareSkills: [
        {
          skillName: "Google Cloud Platform",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#176BEF",
          },
        },
        {
          skillName: "Amazon Web Service",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Microsoft Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#007FFF",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#0DB7ED",
          },
        },
        {
          skillName: "Apache Airflow",
          fontAwesomeClassname: "simple-icons:apacheairflow",
          style: {
            color: "#0DB14B",
          },
        },
        {
          skillName: "DBT",
          fontAwesomeClassname: "simple-icons:dbt",
          style: {
            color: "#F15A29",
          },
        },
        // {
        //   skillName: "Heroku",
        //   fontAwesomeClassname: "simple-icons:heroku",
        //   style: {
        //     color: "#027DFF",
        //   },
        // },
      ],
    },
  ],
};

const ongoingDegrees = {
  degrees: [
    {
      title: "BrainStation",
      subtitle: "Diploma in Data Science",
      logo_path: "bs-logo.png",
      alt_name: "BrainStation",
      duration: "2023 Sep - Present",
      descriptions: [
        "⚡ I'm currently pursuing my postgraduate diploma in Data Science at BrainStation.",
        "⚡ Content: Advanced SQL, Tableau, Python, R, Git, Machine & Deep Learning, Big Data Solution",
        "⚡ Capstone Project:  Under Development",
      ],
      website_link: "https://brainstation.io/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Hong Kong University of Science and Technology",
      subtitle: "Bachelor of Science in Data Science and Technology",
      logo_path: "UST.png",
      alt_name: "HKUST",
      duration: "2018 Sep - 2022 Jun",
      descriptions: [
        "⚡ Received University Scholarship for Outstanding Academic Activities", 
        "⚡ Obtained A Grade in Calculus, Applied Statistics, Regression Analysis & Capstone Project", 
        "⚡ Capstone Project:  Personalised Algo-Trading with Machine Learing/Deep Learning Models",
        "⚡ Machine Learning: Linear & Logistic Regression, Boosting & Treess, Clustering, Principal Component Analysis and Time-Series Forecast",
        "⚡ Deep Learning: Convolution Neural Network, Recurrent Neural Network, Natural Language Processing, Long Short Term Memory, Transformer",
        
      ],
      website_link: "https://hkust.edu.hk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Solution Challenge 2020",
      subtitle: "Top 10 Team out of 800 Teams - PiCare(HKUST)",
      logo_path: "solutionchallenge.png",
      certificate_link:
        "https://drive.google.com/file/d/1DBgqM6-_F41e9WaknFYv8jjQhw-bpNRl/view?usp=sharing",
      alt_name: "Google Solution Challenge",
      color_code: "#0EFF76"
    },

    {
      title: "Microsoft Office Specialist World Championship 2015",
      subtitle: "3rd Runner-up in Excel",
      logo_path: "moswc.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/16FIHQnDEtnvyBaY6aDn86W0pqnmtGoY8/view?usp=sharing",
      alt_name: "Microsoft Office Specialist World Championship",
      color_code: "#E7FF0E",
    },

    {
      title: "HKDAS Hackathon 2022",
      subtitle: "Top 20 Team out of 400 Teams - TCoins",
      logo_path: "hkdas.png",
      // certificate_link:
      //   "https://drive.google.com",
      alt_name: "HKDAS Hackathon 2022",
      color_code: "#0EFF76"
    },

    {
      title: "HKUST Robotic Team Autonomus Racing Car Competition 2018",
      subtitle: "5th place out of 12 Teams - Pentagonal Dodecahedron",
      logo_path: "smart-car.jpeg",
      // certificate_link:
      //   "https://drive.google.com",
      alt_name: "Blockchain",
      color_code: "#E7FF0E"
    },
    // {
    //   title: "A300: Atlas Security",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#F6B808",
    //   color_code: "#47A048",
    // },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've mostly done projects on my own and I am actively looking for new position. I love sharing my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Data Scientist (Full-time)",
          company: "Kering",
          company_url: "https://www.kering.com/en/",
          logo_path: "kering.jpeg",
          duration: "Jul 2022 - Jul 2023",
          location: "Hong Kong",
          description: "To be added...",
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Data Science Intern (Part-time)",
          company: "Kering",
          company_url: "https://www.kering.com/en/",
          logo_path: "kering.jpeg",
          duration: "Mar 2022 - Jun 2022",
          location: "Hong Kong",
          description: "To be added...",
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Data Analyst & Administrative Assistant (Part-time)",
          company: "Hong Kong Jockey Club",
          company_url: "http://www.hkjc.com",
          logo_path: "HKJC_logo.png",
          duration: "Sep 2020 - Dec 2021",
          location: "Hong Kong",
          description: "To be added...",
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#fcf803",
        },
        {
          title: "Summer Intern (Full-time)",
          company: "Hong Kong Jockey Club",
          company_url: "http://www.hkjc.com",
          logo_path: "HKJC_logo.png",
          duration: "Jun 2020 - Aug 2020",
          location: "Hong Kong",
          description: "To be added...",
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#fcf803",
        },
        {
          title: "Co-Founder",
          company: "PiCare",
          company_url: "",
          logo_path: "picare.jpg",
          duration: "Nov 2019 - Aug 2020",
          location: "Hong Kong",
          description: "To be added...",
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#03fc17",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Communication Team Leader",
          company: "Burnaby Business Improvament Association",
          company_url: "https://nrbia.ca/",
          logo_path: "bia.png",
          duration: "Sep 2023 - Sep 2023",
          location: "Lougheed Town",
          description:
            "To be added...",
          color: "#FBBD18",
        },
        {
          title: "International Service Director",
          company: "HKUST Rotaract Club",
          company_url: "https://crosswoc.ieeedtu.in/",
          logo_path: "rotaract.png",
          duration: "Jan 2019 - Jan 2020",
          location: "Hong Kong",
          description:
            "To be added...",
          color: "#4285F4",
        },
        // {
        //   title: "Campus Hustler",
        //   company: "Skillenza",
        //   company_url: "https://skillenza.com/",
        //   logo_path: "skillenza.png",
        //   duration: "Feb 2021 - Present",
        //   location: "Work from Home",
        //   description:
        //     "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
        //   color: "#196acf",
        // },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "harikrushn.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Keep Calm and Carry On",
      url: "https://github.com/harikanani/Keep-Calm-and-Carry-On.github.io",
      description:
        "This platform enables users to practice Augmented Reality meditation, play stress burster games, track task completion and engage in motivational exercises to cope with stress and anxiety at work.  ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Augmented Reality",
          iconifyClass: "bi:badge-ar",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Keep-Calm-and-Carry-On.github.io",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/keep-calm-and-carry-on",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
        {
          name: "Live Demo",
          url:
            "https://akshitagupta15june.github.io/Keep-Calm-and-Carry-On.github.io/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "1",
      name: "YOG4LIFE SOCIAL APP",
      url: "https://github.com/kevalvavaliya/Yog4Life",
      description:
        "An app for helping people their healthy life. Yog4Life Has a feed feature which is help to get information from the folks, Yog4Life has an anonymous chat room to get connected with the world.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/kevalvavaliya/Yog4Life",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devfolio",
          url: "https://devfolio.co/projects/yoglife-b20d",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "2",
      name: "Adoptisity",
      url: "https://github.com/kevalvavaliya/Adoptisity",
      description:
        "Our mission is to spread awareness about the benefits of adoption and to support LGBT families so that everyone has the chance to have a loving home environment.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Wix",
          iconifyClass: "bxl:wix",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Adoptisity",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/adoptisity",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
        {
          name: "Live Demo",
          url: "https://rajmahadevwala1.wixsite.com/adoptisity",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "3",
      name: "FinSplit",
      url: "https://github.com/rajmahadev8/Fin-Split",
      description:
        "Split your bills with your friends without any hassle. Manage Group Expenses, Track your expenses, and much more.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/rajmahadev8/Fin-Split",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/finsplit",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "4",
      name: "Emosic",
      url: "https://github.com/kevalvavaliya/Emosic",
      description:
        "An app that plays music according to your mood. Created a playlist management UI and used SpotifyAPI to control player client based on mood detection using ml model.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/kevalvavaliya/Emosic",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/emosic",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "5",
      name: "Fileblok",
      url: "https://github.com/harikanani/Fileblok",
      description:
        "Keep your projects moving with seamless transfer experice. FileBlok is a file transfer app that allows you to transfer files from one device to another without any hassle. We built this app using Flutter, Node.js and StoryBlok.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Storyblok",
          iconifyClass: "logos-storyblok-icon",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Fileblok",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/fileblok",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "6",
      name: "BAUDDIK-GEEKS PORTFOLIO",
      url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
      description:
        "Awesome Community Portfolio website for Bauddhik-Geeks community",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://bauddhikgeeks.co/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "7",
      name: "Votechain",
      url: "https://github.com/abhigoyani/votechain",
      description:
        "Awesome Community Portfolio website for Bauddhik-Geeks community",
      languages: [
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb-icon",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/abhigoyani/votechain",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "8",
      name: "Swag Store",
      url: "https://github.com/harikanani/e-commerce-frontend",
      description:
        "An E-commerce website built using MERN[Mongo, Express, React, Node] stack and we have also added stripe payment gateway integration [in test mode].",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "MedusaJS",
          iconifyClass: "logos-medusa-icon",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/e-commerce-frontend",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "9",
      name: "node-blockchain",
      url: "https://github.com/harikanani/node-blockchain",
      description:
        "A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "TypeScript",
          iconifyClass: "skill-icons:typescript",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/node-blockchain",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "10",
      name: "Know Me Well",
      url: "https://github.com/harikanani/personal-portfolio",
      description:
        "A simple command line interface based quiz app to know more about me :).",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Repl.it",
          iconifyClass: "logos-replit-icon",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/personal-portfolio",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "11",
      name: "Bloggify",
      url: "https://github.com/harikanani/Bloggify",
      description: "A Simple REST API for Blog Application.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Bloggify",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "12",
      name: "Stargazzers",
      url: "https://github.com/harikanani/stargazers",
      description: "An Unofficial API for GitHub Repo Stars Count",
      languages: [
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/stargazers",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "13",
      name: "GitHub Theme Portfolio",
      url: "https://github.com/harikanani/harikanani.github.io",
      description:
        "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "SCSS",
          iconifyClass: "vscode-icons:file-type-scss2",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/harikanani.github.io",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://harikanani.github.io/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    // {
    //   id: "6",
    //   name: "Automate Attendace",
    //   url: "https://github.com/harikanani/Node_Python",
    //   description: "Automation of Online Attendance using node js and python",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "7",
    //   name: "Automate Discord Bot",
    //   url: "https://github.com/harikanani/AutomateDiscordBot",
    //   description:
    //     "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Python Selenium",
    //       iconifyClass: "logos-selenium",
    //     },
    //     {
    //       name: "Chromium Browser",
    //       iconifyClass: "openmoji-chromium",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "8",
    //   name: "Flask Blog",
    //   url: "https://github.com/harikanani/flask_blog",
    //   description: "A Simple Blog Web Application made using Flask Framework",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Flask",
    //       iconifyClass: "cib-flask",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "9",
    //   name: "Netflix top series",
    //   url: "https://github.com/harikanani/netflix-top-series",
    //   description: "List of Top Netflix Series which is deployed to vercel.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    {
      id: "10",
      name: "COVID-19 Tracker",
      url: "https://github.com/harikanani/Covid19TrackerReact",
      description:
        "Simple Covid-19 Tracker made using React and deployed to Vercel.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Covid19TrackerReact",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    // {
    //   id: "11",
    //   name: "Food Order Static Website",
    //   url: "https://github.com/harikanani/food-order-website",
    //   description:
    //     "A simple static website related to food restaurants service. this is reasponsive as well.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "PHP",
    //       iconifyClass: "logos-php",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "12",
    //   name: "NFT Launchpad",
    //   url: "https://deliquescent-cents.000webhostapp.com/",
    //   description: "NFT Launchpad crypto site portfolio",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/nft-launchpad",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  ongoingDegrees,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
