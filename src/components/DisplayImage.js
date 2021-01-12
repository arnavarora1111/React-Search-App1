import React, {Component} from 'react';

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

class DisplayImage extends Component {
    constructor(props) {
        super(props);
        this.state = {spans: 0}
        this.imageRef = React.createRef();
    }

    componentDidMount() {
            this.imageRef.current.addEventListener('load', this.setSpans);
        }

        setSpans = () => {
            const height = this.imageRef.current.clientHeight;
            const spansRows = Math.ceil(height/10);
            this.setState({spans: spansRows});
        }
    
    render() {
        return (
            <div style = {{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef}
                    src={this.props.image.urls.regular}
                    alt={this.props.image.alt_description}
                    onClick={() => imageDownload(this.props.image.urls.regular)} />
            </div>
        )
    }
}

export default DisplayImage;