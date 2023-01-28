import { gql } from '@apollo/client';
import { client } from 'lib/apollo';
import { GET_ALL_MENU_ORDER, GET_MENU_BY_SLUG } from 'lib/wordpress/api';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'


import StyleBlog from '../../styles/blog/blog.module.scss'

const Menu = ({ menuItem }) => {
    return (
        <>
            <Head>
                <title>{menuItem.title}</title>
                <meta name="description" content={menuItem.title} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Link href={'/menu'}>
                <span className={StyleBlog.btnBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    Back to Menu
                </span>
            </Link>
            <h1 className={StyleBlog.title}>{menuItem.title}</h1>
            <div>
                <main className='container'>
                    <Image
                        src={menuItem.featuredImage.node.sourceUrl}
                        alt="Picture"
                        width={100}
                        height={50}
                        loading='lazy'
                    />
                </main>
            </div>
        </>
    );
};

export default Menu;

export const getStaticPaths = async () => {
    const result = await client.query({
        query: gql`${GET_ALL_MENU_ORDER}`
    })
    return {
        paths: result.data.allItemMenuOrder.nodes.map(({ slug }) => {
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
        query: gql`${GET_MENU_BY_SLUG}`,
        variables: { slug }
    })

    return {
        props: {
            menuItem: result.data.itemMenuOrderBy
        }
    }
}