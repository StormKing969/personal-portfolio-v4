import { motion } from "framer-motion";

import TalentCard from "./TalentCard";
import { styles } from "../../styles";
import { talents } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";

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
