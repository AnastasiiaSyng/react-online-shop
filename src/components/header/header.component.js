import React from 'react'
import { Link } from "react-router-dom"
import './header.styles.scss'

const Header = () => (
    <div className='header'>
        <Link to='/'>HOME</Link>
        <div className='menu'>
        <Link className='item'  to='/shop'>SHOP</Link>
        <Link className='item'  to='/contact'>CONTACT</Link>
        <Link className='item'  to='/signin'>SING IN</Link>
        </div>
    </div>
)

export default Header