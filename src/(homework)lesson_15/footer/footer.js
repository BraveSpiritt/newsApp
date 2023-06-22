import React from 'react';

const Footer = ({ todos }) => {
    let x = (todos.filter(e => e.isComplited )).length
    return (
        <div>
            <span>{x} / {todos.length}</span>
        </div>
    );
}

export default Footer;