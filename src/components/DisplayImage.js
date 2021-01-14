//child component of Images

import React, {Component} from 'react';

//displays each image
class DisplayImage extends Component {

    sendUrl = (url) => {
        // console.log(url);
        // console.log(this.state.clickedImagesList);
        this.props.parentCallback(url);
    }

    // sendUrl2 

    render() {
        return (
            <div>
                <img src={this.props.image.urls.regular}
                    alt={this.props.image.alt_description}
                    onClick={() => this.sendUrl(this.props.image.urls.full)} />
            </div>
            
        )
    }
}

export default DisplayImage;