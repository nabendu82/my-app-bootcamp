import React from 'react'
import './PostItem.css'
import styled from 'styled-components'

const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center'
}

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const PostItem = ({ post }) => {
    return (
        <div className='container'>
            <h1 style={headerStyle}>Title: {post.title}</h1>
            <p style={{ color: 'darkmagenta' }}>{post.body}</p>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </div>
    )
}

export default PostItem