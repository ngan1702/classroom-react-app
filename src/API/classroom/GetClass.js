import React, { Component } from 'react'
import axios from 'axios'

class GetClass extends Component {
    constructor(prop){
        super(prop)
        this.state={
            postList: []
        }
    }

    componentDidMount(){
        axios.get('https://api-new-demo.herokuapp.com/api/classroom/')
        .then(response => {
            this.setState({postList: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {postList} = this.state
        return (
            <div>
                {
                    postList.length ?
                    postList.map(post => <div>{post.name}</div>)
                    :
                    null
                }
            </div>
        )
    }
}

export default GetClass
