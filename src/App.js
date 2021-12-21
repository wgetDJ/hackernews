import React from "react"

import Header from "./components/Header"
import PostCard from "./components/PostCard"
import postData from "./data"

const App = () => {
    const postElement = postData.map(post => {
        return (
            <PostCard
                key = {post.id}
                post = {post}
            />
        )
    })

    return (
        <div className = "app">
            <Header />

            <div className = "posts">
                {postElement}
            </div>
        </div>
    )
}

export default App