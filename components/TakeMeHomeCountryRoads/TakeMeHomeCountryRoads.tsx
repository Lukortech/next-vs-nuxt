import Link from "next/link";
//@ts-ignore
import styles from "./floatee.module.scss";
import {motion} from "framer-motion";

const TakeMeHomeCountryRoads = () => {
    return (
        <Link href="/home">
            <motion.a 
                className={`${styles.floatee} cursor-pointer`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <span className="a-ping position-absolute w-100 h-100"></span>
                <i className={`${styles.icon} bi bi-house text-dark`}></i>
            </motion.a>
        </Link>
    )
}

export default TakeMeHomeCountryRoads;