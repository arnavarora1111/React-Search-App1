//child component of Images

import React, {Component} from 'react';

//displays each image
class DisplayImage extends Component {

    //send url to parent component (Images.js)
    //used for the clickedImages List
    sendUrl = (url) => {
        this.props.parentCallback(url);
    }

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