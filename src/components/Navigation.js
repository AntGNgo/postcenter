import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import '../styles/navigation.css'

const Navigation = () => {
    return (
        <nav className="navigation">
            <h1>Writing Hub</h1>
            <ul>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/writers">Writers</Link></li>
                   <li><Link to="/about">About</Link></li>
                   <li className="divider">|</li>
                   <li><Link to="/login" className="login">Login</Link></li>
                   <li><Link to="/signup">Sign Up</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation