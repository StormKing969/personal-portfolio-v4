import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { talents } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const TalentCard = ({ index, title, icon }) => (
    <Tilt className="xs:w-[250px] w-full">
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
                <img
                    src={icon}
                    alt={icon}
                    className="w-16 h-16 object-contain"
                />

                <h3 className="text-white text-[20px] font-bold text-center">
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                I&apos;m a double major who&apos;s always looking for
                opportunities to apply my skills and knowledge to real-world
                challenges and contribute to the development of the industry.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {talents.map((talent, index) => (
                    <TalentCard key={talent.title} index={index} {...talent} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
