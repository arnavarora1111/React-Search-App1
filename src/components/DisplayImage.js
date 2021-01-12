import React, {Component} from 'react';

// function to download image when user clicks on it
//saves image as .png
function imageDownload(src) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
        // create Canvas
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        // create <a> tag
        const a = document.createElement("a");
        a.download = "download.png";
        a.href = canvas.toDataURL("image/png");
        a.click();
    };
}

//displays each image
class DisplayImage extends Component {
    constructor(props) {
        super(props);
        this.state = 0;
    }
    
    render() {
        return (
            <div>
                <img src={this.props.image.urls.regular}
                    alt={this.props.image.alt_description}
                    onClick={() => imageDownload(this.props.image.urls.regular)} />
            </div>
        )
    }
}

export default DisplayImage;