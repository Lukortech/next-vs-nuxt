import Link from 'next/link'
import { motion } from "framer-motion";
import firstLetterToUppercase from "../utils/firstUpperLetter";

export default function Post({ post, delay }) {
    return (
        <motion.div className='d-flex flex-column flex-start p-3 my-3 border rounded'
            layoutId={post.slug}
            initial={{ scale: 2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: Number(`0.${delay}`) }}
        >
            <div className='post-date'>Posted on {post.frontmatter.date}</div>

            <h3>{firstLetterToUppercase(post.frontmatter.title)}</h3>

            <Link href={`/blog/${post.slug}`}>
                <a
                    className="link-secondary text-left"
                >
                    Read More
                </a>
            </Link>
        </motion.div>
    )
}