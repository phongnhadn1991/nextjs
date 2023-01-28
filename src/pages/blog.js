import { gql } from '@apollo/client';
import { client } from 'lib/apollo';
import { ALL_POSTS } from 'lib/wordpress/api';
import Image from 'next/image'
import Link from 'next/link';
import Head from 'next/head'

import StyleBlog from '../styles/blog/blog.module.scss'
import { Suspense } from 'react';
import Loading from '@/components/loading';

const blog = ({ allPosts }) => {

    return (
        <>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Blog" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Link href={'/'}>
                <span className={StyleBlog.btnBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    Back to home
                </span>
            </Link>
            <h1 className={StyleBlog.title}>Blog</h1>
            <main className='container'>
                <Suspense fallback={<Loading />}>
                    <div className={StyleBlog.listBlog}>
                        {allPosts && allPosts.map((post) => (
                            <div className={StyleBlog.itemPost} key={post.id}>
                                <Image
                                    src={post.featuredImage.node.sourceUrl}
                                    alt="Picture"
                                    width={300}
                                    height={200}
                                    quality={80}
                                    loading='lazy'
                                />
                                <Link href={`/post/${post.slug}`}>
                                    <h3>{post.title}</h3>
                                </Link>
                            </div>
                        ))}
                    </div>
                </Suspense>
            </main>
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