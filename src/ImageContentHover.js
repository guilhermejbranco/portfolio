import React from 'react';
import effects from './effects';
import './effects.css';
import Loader from 'react-loader-spinner'

class ImageContentHover extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          isloading: true,
          techStack: []
        };
    
      }
      
    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    loaded(){
        this.sleep(500).then(() => {
            this.setState({isloading: false})
        })
        
    }

    render() {
        const {image, content, tileWidth, tileHeight, effect, className} = this.props;
        const classNameText = 'image-container '+(className || '');
        return (
            <span>

            <div className={classNameText} style={{width: tileWidth, height: tileHeight}}
                onMouseOver={(e) => {
                    this.onImgMouseOver(e, effect);
                }}
                onMouseOut={(e) => {
                    this.onImgMouseOut(e, effect);
                }}>
                <img src={image} 
                style={{width: tileWidth, height: tileHeight}}
                className={this.state.isloading ? "d-none" : ""}
                onLoad={() => this.loaded()}
                ></img>
                {this.state.isloading && 
                <div className="text-center pt-5">
                <Loader
                type="TailSpin"
                color="lightgreen"
                height={100}
                width={100}
                
       
             /> </div>}
                <div className="hover-content" 
                    ref={(ref) => this.hoverRef = ref}>
                    <div className="title">{content.title || ''}</div>
                    <div className="body">{content.body || ''}</div>
                </div>
            </div>
            </span>
        );
    }

    onImgMouseOver(event, effect) {
        if (this.hoverRef && this.hoverRef.classList) {
            this.hoverRef.classList.remove(effects[effect]);
            this.hoverRef.classList.add(effect);    
        }
        event.stopPropagation();
        event.preventDefault();
    }

    onImgMouseOut(event, effect) {
        if (this.hoverRef && this.hoverRef.classList) {
            this.hoverRef.classList.add(effects[effect]);    
            this.hoverRef.classList.remove(effect);
        }
        event.stopPropagation();
        event.preventDefault();
    }
}
export default ImageContentHover;