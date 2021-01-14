//displays all images on screen
import React from 'react';
import './Images.css';
import DisplayImage from './DisplayImage';

class Images extends React.Component {

    state = {
        clickedImages: [],
    }

    //sends url to the main App Component
    //used for the clickedImages List
    sendUrlToApp = (url) => {
        this.props.parentCallBack1(url);
    }
    
    render() {
        const images = this.props.foundImages.map(image => {
            //each image needs a unique id
            return <DisplayImage key={image.id} image={image} 
                    parentCallback = {this.sendUrlToApp}/>
        });
        return (
            <div className="style__image">
                <div className="style__image"> {images[0]} </div> 
                {images[1]} 
                {images[2]} 
                {images[3]} 
                {images[4]} 
                {images[5]} 
                {images[6]} 
            </div>
        )
    }
}
export default Images;