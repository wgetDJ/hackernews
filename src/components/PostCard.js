import React from "react"

const PostCard = (props) => {
    console.log(props)
    return (
        <div className = "post--card">
            <div className = "post--points">&#9650; {props.post.points}</div>
            <div className = "post--title"><a href="">{props.post.title}</a></div>
            <div className = "post--by">{props.post.by}</div>
            <div className = "post--link">{props.post.link}</div>
            <div className = "post--time" title="{props.post.actualtime}">{props.post.time}</div>
            <div className = "post--comment">{props.post.comments} Comments</div>
        </div>
    )
}

export default PostCard