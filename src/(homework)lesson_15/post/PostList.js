import React from 'react';
import s from './Post.module.css'
import MyButton from './MyButton';


const PostList = ({ isComplitedChange, onRemove, posts }) => {
    return (
        <div>
            {posts.map(post =>
                <div key={post.id} className={s.divik}>
                    <input type='checkbox'
                        onChange={() => {
                            isComplitedChange(post)
                        }}
                    />
                    <div className={s.kuchirDivik}>{post.text}</div>
                    <MyButton name={'delete'} style={{ padding: '5px' }} className={s.buttonik}
                        onClick={() => {
                            onRemove(post.id)
                        }}></MyButton>
                </div>
            )}
        </div>
    )
}

export default PostList;