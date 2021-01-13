//displays all images on screen
import React from 'react';
import './Images.css';
import DisplayImage from './DisplayImage';

//maps over props.foundImages array
const Images = (props) => {
    const images = props.foundImages.map(image => {
        //each image needs a unique id
        return <DisplayImage key={image.id} image={image} />
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
export default Images;