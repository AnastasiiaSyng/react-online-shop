import React from 'react';
import ItemCollection from '../item-collection/item-collection.component';
import './preview-collection.styles.scss';

const PreviewCollection = ({ title, items }) => (
    <div>
        <h1>{title.toUpperCase()}</h1>
        <div>
            {items
                .filter((item, id) => id < 4)
                .map(({id, ...otherItemCollectionProps}) => (
                <ItemCollection key={id} {...otherItemCollectionProps}/>
            ))}
        </div>
    </div>
)

export default PreviewCollection