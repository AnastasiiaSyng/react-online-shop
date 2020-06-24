import React from 'react'

export const menuItem = ({ title }) => {
    return (
        <div className="menu-item">
            <div className="content">
                <h1 className="menu-title">{ title }</h1>
                <span className="menu-subtitle">SHOP ONLINE</span>
            </div>
        </div>
    )
}

export default menuItem; 