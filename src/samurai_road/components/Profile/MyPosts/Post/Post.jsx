import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000" />
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}


export default Post; 