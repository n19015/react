import React from 'react';
import logo from './logo.svg';
import './App.css';

class PhotoText extends React.Component {
    getImageURL () {
        const id = this.props.image
        const url = "img/" + id + ".jpeg"
        return url
    }
    render () {
        const labrl = this.props.label
        const url =  this.getImageURL()
        const boxStyle = {
            border: "1px solid silver",
            margin: "8px",
            padding: "4px"
        }
        return (
        <div style={boxStyle}>
            <img src={url} width='128'/>
            <span> {label} </span>
        </div>)
    }
}
const dom = 
    <div>
        <PhotoText image='pic1' label="gae" />
        <PhotoText image='pic2' label="ehll" />
        <photoText image='pic3' label="heheh" />
    </div>

export default App;
