import {Component} from 'react'
import { useState } from 'react'

export default class LoginPage extends Component {
    state = {
        name: '',
    }
    handleSubmit = async (evt) => {
        evt.preventDefault()
        
        
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error:''
        })
    }
    render(){
        return (
        <main>
            <h1>Login Page</h1>
            <div className='form-container'>
                <form autoComplete='off' onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange} required />
                    <button type='submit'>Enter Name</button>
                </form>
            </div>
        </main>
        )
    }
}