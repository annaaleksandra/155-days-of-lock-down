import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
    const randomDay = Math.floor(Math.random() * Math.floor(156));
    let url = `/day${randomDay}`.replace(/\s/g, '');
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    155 Days of Lockdown
                </Link>
            </h1>
            <ul className={headerStyles.nav}>
                <Link className={headerStyles.item} to="/">Home</Link>
                <Link className={headerStyles.item} to={url}>Random</Link>
                <Link className={headerStyles.item}to="/about">About</Link>
            </ul>
        </header>
    )
}

export default Header