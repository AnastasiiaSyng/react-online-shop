import React from 'react';
import PreviewCollection from '../../components/preview-collection /preview-collection.component'
import SHOP_DATA from './shop.data';
import Header from '../../components/header/header.component'

class Shop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA    
        }
    }
    render () {
        const {collections} = this.state;
        return (
            <div> 
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        < PreviewCollection key={id} {...otherCollectionProps} />
                    ) )
                }
            </div>
        )
    }
}

export default Shop;