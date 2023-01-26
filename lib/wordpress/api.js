// GET ALL POST
export const ALL_POSTS = `query AllPosts {
    posts {
      nodes {
        id
        date
        slug
        title
        uri
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }`

// GET ALL POST SLUG
export const ALL_POST_SLUG = `query PostAllSlug {
    posts {
      nodes {
        slug
      }
    }
  }`

// GET POST BY SLUG
export const POST_BY_SLUG = `query PostBySlug($slug: String!) {
    postBy(slug: $slug) {
    id
    content
    title
    featuredImage {
        node {
            sourceUrl
        }
    }
    }
}`