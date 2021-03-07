import { GetStaticPaths, GetStaticProps } from 'next'

let client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticPaths: GetStaticPaths = async () => {
    let data = await client.getEntries({
        content_type: 'article',
    })
    return {
        paths: data.items.map(item => ({
            params: {slug: item.fields.slug}
        })),
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    let data = await client.getEntries({
        content_type: 'article',
        'fields.slug': params.slug
    })
    return {
        props: {
            article: data.items[0]
        }
    }
}


export default function Article({ article }) {

    return <article>
        <h1>{article.fields.title}</h1>
        {article.fields.content}
    </article>

}

