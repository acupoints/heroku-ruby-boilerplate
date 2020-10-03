import React from 'react'

export const PagesNotFound = ({location}) => {
    return (
        <section className="pagesnotfound">
            <h1>Resource not found at '{location.pathname}'</h1>
        </section>
    )
}