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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
apisero,
  sprinto,
  socialMedia,
  library,
  shopify,
  carrent,
  jobit,
 
  threejs,
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
    title: "React Developer",
    icon: web,
  },
  {
    title: "Node Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Tech Enthusiast",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack developer",
    company_name: "Sprinto",
    icon: sprinto,
    iconBg: "#383E56",
    date: "April 2023 - Current",
    points: [
      "Leveraging the dynamic capabilities of React, JavaScript,Redux and HTML to engineer intuitive and user-centric front-end interfaces that seamlessly engage users",
      "Harnessing the power of Ant Design,Bootstrap and other contemporary React libraries to elevate the user experience through intuitive web designs.",
      "Utilizing GraphQL,Redux proficiently to optimize data querying and manipulation, enhancing the functionality and appeal of the web applications.",
      "Demonstrated proficiency in developing high-quality software tailored to precise customer specifications.",
    ],
  },
  {
    title: "Full Stack developer",
    company_name: "Ntt data",
    icon: apisero,
    iconBg: "#E6DEDD",
    date: "Sep2021 - April 2023",
    points: [
      "Leveraged React.js expertise to develop, review, and execute code for web applications, in conjunction with Graph QL, Spring Boot, ,Redux,MongoDB, SQL, and AWS.",
      "Played a key role in the creation and evaluation of web portals, configuring workflows for seamless functionality while emphasizing React.js as a core framework.",
      "Applied React.js proficiency to optimize user interfaces and enhance user experiences within web applications.",
      "Specialized in data modeling and architecture design in MongoDB and SQL, ensuring efficient data management while utilizing React.js for front-end implementation.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Social Media",
    description:
      "Web-based Social media app , It enables user to Post their picture ans see other people profile",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: socialMedia,
    source_code_link: "https://github.com/",
  },
  {
    name: "Library",
    description:
      "A Graph ql crud OPeration website , Library where you can see all books from an author and genre. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Graphql",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: library,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
