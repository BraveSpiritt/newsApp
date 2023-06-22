import React, { useState } from 'react';
import s from './Post.module.css'
import MyButton from './MyButton';


const PostList = ({ ...props }) => {
    let [counter, setCounter] = useState(0)

    return (
        <div>
            {props.posts.map(post =>
                <div key={post.id} className={s.divik}>
                    <input type='checkbox' onChange={() => {
                        if (post.isComplited) {
                            post.isComplited = false;
                            setCounter(counter -= 1);

                        } else {
                            post.isComplited = true;
                            setCounter(counter += 1);
                        }
                        props.func(counter)
                    }} />
                    <div className={s.kuchirDivik}>{post.text}</div>
                    <MyButton name={'delete'} style={{ padding: '5px' }} onClick={() => {
                        if(post.isComplited) {
                            setCounter(counter -= 1);
                            props.func(counter)
                        } props.remove(post)
                    }} className={s.buttonik}></MyButton>
                </div>
            )}

        </div>
    )
}

export default PostList;