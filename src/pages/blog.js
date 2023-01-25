import fetcher from 'lib/fetcher';
import {ALL_POSTS} from 'lib/wordpress/api';
import Image from 'next/image'
import Link from 'next/link';

const blog = ({ allPosts }) => {
    console.log(allPosts)
    return (
        <div>
            {allPosts && allPosts.map((post) => (
                <div className='itemPost' key={post.id}>
                    <Link href={`/post/${post.slug}`}>
                        <h3>{post.title}</h3>
                        <Image
                            src={post.featuredImage.node.sourceUrl}
                            objectFit="cover"
                            alt="Picture"
                            width={500}
                            height={300}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
};
export default blog

export const getStaticProps = async () => {
    const res = await fetcher(ALL_POSTS)
    const allPosts = res.data.posts.nodes

    return {
        props: { allPosts },
        revalidate: 1
    }
}