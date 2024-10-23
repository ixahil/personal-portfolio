export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  logo: "SahilDev.pro",
  developer: "Sahil Shaikh",
  name: "Sahil Dev - Personal Portfolio",
  keywords: [
    "fullstack developement",
    "react",
    "javascript",
    "typescript",
    "nodejs",
  ],
  description:
    "I am a full-stack developer with expertise in Node.js. I have experience in building scalable, secure, and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
  navItems: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Work Experience",
      href: "#workexperience",
    },
    {
      label: "Education",
      href: "#education",
    },
    {
      label: "Certifications",
      href: "#certifications",
    },
    {
      label: "Blogs",
      href: "#blogs",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Work Experience",
      href: "#workexperience",
    },
    {
      label: "Education",
      href: "#education",
    },
    {
      label: "Certifications",
      href: "#certifications",
    },
    {
      label: "Blogs",
      href: "#blogs",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  email: "sahilshaiikh@hotmail.com",
  links: {
    email: "mailto:sahilshaiikh@hotmail.com",
    github: "https://github.com/ixahil",
    linkedin: "https://www.linkedin.com/in/imxahil/",
    medium: "https://medium.com/@sahildev.pro",
  },
};

export const data = {
  education: [
    {
      id: "1",
      institution: "VIEATU - GTU",
      degree: "Bachelor of Technology - CSE",
      description: "",
      startDate: "Jul 2023",
      endDate: "Jul 2026",
      skills: [
        "CSE",
        "Programming",
        "Computer Science",
        "Computer Engineering",
      ],
    },
    {
      id: "2",
      institution: "BMU",
      degree: "Diploma in CSE",
      description: "",
      startDate: "Jul 2020",
      endDate: "Jul 2023",
      skills: [
        "CSE",
        "Programming",
        "Computer Science",
        "Computer Engineering",
      ],
    },
  ],
  certifications: [
    {
      id: "1",
      institution: "Coursera",
      degree: "TypeScript in React",
      description: "",
      startDate: "",
      completedDate: "2023",
      skills: ["React", "Typescript"],
    },
    {
      id: "2",
      institution: "Infosys Springboard",
      degree: "Build a MERN Application using Next.js",
      description: "",
      startDate: "",
      completedDate: "Sep 2023",
      skills: ["React", "Next.js", "Node.js", "MongoDB", "Express", "Redux"],
    },
    {
      id: "3",
      institution: "Infosys Springboard",
      degree: "Build a Website using React",
      description: "",
      startDate: "",
      completedDate: "Jul 2023",
      skills: ["React", "Redux"],
    },
    {
      id: "4",
      institution: "Coursera",
      degree: "Understanding Basic SQL Syntax",
      description: "",
      startDate: "",
      completedDate: "Jun 2023",
      skills: ["SQL", "SQLITE"],
    },
    {
      id: "5",
      institution: "Coursera",
      degree: "Java Programming Fundamentals",
      description: "",
      startDate: "",
      completedDate: "Dec 2022",
      skills: ["Java"],
    },
    {
      id: "6",
      institution: "Sheetal Academy",
      degree: "Corporate Communication English",
      description: "",
      startDate: "",
      completedDate: "Nov 2020",
      skills: ["Corporate English"],
    },
  ],
  workExperience: [
    {
      id: "1",
      company: "Canadian Fishing Suppliers",
      companyWebsite: "#",
      role: "Shopify Developer (Project Basis/Hourly) [Remote]",
      startDate: "May 2024",
      endDate: "Present",
      technologies: ["Socket.io", "Node.js", "Express", "React"],
      keyResponsibilities: [
        "Custom theme development and BigCommerce to Shopify migrations.",
        "Enhanced the functionality and user experience for e-commerce platforms.",
      ],
    },
    {
      id: "2",
      company: "American Network Suppliers",
      companyWebsite: "#",
      role: "Data Scraper/Store Manager [Remote]",
      startDate: "May 2023",
      endDate: "May 2024",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      keyResponsibilities: [
        "Managed inventory and automated data scraping processes for BigCommerce stores.",
        "Enhanced the store’s operational efficiency by streamlining data handling.",
      ],
    },
    {
      id: "3",
      company: "Diesel Laptops (Full-time)",
      companyWebsite: "#",
      role: "Virtual Assistant (Auditor) [Remote]",
      startDate: "2019",
      endDate: "2021",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      keyResponsibilities: [
        "Managed data, conducted audits, and maintained PDF manuals for inventory systems.",
        "Developed scripts to automate data processing, improving task efficiency.",
      ],
    },
    {
      id: "4",
      company: "Freelancing (Full-time)",
      companyWebsite: "#",
      role: "Freelancing Admin Field [Remote]",
      startDate: "2017",
      endDate: "2019",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      keyResponsibilities: ["Completed Multiple Projects"],
    },
    {
      id: "5",
      company: "Parcelled.in",
      companyWebsite: "#",
      role: "Hub Operations Executive [On Site]",
      startDate: "2016",
      endDate: "2017",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      keyResponsibilities: [
        "To manage and implement smooth warehouse operations incoming and outgoing systems through computerized administration and retrieval systems (ERP system).",
      ],
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "Jane Smith",
      avatar: "/assets/testimonial_1_avatar.jpg",
      title: "Project Manager",
      company: "Tech Solutions Inc.",
      feedback:
        "Sahil is a fantastic developer who consistently delivers high-quality work. His ability to solve complex problems is impressive.",
    },
    {
      id: "2",
      name: "Mike Johnson",
      avatar: "/assets/testimonial_2_avatar.jpg",
      title: "CEO",
      company: "Web Innovators LLC",
      feedback:
        "Sahil is a highly skilled developer who brings a lot of value to our projects. His expertise in full stack development is top-notch.",
    },
  ],
  blogs: [
    {
      title: "Scraping Data from REST APIs...",
      description:
        "Unlock the full potential of API scraping using Postman with this expert guide. Learn how to efficiently extract data from REST APIs and optimize your workflow.",
      isPublished: true,
      url: "https://medium.com/@sahildev.pro/scraping-data-from-rest-apis-using-postman-and-node-js-32fa6a25703a",
      slug: "welcome_to_logsfolio",
      publishDate: "2nd Mar, 2024",
      source: "Medium",
      tags: ["APIs", "Node.js", "Postman", "Scrapping"],
    },
  ],
};
