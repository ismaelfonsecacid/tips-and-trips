import Link from "next/link"

const fetchSinglePost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
       next: {
        revalidate:10   // cada 10s recarga el fetch por si hay nuevos posts
       } 
    }) 
        .then(res => res.json())
}

export default async function Post ({params,children}) {
    const {id} = params
    const post = await fetchSinglePost(id)
    return (
       <article>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link href={`/posts/${post.id}/comments`}>Ver comentarios</Link>
        {children}
       </article>
    )
}