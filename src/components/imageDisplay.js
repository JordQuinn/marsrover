import React, { Component } from 'react'

export default class ImageDisplay extends Component {
  static defaultProps = {
    images:[]
  }
  render() {
    return(
      <div>
        <ul className = "display">
          {this.props.images.map(function(image, i){
            return(
              <li key={"photo"+i}><img src={image.img_src}/></li>
              )
          })}
        </ul>
      </div>
    )
  }
}
