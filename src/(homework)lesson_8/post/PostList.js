import s from './Post.module.css'
import MyButton from './MyButton';
import React from 'react';


const PostList = ({ ...props }) => {
    return (
        <div>
            {props.posts.map(post =>
                <div key={post.id} className={s.divik}>
                    <input type='checkbox' onChange={() => {
                        props.isComplitedChange(post)
                        console.log(post)   

                    }} />
                    <div className={s.kuchirDivik}>{post.text}</div>
                    <MyButton name={'delete'} style={{ padding: '5px' }} onClick={() => {
                        props.remove(post)
                    }} className={s.buttonik}></MyButton>
                </div>
            )}
        </div>
    )
}

export default PostList;