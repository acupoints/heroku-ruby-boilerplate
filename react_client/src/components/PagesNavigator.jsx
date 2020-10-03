import React from 'react'
import { Link } from 'react-router-dom'

export const PagesNavigator = () => {
    return (
        <div className="pagesnavigator">
            <nav>
                <Link to="/">[Home]</Link>
                <Link to="about">[About]</Link>
                <Link to="events">[Events]</Link>
                <Link to="products">[Products]</Link>
                <Link to="contact">[Contact]</Link>
            </nav>
        </div>
    )
}