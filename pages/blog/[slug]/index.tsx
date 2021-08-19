import fs from 'fs'
import path from 'path'
import marked from 'marked'
import Link from 'next/link'
import matter from 'gray-matter'

const BlogPost = ({
    frontmatter: { title, date },
    slug,
    content,
}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mt-1">
                    <small className="text-secondary">Blog post on: <Link href={`${slug as string}`}><a>{title}</a></Link> from {date}</small>
                </div>
            </div>
            <main className="">
                <div className="container mt-5">
                    <div className="row d-flex justify-content-center align-items-center py-5">
                        <div className="col-8 border-0 rounded shadow-lg p-5" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.md'),
        'utf-8'
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}

export default BlogPost;