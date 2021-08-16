import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <motion.h2
                        layoutId="welcomeMessage"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Hello next
                    </motion.h2>
                    <motion.p
                        layoutId="welcomeSubtitle"
                        className="text-muted mb-5"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        We're gonna learn some basics today, so buckle up and let's roll!
                    </motion.p>

                    <div className="d-flex flex-column">

                        <Link href="/about"
                        >
                            <motion.a 
                                className="text-muted border rounded my-3 p-3 cursor-pointer" 
                                layoutId="aboutLink"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1, delay:0.1 }}
                            >
                                About
                            </motion.a>
                        </Link>

                        <Link href="/api/cats"
                        >
                            <motion.a 
                                className="text-muted border rounded my-3 p-3 cursor-pointer" 
                                layoutId="catsLink"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1, delay:0.3 }}
                            >
                                Cats Api
                            </motion.a>
                        </Link>

                        <Link href="/"
                        >
                            <motion.a 
                                className="text-muted border rounded my-3 p-3 cursor-pointer" 
                                layoutId="coreLink"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1, delay:0.5 }}
                            >
                                Core
                            </motion.a>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
