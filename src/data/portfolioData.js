export const personalInfo = {
  name: "Faaz",
  role: "MERN Stack Developer",
  subRole: "Full Stack Developer Learner",
  tagline: "Building responsive, user-centric web applications with React, JavaScript, and modern CSS — currently mastering Node.js, Express & MongoDB.",
  bio: "I am a dedicated MERN Stack Developer based in Kerala, India. I have built a strong foundation in modern frontend technologies including HTML, CSS, JavaScript, React, Redux Toolkit, Formik, and Yup. I am actively expanding my skill set into backend development with Node.js, Express.js, and MongoDB to build end-to-end full-stack web solutions.",
  location: "Kerala, India",
  status: "Open for MERN Stack Internships & Entry-Level Roles",
  email: "faazahamed86@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  resumeUrl: "#"
};

export const skillsData = [
  {
    category: "Frontend Core",
    icon: "Code2",
    badge: "Proficient",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Responsive Design"]
  },
  {
    category: "State & Forms",
    icon: "Sliders",
    badge: "Proficient",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    skills: ["Redux Toolkit", "Formik", "Yup Validation", "Context API", "State Persistence"]
  },
  {
    category: "React Ecosystem",
    icon: "Layout",
    badge: "Proficient",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    skills: ["React Router DOM", "Axios", "Vite", "Component Lifecycle", "Custom Hooks"]
  },
  {
    category: "Backend Development",
    icon: "Server",
    badge: "Currently Learning 🚀",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    skills: ["Node.js", "Express.js", "REST APIs", "HTTP & Middleware", "JWT Authentication"]
  },
  {
    category: "Database & Storage",
    icon: "Database",
    badge: "Currently Learning 🚀",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    skills: ["MongoDB", "Mongoose ODM", "JSON / LocalStorage", "CRUD Operations"]
  },
  {
    category: "Developer Tools",
    icon: "Wrench",
    badge: "Tools",
    badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    skills: ["Git", "GitHub", "VS Code", "Postman", "NPM", "Chrome DevTools"]
  }
];

export const projectsData = [
  {
    id: "expense-tracker",
    title: "Expense Tracker App",
    category: "React Project",
    description: "A personal finance application for logging income and expenses, featuring category breakdowns, form validation, and persistent state management.",
    tags: ["React", "JavaScript", "CSS"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com/expense-tracker",
    featured: true
  },
  {
    id: "react-ecommerce",
    title: "React E-Commerce Application",
    category: "React Project",
    description: "A modern online store featuring product catalog filtering, search, interactive cart management, and a responsive shopping layout.",
    tags: ["React", "JavaScript", "CSS"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://e-commerce-faazahamed86-7339.vercel.app/",
    featured: true
  },
  {
    id: "redux-shopping-cart",
    title: "Redux Shopping Cart",
    category: "React Project",
    description: "An interactive shopping cart application demonstrating real-time cart item addition, quantity adjustments, and total price calculation.",
    tags: ["React", "JavaScript", "CSS"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com/shopping-cart",
    featured: true
  }
];

export const learningJourney = [
  {
    period: "Phase 3 • Currently Active 🚀",
    title: "Node.js, Express & Backend Architecture",
    type: "In Progress",
    description: "Actively building server-side applications using Node.js and Express. Learning RESTful API endpoints, routing, middleware functions, and database connectivity with MongoDB & Mongoose.",
    topics: ["Node.js Basics & NPM", "Express.js Routing & Middleware", "MongoDB Schemas & Mongoose", "REST API Development"],
    statusColor: "border-purple-500 bg-purple-500/10 text-purple-300"
  },
  {
    period: "Phase 2 • Completed",
    title: "React.js & Advanced State Management",
    type: "Mastered",
    description: "Mastered building modular single-page applications with React. Implemented global state management using Redux Toolkit, complex forms with Formik & Yup, and client-side routing.",
    topics: ["React Hooks & Component Lifecycle", "Redux Toolkit (Slices & Async Thunks)", "Form Validation (Formik & Yup)", "API Integration with Axios"],
    statusColor: "border-cyan-500 bg-cyan-500/10 text-cyan-300"
  },
  {
    period: "Phase 1 • Completed",
    title: "Web Development Core Foundations",
    type: "Mastered",
    description: "Gained strong foundational knowledge in web markup, styling systems, and modern JavaScript programming concepts.",
    topics: ["Semantic HTML5 & Accessibility", "CSS3 Flexbox, Grid & Tailwind CSS", "JavaScript ES6+ (Promises, Async/Await)", "Git Version Control & GitHub"],
    statusColor: "border-cyan-500 bg-cyan-500/10 text-cyan-300"
  }
];
