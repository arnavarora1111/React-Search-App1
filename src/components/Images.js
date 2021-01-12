import React from 'react';
import './Images.css';
import DisplayImage from './DisplayImage';

const Images = (props) => {
    const imgs = props.foundImages.map(img => {
        return <DisplayImage key={img.id} image={img} />
    });

    return (
        <div className="style__image">
            <div className="style__image">{imgs[0]}</div> 
            {imgs[1]} 
            {imgs[2]} 
            {imgs[3]} 
            {imgs[4]} 
            {imgs[5]} 
            {imgs[6]} 
        </div>
    )
}
export default Images;