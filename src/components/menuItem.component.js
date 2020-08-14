import React from 'react';
import { withRouter } from 'react-router-dom';

export const menuItem = ({ title, history, linkUrl, match }) => {    
    return (
        <div className="menu-item" 
            onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="content">
                <h1 className="menu-title">{ title }</h1>
                <span className="menu-subtitle">SHOP ONLINE</span>
            </div>
        </div>
    )
}

export default withRouter(menuItem); 
