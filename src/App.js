import React from "react"

import Header from "./components/Header"
import PostCard from "./components/PostCard"

const App = () => {
    return (
        <div className = "app">
            <Header />

            <div className = "posts"></div>
        </div>
    )
}

export default App