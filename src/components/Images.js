//displays all images on screen
import React from 'react';
import './Images.css';
import DisplayImage from './DisplayImage';

class Images extends React.Component {

    state = {
        clickedImages: [],
    }

    sendUrlToApp = (url) => {
        // console.log(url);
        // console.log(this.state.clickedImagesList);
        this.props.parentCallBack1(url);
    }
    
    //function appends the url link to clickedImages Array
    //function called when user clicks on an image
    callbackFunction = (childData) => {
        console.log(this.props.searchTerm)
        this.setState({clickedImages: [...this.state.clickedImages, childData]})
        console.log(childData)
        console.log(this.state.clickedImages)

        // var dict = {};
        // dict[this.props.searchTerm] = this.state.clickedImages
        // console.log(dict)
        // var json = JSON.stringify(dict);
        // var a = document.createElement("a")
        // var file = new Blob([json], {type: 'text/json'});
        // a.href = URL.createObjectURL(file);
        // a.download = "interest.json";
        // a.click();
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