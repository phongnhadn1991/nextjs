import fetcher from 'lib/fetcher';
import { ALL_POST_SLUG, POST_BY_SLUG } from 'lib/wordpress/api';
const post = ({postData}) => {
    const blogPost = postData.data.post
    console.log(blogPost)
    return (
        <div>
            {blogPost.title}
        </div>
    );
};

export default post;

export const getStaticPaths = async () => {
    const res = await fetcher(ALL_POST_SLUG)
    const allPosts = await res.data.posts.nodes
    return {
        paths: allPosts.map((post) => `/post/${post.slug}`) || [],
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const variable = {
        id: params.slug,
        idType: "SLUG"
    }
    console.log(variable)

    const data = await fetcher(POST_BY_SLUG, {variable})
    
    return {
        props: {
            postData: data
        }
    }
}