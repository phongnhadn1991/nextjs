import { gql } from '@apollo/client';
import { client } from 'lib/apollo';
import { ALL_POST_SLUG, POST_BY_SLUG } from 'lib/wordpress/api';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'

const post = ({ post }) => {

    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.title} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h3>{post.title}</h3>
                <Image
                    src={post.featuredImage.node.sourceUrl}
                    objectFit="cover"
                    alt="Picture"
                    width={500}
                    height={300}
                />
                <article dangerouslySetInnerHTML={{ __html: post.content }} />
                <Link href={'/blog'}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width={50} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                        Back to blog
                    </span>
                </Link>
            </div>
        </>
    );
};

export default post;

export const getStaticPaths = async () => {
    const result = await client.query({
        query: gql`${ALL_POST_SLUG}`
    })
    return {
        paths: result.data.posts.nodes.map(({ slug }) => {
            return {
                params: { slug }
            }
        }) || [],
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const { slug } = params
    const result = await client.query({
        query: gql`${POST_BY_SLUG}`,
        variables: { slug }
    })

    return {
        props: {
            post: result.data.postBy
        }
    }
}