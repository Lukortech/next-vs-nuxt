import Link from "next/link";
import { motion } from "framer-motion";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post from "../../components/Post";

export async function getStaticProps() {
    const files = fs.readdirSync(path.join('posts'))

    const posts = files.map((filename) => {
        const slug = filename.replace('.md', '')

        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
        )

        const { data: frontmatter } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
        }
    })

    return {
        props: {
            posts: posts,
        },
    }
}

const BlogPosts = ({ posts }) => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <motion.h2
                        layoutId="welcomeMessage"
                        initial={{ scale: 2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Here's the list of all my blog posts
                    </motion.h2>
                    <motion.p
                        layoutId="welcomeSubtitle"
                        className="text-muted mb-5"
                        initial={{ scale: 2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Hope you like it, subscribe ring the bell and eat you veggies.
                    </motion.p>

                    {posts.map((post, index) => (
                        <Post delay={index} key={index} post={post} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default BlogPosts;

