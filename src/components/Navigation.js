import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import '../styles/navigation.css'

const Navigation = () => {
    return (
        <nav className="navigation">
            <h1>Last Writes</h1>
            <ul>
                    <Link to="/">Home</Link>
                    <Link to="/writers">Writers</Link>
                    <Link to="/about">About</Link>
                    | 
                        <Link to="/login" className="login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
            </ul>
        </nav>
    )
}

export default Navigation