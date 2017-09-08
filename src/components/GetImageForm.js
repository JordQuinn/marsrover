import React, { Component } from 'react'
import GetImageButton from '../components/getImageButton'
import ImageDisplay from '../components/imageDisplay'
const api_key = "KHnmC32Av1ePT2niJfTC8Cjtzta9nOxyLu8yNvB1"


class GetImageForm extends Component {
  constructor (){
    super()
    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: ""
    }
  }

  handleRover = (e) => {
    this.setState({
      rover: e.target.value
    })
  }
  handleCamera = (e) => {
    this.setState({
      camera: e.target.value
    })
  }
  handleSol = (e) => {
    this.setState ({
      sol: e.target.value
    })
  }
  fetchRoverImage = (e) => {
    e.preventDefault()
    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.rover}/photos?sol=${this.state.sol}&camera=${this.state.camera}&api_key=${api_key}`;
    fetch(imageUrl)
    .then(response => {
        return response.json()
      })
    .then(data => {
      this.setState ({
        images: data.photos
      })
    })
  }


  render() {
    return(
      <div className="wrapper">
        <form onSubmit={this.fetchRoverImage}>
          <label htmlFor="rover">Rover: &nbsp;</label>
              <select onChange={this.handleRover} id="rover" value={this.state.value}>
                <option value="Curiosity">Curiosity</option>
                <option value="Opportunity">Opportunity</option>
                <option value="Spirit">Spirt</option>
              </select><br></br>
          <label htmlFor="camera">Camera Type: &nbsp;</label>
            <select onChange={this.handleCamera} id="rover" value={this.state.value}>
              <option value="fhaz">FHAZ (Front Hazard)</option>
              <option value="rhaz">RHAZ (Rear Hazard)</option>
              <option value="navcam">NAVCAM (Navigation Cam)</option>
            </select><br></br>
          <label htmlFor="sol">Martian Sol: 1000-2000&nbsp;</label>
          <input type="text" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
          <h3>{this.state.rover}</h3>
          <GetImageButton />
        </form>
        <ImageDisplay images={this.state.images}/>
      </div>

    )
  }
}

export default GetImageForm;
