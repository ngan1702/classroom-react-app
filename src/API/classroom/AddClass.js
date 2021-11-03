import React, { Component } from 'react'
import axios from 'axios'

export class AddClass extends Component {
    constructor(prop){
        super(prop)
        this.state={
            name:'',
            description:''
        }
    }

    changeHandler=(e)  =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        axios.post('https://api-new-demo.herokuapp.com/api/classroom/', this.state)
        .then(response => {
            console.log(response)
        })
    }

    render() {
        const {name, description} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                <div>
                    <input 
                    type='text' 
                    name ='name' 
                    onChange={this.changeHandler}
                    value={name}></input>
                </div>
                <div>
                    <input 
                    type='text' 
                    name ='description' 
                        onChange={this.changeHandler}
                    value={description}></input>
                </div>
                <button type='submit'>Submit Now</button>
                </form>
            </div>
        )
    }
}

export default AddClass
