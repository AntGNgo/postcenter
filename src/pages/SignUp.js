import axios from 'axios'
import React, { useState } from 'react'
import '../styles/signup.css'



const SignUp = () => {
    const [formInfo, setFormInfo] = useState({})

    const onFormChange = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.id]: e.target.value
        })    
    }

    const onFormSubmit = async (e) => {
        e.preventDefault()
            axios.post('http://localhost:4000/users', formInfo)
                .then((response) => console.log(response))
                .catch((error) => console.log(error))
    }


    return (
        <div>
            <form className='signup-form global-h1' onSubmit={onFormSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required="true" onChange={onFormChange} />
                <label htmlFor="email">Email:</label>
                <input type="text" type="email" id="email" required="true" onChange={onFormChange} />
                <label htmlFor="password">Password:</label>
                <input type="text" type="password" id='password' required="true" onChange={onFormChange} />
                <button>Sign Up!</button>
            </form>
        </div>
    )
}

export default SignUp