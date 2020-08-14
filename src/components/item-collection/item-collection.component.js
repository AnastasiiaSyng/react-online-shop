import React from 'react';
import './item-collection.styles.scss'

const ItemCollection = ({id, name, imageUrl, price}) => (
    <div style={{backgroundImage:`url(${imageUrl})`}}>
        <span>{name}</span><span>{price}</span>
    </div>
)

export default ItemCollection;