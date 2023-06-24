import {
    // mobile,
    camera,
    // writer,
    creator,
    book,
    web,
    javascript,
    // typescript,
    html,
    css,
    // reactjs,
    // redux,
    // tailwind,
    // nodejs,
    // mongodb,
    git,
    // figma,
    // docker,
    // meta,
    umass_boston,
    cape_cod_community_college,
    usps,
    walking_co,
    the_descent_into,
    // starbucks,
    // tesla,
    // shopify,
    // carrent,
    credit_card,
    // jobit,
    earth_planes,
    ip_tracker,
    // tripguide,
    // threejs,
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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Writer",
        icon: book,
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
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    // {
    //     name: "React JS",
    //     icon: reactjs,
    // },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    // {
    //     name: "Tailwind CSS",
    //     icon: tailwind,
    // },
    // {
    //     name: "Node JS",
    //     icon: nodejs,
    // },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    // {
    //     name: "figma",
    //     icon: figma,
    // },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const experiences = [
    {
        title: "Operation Supervisor",
        company_name: "Walking Company | Ten Thousand Villages (Non-Profit)",
        icon: walking_co,
        iconBg: "#CCF5FF",
        date: "March 2018 - December 2019",
        points: [
            "Responsible for overseeing and ensuring finances at the end of the day is tallied correctly and the amount registered is accounted for by balancing the cash till.",
            "Entrusted with supervision of the store in case of store manager absence for smooth and streamlined operations.",
            "Delegate responsibilities and manage multiple schedules / shifts to ensure proper functioning of the store and account for manpower needed.",
            "Address in a timely manner customer issues and complaints according to company policies.",
        ],
    },
    {
        title: "Undergraduate Student",
        company_name: "Cape Cod Community College",
        icon: cape_cod_community_college,
        iconBg: "#FFF",
        date: "September 2018 - January 2021",
        points: [
            "Maintain a 4.0 GPA.",
            "Involved with multiple clubs including but not limited to the Rotary Club, Economics Club.",
            "Involved in extra-curricular activities like ping-pong, biking and hiking.",
            "Involved with the Student Senate of Cape Cod Community College",
        ],
    },
    {
        title: "Postal Worker",
        company_name: "United States Postal Service",
        icon: usps,
        iconBg: "#CCCEFF",
        date: "January 2020 - July 2021",
        points: [
            "Responsible for organizing the logistics of delivering mail and packages for the town.",
            "Entrusted with supervision of federal equipment, including postal vehicles.",
            "Collaborate with the team and fill in gaps to ensure that tasks are completed efficiently and properly.",
        ],
    },
    {
        title: "Podcast Presenter & Producer",
        company_name: "The Weekly Checkout | The Descent Into",
        icon: the_descent_into,
        iconBg: "#383E56",
        date: "January 2021 - Present",
        points: [
            "Discuss on hot topics related to gaming, tech and world events with other guests.",
            "Come up with talking/discussion points for the show.",
            "Handle the post production duties to ensure the quality of the show.",
        ],
    },
    {
        title: "Undergraduate Student",
        company_name: "University of Massachusetts Boston",
        icon: umass_boston,
        iconBg: "#005A8C",
        date: "January 2021 - Present",
        points: [
            "Maintain a 4.0 GPA.",
            "Involved with multiple clubs including but not limited to the Rotary Club, Economics Club.",
            "Involved in extra-curricular activities like ping-pong, biking and hiking.",
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

export { talents, technologies, experiences, testimonials, projects };
