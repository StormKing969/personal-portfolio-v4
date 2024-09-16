import {
    backend,
    camera,
    creator,
    credit_card,
    css,
    cvs,
    earth_planes,
    figma,
    frontend,
    git,
    gm,
    html,
    ip_tracker,
    javascript,
    mongodb,
    nodejs,
    react_js,
    tailwind,
    testimonial01,
    testimonial02,
    three_js,
    typescript,
    umass_boston,
    verbotics_ai,
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

const talents = [
    {
        title: "Frontend Developer",
        icon: frontend,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Photographer",
        icon: camera,
    },
    {
        title: "Content Creator",
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
        icon: react_js,
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
        icon: three_js,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Software Developer",
        company_name: "General Motors",
        icon: gm,
        iconBg: "#00478C",
        date: "May 2022 - Present",
        points: [
            "Design and implement new UI components for various company applications in accordance with company requirements.",
            "Develop and adjust SQL queries according to backend requirements.",
            "Enhance and resolve issues within the existing codebase.",
            "Develop new batch processes and scripts to meet the evolving business requirements.",
            "Integrate new technologies into existing functionalities within the company’s applications.",
            "Coordinate and manage sports events, such as a soccer league, as part of the JumpStart Sport Committee.",
            "Evaluate and authorize code modifications submitted by team developers.",
        ],
    },
    {
        title: "Operation Supervisor",
        company_name: "CVS Health",
        icon: cvs,
        iconBg: "#FFF",
        date: "June 2020 - April 2022",
        points: [
            "Responsible for overseeing and ensuring finances at the end of the day is tallied correctly and the amount registered is accounted for by balancing the cash till.",
            "Entrusted with supervision of the store in case of store manager absence for smooth and streamlined operations.",
            "Address in a timely manner customer issues and complaints according to company policies.",
            "Delegate responsibilities and manage multiple schedules / shifts to ensure proper functioning of the store and account for manpower needed.",
        ],
    },
    {
        title: "Project Leader & Frontend Developer",
        company_name: "Vebortics AI",
        icon: verbotics_ai,
        iconBg: "#0693E3",
        date: "January 2020 - May 2020",
        points: [
            "Researched and designed an interface appropriate for medical uses based on the needs of the client.",
            "Connected the AI to a search bar implemented on the website.",
            "Assigned tasks to other members.",
            "Set up client meetings & group meetings.",
            "Created and presented the documentation that recorded our progress and final product to all involved parties.",
        ],
    },
    {
        title: "Project Leader & Web Designer",
        company_name: "University of Massachusetts Boston",
        icon: umass_boston,
        iconBg: "#005A8C",
        date: "September 2019 - December 2019",
        points: [
            "Researched and designed an Android Application called “Study Guide” as part of a class project.",
            "Implemented a login, logout, signup and forgot password system within the application",
            "Using Firebase Database, multiple users can create and manage their own data.",
            "Assigned tasks to other members.",
        ],
    },
    {
        title: "Project Leader & Web Designer",
        company_name: "University of Massachusetts Boston",
        icon: umass_boston,
        iconBg: "#005A8C",
        date: "January 2019 - May 2019",
        points: [
            "Researched and designed a fully functioning pizza website that is linked to a database using MySQL and JavaScript.",
            "Using MySQL and JavaScript we created a database to store each user choices.",
            "Created multiple user selections.",
            "Assigned tasks to other members.",
        ],
    },
];

const testimonials = [
    {
        testimonial: "The best person I were met :)",
        name: "Daniel Werminghausen",
        designation: "Software Engineer",
        company: "Bonterra",
        image: testimonial01,
    },
    {
        testimonial:
            "I have worked with Saj for 7 years and I have not seen anyone else with the level of passion, dedication, and skill that Saj has. I think he is an important asset in any company, software or otherwise.",
        name: "Bryon Ferrer",
        designation: "Application Development/Maintenance Officer",
        company: "State Street",
        image: testimonial02,
    },
];

const projects = [
    {
        name: "Interactive Credit Card",
        description:
            "This is a solution to the Interactive card details form challenge on Frontend Mentor which is meant to challenge and help you improve your coding skills by building realistic projects.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            // {
            //     name: "mongodb",
            //     color: "green-text-gradient",
            // },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: credit_card,
        source_code_link:
            "https://github.com/StormKing969/interactive-card-details",
    },
    {
        name: "3D Display of The Earth and Planes",
        description:
            "The web application was created following a guide which is meant to be used as an introduction to 3D web designing.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "threejs",
                color: "green-text-gradient",
            },
            // {
            //     name: "scss",
            //     color: "pink-text-gradient",
            // },
        ],
        image: earth_planes,
        source_code_link: "https://github.com/StormKing969/earth-and-planes",
    },
    {
        name: "IP Address Tracker",
        description:
            "This is a solution to the IP address tracker challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: ip_tracker,
        source_code_link: "https://github.com/StormKing969/ip-address-tracker",
    },
];

export { experiences, projects, talents, technologies, testimonials };
