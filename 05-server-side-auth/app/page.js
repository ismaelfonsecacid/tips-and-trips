'use client'
export default function Home() {

  return (
    <div>
      <form method="POST" action="/api/login">
        <input name="username" type="text" value="admin"></input>
        <br />
        <input name="password" type="password" value="admin"></input>
        <br />
        <input type="submit" value="Login"></input>
      </form>
    </div>
  )
}


