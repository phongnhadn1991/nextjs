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
    excerpt
    title
    featuredImage {
        node {
            sourceUrl
        }
    }
    }
}`

// GET ALL MENU
export const GET_ALL_MENU_ORDER = `query GetAllMenu {
  allItemMenuOrder(first: 30) {
    nodes {
      id
      title
      slug
      uri
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}`

// GET MENU BY SLUG
export const GET_MENU_BY_SLUG = `query GetMenuBySlug($slug: String!) {
  itemMenuOrderBy(slug: $slug) {
    id
    title
    slug
    uri
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
}`
