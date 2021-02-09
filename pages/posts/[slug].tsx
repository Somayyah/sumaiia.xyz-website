import Head from "next/head"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import marked from "marked"

const Post = ({htmlMarkdown, data}) => {
    return(
        <>
            <Head>
                <title>{data.title}</title>
            </Head>
            <div className="prose" dangerouslySetInnerHTML={{__html: htmlMarkdown}} />
        </>
    )
}

export const getStaticPaths = async() => {

    const files = fs.readdirSync("posts")
    return {
        paths: files.map(filename => ({
            params: {
                slug: filename.replace('.md', '')
            }
        })),
        fallback: false
    }
}

export const getStaticProps = async({params: {slug}}) => {

    const markdown = fs.readFileSync(path.join("posts", slug + ".md")).toString()
    const parsedMarkdown = matter(markdown)
    const htmlMarkdown = marked(parsedMarkdown.content)
    return {
        props: {
            htmlMarkdown,
            data: parsedMarkdown.data
        }
    }
}

export default Post