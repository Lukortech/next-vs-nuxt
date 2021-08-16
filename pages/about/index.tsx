//@ts-ignore
import { freshPrinceOfReact } from "./about.module.scss";
import { motion } from "framer-motion";

const About = () => {
    return (
        <>
            {/* Import of custom classes as scoped CSS */}
            <div className={freshPrinceOfReact}>
                <div>
                    <motion.p

                        initial={{ scale: 0.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.1 }}>
                        Now, this is a story all about how
                    </motion.p>
                    <motion.p

                        initial={{ scale: 0.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}>
                        My life got flipped-turned upside down
                    </motion.p>
                    <motion.p

                        initial={{ scale: 0.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}>
                        And I liked to take a minute
                    </motion.p>
                    <motion.p

                        initial={{ scale: 0.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}>
                        Just sit right there
                    </motion.p>
                    <motion.p

                        initial={{ scale: 0.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}>
                        I'll tell you how I became the prince of a town called Bel Air
                    </motion.p>
                </div>
            </div>
        </>
    )
}

export default About;