'use client'   //sirve para poner que se pone del lado del cliente
import { useState } from "react"

export function LikeButton () {
    const [liked,setLiked] = useState(false)
    return (
        <button onClick={()=>setLiked(!liked)}>
        {liked ? '💓' : '💔'}
        </button>
    )
}