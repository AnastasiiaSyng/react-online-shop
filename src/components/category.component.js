import React, { Component } from 'react';
import MenuItem from './menuItem.component'

class Category extends Component {
    constructor() {
        super()
        this.state = {
            categories : [{
                title: 'DANCE',
                id: 1
                },
                {
                title: 'BOXING',
                id: 2
                },
                {
                title: 'SWIMMING',
                id: 3
                },
                {
                title: 'YOGA',
                id: 4
                },
                {
                title: 'SNOWBOARDING',
                id: 5
                }]
        }
    }
    render() {
        return (
            <div  className="menu">
                 {this.state.categories.map(({ title, id })=> (
                    < MenuItem  key={id}  title={title}/> 
                ))} 
            </div>
        )
    }
}

export default Category;
