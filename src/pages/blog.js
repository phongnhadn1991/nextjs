import { gql } from '@apollo/client';
import { client } from 'lib/apollo';
import { ALL_POSTS } from 'lib/wordpress/api';
import Image from 'next/image'
import Link from 'next/link';
import Head from 'next/head'

const blog = ({ allPosts }) => {
    return (
        <>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Blog" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                {allPosts && allPosts.map((post) => (
                    <div className='itemPost' key={post.id}>
                        <Image
                            src={post.featuredImage.node.sourceUrl}
                            objectFit="cover"
                            alt="Picture"
                            width={500}
                            height={300}
                        />
                        <Link href={`/post/${post.slug}`}>
                            <h3>{post.title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};
export default blog

export const getStaticProps = async () => {
    const result = await client.query({
        query: gql`${ALL_POSTS}`
    })
    return {
        props: { allPosts: result.data.posts.nodes },
        revalidate: 1
    }
}