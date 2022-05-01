import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            comment: '',
            language: 'react'
        }
    }

    handleUserChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange = event => {
        this.setState({
            comment: event.target.value
        })
    }

    handleLangChange = event => {
        this.setState({
            language: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username </label>
                    <input type="text" id="username" value={this.state.username} onChange={this.handleUserChange} />
                </div>
                <div>
                    <label htmlFor="comment">Comments</label>
                    <textarea id="comment" value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                </div>
                <div>
                    <label htmlFor="language">Language</label>
                    <select id="language" value={this.state.language} onChange={this.handleLangChange}>
                        <option value="java">Java</option>
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="c++">C++</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default DemoForm
