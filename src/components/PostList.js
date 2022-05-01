import React, { Component } from 'react'

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    async componentDidMount(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()
        this.setState({
            posts
        })
    }

    render() {
        const { posts } = this.state

        return (
            <>
                {posts.map(post => <h2 key={post.id}>{post.title}</h2>)}
            </>
        )
    }
}

export default PostList
