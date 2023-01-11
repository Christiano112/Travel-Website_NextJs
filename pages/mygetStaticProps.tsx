// posts will be populated at build time by getStaticProps()

// This removes the ts2304 error: Cannot find name 'posts'.
var posts: any;

function Blog({ posts: [] }) {
    return (
        <ul>
            {posts.map((post: { title: string, id: number }) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://.../posts')
    const posts = await res.json()

    if (!res.ok) {
        // If there is a server error, you might want to
        // throw an error instead of returning so that the cache is not updated
        // until the next successful request.
        throw new Error(`Failed to fetch posts, received status ${res.status}`)
    }

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}

export default Blog;


/* 

// lib/load-posts.js

// The following function is shared
// with getStaticProps and API routes
// from a `lib/` directory
export async function loadPosts() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts/')
  const data = await res.json()

  return data
}

// pages/blog.js
import { loadPosts } from '../lib/load-posts'

// This function runs only on the server side
export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const posts = await loadPosts()

  // Props returned will be passed to the page component
  return { props: { posts } }
}

*/


/* 
for client side data fetching (fetching data on the client side, not at build time), you can use the following:
* useSWR            "highly recommended for data fetching"
SWR is a React Hooks library for remote data fetching. It takes a key, fetcher function, and an optional config object, and returns a stateful value: data, error and isValidating. It also comes with a React hook for data fetching.

normal useEffect
*/