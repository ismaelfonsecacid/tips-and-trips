import { LikeButton } from "./LikeButton"
import Link from "next/link"


//getStaticProps
// -> const fetchPosts = () => {return fetch('https://jsonplaceholder.typicode.com/posts') .then(res => res.json())}

//incrementalStaticRegeneration
const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
       next: {
        revalidate:10   // cada 10s recarga el fetch por si hay nuevos posts
       } 
    }) 
        .then(res => res.json())
}
 
export async function ListOfPosts() {
    const posts = await fetchPosts()
    return (
        posts.slice(0, 5).map(post => (
            <article key={post.id}>
                <Link href='/posts/[id]' as={`/posts/${post.id}`}>
                    <h2 style={{color:'#0f8'}}>{post.title}</h2>
                    <p>{post.body}</p>
                    <LikeButton id={post.id}/>
                </Link>
            </article>

        ))
    )
}