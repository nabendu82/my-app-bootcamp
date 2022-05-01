import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.emailRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    handleSubmit = () => {
        console.log(this.inputRef.current.value)
        console.log(this.emailRef.current.value)
    }

    render() {
        return (
            <>
                <div>
                    <label htmlFor="name">Name </label>
                    <input type="text" ref={this.inputRef} id="name" />
                </div>
                <div>
                    <label htmlFor="email">Email </label>
                    <input type="text" ref={this.emailRef} id="email" />
                </div>
                <button onClick={this.handleSubmit}>Send</button>
            </>
        )
    }
}

export default RefsDemo
