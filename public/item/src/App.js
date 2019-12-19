import React from 'react';
import logo from './logo.svg';
import './App.css';

class RList extends React.Component {
    render () {
        const items = this.props.items.split(',')
        const itemsObj = items.map(
            (e) => {
                return <li>{e}</li>
            })
    }
    let title =this.props.title
    if (!title)title = "LIST"
    return (
    <div>
        <h3>{title}</h3>
        <ul>{itemsObj}</ul>
    </div>
    )
}

export default RList;
