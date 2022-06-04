import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Navbar from './navbar'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
