import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let postData = props.post;
    let postMost = postData.map(post => <Post key={post.id} message={post.name} id={post.id} likesCount={post.likesCount}></Post>)

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (<div className={s.content}>
        <div>
            <textarea ref={newPostElement}></textarea>
            <div>
                <button onClick={addPost}>Add post </button>
            </div>
        </div>
        <div>
            New posts
        </div>
        <div className={s.posts}>
            {postMost}
        </div>
    </div>);
}


export default MyPosts;