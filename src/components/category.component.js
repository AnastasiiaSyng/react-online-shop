import React, { Component } from 'react';
import MenuItem from './menuItem.component'

class Category extends Component {
    constructor() {
        super()
        this.state = {
            categories : [{
                title: 'DANCE',
                id: 1,
                linkUrl: 'dance'
                },
                {
                title: 'BOXING',
                id: 2,
                linkUrl: 'boxing'
                },
                {
                title: 'SWIMMING',
                id: 3,
                linkUrl: 'swimming'
                },
                {
                title: 'YOGA',
                id: 4,
                linkUrl: 'yoga'
                },
                {
                title: 'SNOWBOARDING',
                id: 5,
                linkUrl: 'snowboarding'
                }]
        }
    }
    render() {
        return (
            <div  className="menu">
                 {this.state.categories.map(({id, ...categoriesProps})=> (
                    < MenuItem  key={id} {...categoriesProps}/> 
                ))} 
            </div>
        )
    }
}

export default Category;
