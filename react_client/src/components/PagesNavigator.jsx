import React from 'react'
import { Link } from 'react-router-dom'

export const PagesNavigator = () => {
    return (
        <div className="pagesnavigator">
            <nav>
                <Link to="/">[Home]</Link>
                <Link to="/about">[About]</Link>
                <Link to="/events">[Events]</Link>
                <Link to="/products">[Products]</Link>
                <Link to="/contact">[Contact]</Link>
                <Link to="/users/login">[Log in]</Link>
                <Link to="/users/signup">[Sign up]</Link>
            </nav>
        </div>
    )
}