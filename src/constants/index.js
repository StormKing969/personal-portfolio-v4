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
            "Work cross-functionally to transform the company infrastructure by designing and implementing new UI components for various company applications.",
            "Enhance crucial assurance by validating access and authentication APIs in the environment to minimize unwanted access and secure protection against potential bad actors.",
            "Review, evaluate, and authorize code modifications submitted by team developers.",
            "Continuously assess the backwards compatibility (i.e., integrating new features into existing technologies) to help understand the decision to drive system transformation.",
        ],
    },
    {
        title: "Operation Supervisor",
        company_name: "CVS Health",
        icon: cvs,
        iconBg: "#FFF",
        date: "June 2020 - April 2022",
        points: [
            "Oversaw operations to ensure the financial integrity of the store was maintained daily.",
            "Proactively evaluated staffing, inventory, and customer satisfaction for enhanced and streamlined operations.",
            "Problem solved (as needed) with the team to address customer issues and complaints according to company policies.",
            "Encouraged team bonding and listened to employees on shift to align personal expectations with company objectives.",
        ],
    },
    {
        title: "Project Leader & Frontend Developer",
        company_name: "Vebortics AI",
        icon: verbotics_ai,
        iconBg: "#0693E3",
        date: "January 2020 - May 2020",
        points: [
            "Responsible for presenting a proposal to modernize the IT infrastructure supporting medical usage metrics.",
            "Collaborated with the team and client for a needs assessment and walkthrough required access controls when updating the system to decrease inefficiency.",
            "Optimized system through connecting AI to a search bar implemented on the website.",
            "Through effective delegation, led the project to completion and produced a high-quality final proposal, including a comprehensive report and prototype demonstration, to stakeholders for approval and potential implementation.",
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
