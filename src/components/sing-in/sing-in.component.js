import React from 'react'
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({
            'email': '',
            'password': ''
        })
    }

    hagleChange = e => {
        const { name, value } = e.target;
        this.setState({[name]: value});
    }


    render() {
        return (
            <div>
                <h2>I already have a account</h2>
                <span>Sign in with your email and password</span>
                <form  className='form' onSubmit={this.handleSubmit}>
                    <input 
                    name='email' 
                    type="email" 
                    value={this.state.email}
                    onChange={this.hagleChange}
                    ></input>
                    <label>EMAIL</label>
                    <input 
                    name='password' 
                    type="password" 
                    value={this.state.password}
                    onChange={this.hagleChange}
                    ></input>
                    <label>PASSWORD</label>
                    <CustomButton 
                    type='submit' 
                    value='submit form'>SIGN IN</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;