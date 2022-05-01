import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class Child extends Component {
    render() {
        return (
            <UserConsumer>
                {user => {
                    return (
                        <div>
                            <h1>Child component</h1>
                            <h2>{user}</h2>
                        </div>
                    )
                }}
            </UserConsumer>
        )
    }
}

export default Child
