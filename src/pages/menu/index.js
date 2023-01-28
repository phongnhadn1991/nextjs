import { GET_ALL_MENU_ORDER } from 'lib/wordpress/api';
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { gql } from '@apollo/client';
import { client } from 'lib/apollo';
import StyleBlog from '../../styles/blog/blog.module.scss'

const MenuOrder = ({allMenu}) => {
    console.log(allMenu)
    return (
        <div>
            <Head>
                <title>Menu Order</title>
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
            <h1 className={StyleBlog.title}>Menu Order</h1>
            <main className='container'>
                <div className={StyleBlog.listMenu}>
                    {allMenu && allMenu.map((post) => (
                        <div className={StyleBlog.itemPost} key={post.id}>
                            <Link href={`/menu/${post.slug}`}>
                                <Image
                                    src={post.featuredImage.node.sourceUrl}
                                    alt="Picture"
                                    width={100}
                                    height={50}
                                    loading='lazy'
                                />

                                <h5>{post.title}</h5>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default MenuOrder;

export const getStaticProps = async () => {
    const result = await client.query({
        query: gql`${GET_ALL_MENU_ORDER}`
    })
    return {
        props: { allMenu: result.data.allItemMenuOrder.nodes },
        revalidate: 1
    }
}