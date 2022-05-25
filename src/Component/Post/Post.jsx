import React from "react";

const Post = (props) => {
    return (
        <div className="post">
            <div className="img-thumb">
                <img src="https://placeimg.com/200/150/tech" alt="dummy"/>
            </div>
            <div className="content">
                <p className="id">{props.data.id}</p>
                <p className="title" onClick={() => props.getDetail(props.data.id)}>{props.data.title}</p>
                <p className="desc">{props.data.body}</p>
                <button className="update" onClick={() => props.update(props.data)}>Update</button>
                <button className="remove" onClick={() => props.hapus(props.data.id)}>Remove</button>
            </div>
        </div>
    )
}

export default Post;