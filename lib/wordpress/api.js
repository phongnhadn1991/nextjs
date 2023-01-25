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

export const ALL_POST_SLUG = `{
    posts {
      nodes {
        slug
      }
    }
  }`

export const POST_BY_SLUG = `query PostBySlug {
    post(id: "vietnamske-pikantne-kura-ga-xao-sa-ot", idType: SLUG) {
      content
      date
      id
      title
      slug
    }
  }`