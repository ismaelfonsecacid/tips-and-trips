
const fetchComments =  async(id) => {
    await new Promise(resolve=> setTimeout(resolve,3000))

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 10   // cada 10s recarga el fetch por si hay nuevos posts
        }
    })
        .then(res => res.json())
}

export default async function Post({ params }) {
    const { id } = params
    const comments = await fetchComments(id)
    return (
        <ul style={{fontSize:'12px' ,background:'#444'}}>
            {comments.map(comment =>
            (<li key={comment.id}>
                <h4>{comment.name}</h4>
                <small>{comment.email}</small>
                <small>{comment.body}</small>
            </li>)
            )}
        </ul>
    )
}