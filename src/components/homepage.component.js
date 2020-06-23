import React from 'react';
import '../styles/homepage.styles.scss'

const Homepage = () => {
    return (
        <div className='homepage'>
            <div className="menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="menu-title">SNOWBOARING</h1>
                        <span className="menu-subtitle">SHOP ONLINE</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="menu-title">DANCE</h1>
                        <span className="menu-subtitle">SHOP ONLINE</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="menu-title">YOGA</h1>
                        <span className="menu-subtitle">SHOP ONLINE</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="menu-title">SWIMMING</h1>
                        <span className="menu-subtitle">SHOP ONLINE</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="menu-title">BOXING</h1>
                        <span className="menu-subtitle">SHOP ONLINE</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;