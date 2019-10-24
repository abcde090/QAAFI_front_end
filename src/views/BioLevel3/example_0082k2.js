import React, { Component } from "react";
import { Map, TileLayer, Marker, Tooltip, Popup } from "react-leaflet";
import MessageCardForm from "../../components/MessageCardForms/MessageCardForm";

class MapExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haveUsersLocation: false,
      markers: [],
      messages: [],
      userMessage: {
      name: '',
      message: ''
    }
      // flag:true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  changeName(event) {
    const  {name, value }  = event.target;
    this.setState((prevState) => ({
      userMessage: {
        ...prevState.userMessage,
        [name]: value
      }
    }))
 
  }


  handleClick(e) {
    const { markers, messages } = this.state;
    // alert(`You have been signed in: ${e.latlng.lat} : ${e.latlng.lng}`);
    /*     let txt;
    let person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = "Hello " + person + "! How are you today?";
    } */
    
    messages[e.latlng] = this.state.userMessage;
    markers.push(e.latlng);
    this.setState({
      messages,
      haveUsersLocation: true,
      markers
    });
  }

  handleMarkerClick(e) {
    const { markers, messages } = this.state;
    // console.log(markers);
    // console.log(e);
    let index = markers.indexOf(e);
    // console.log(index);
    if (index > -1) {
      markers.splice(index, 1);
      messages.splice(index, 1);
    }
    this.setState({
      messages,
      haveUsersLocation: false,
      markers
    });
    alert("You have removed the signed room");
  }

  render() {
    return (
      <>
        <div style={{ height: "180px" }}>
          <Map
            center={[53.20685506162778, -39]}
            zoom={4}
            onClick={this.handleClick}
          >
            <TileLayer
              url={
                "https://s4305352-deco7180.uqcloud.net/maps/Floor_plan_0082k_2/{z}/{x}/{y}.png"
              }
            />
            {this.state.markers.map((position, idx) => (
              <Marker
                key={`marker-${idx}`}
                position={position}
                onClick={() => this.handleMarkerClick(position)}
              >
                <Tooltip>
                  <p>
                    <em>{this.state.messages[position].name}:</em> {this.state.messages[position].message}
                  </p>
                </Tooltip>
              </Marker>
            ))}
          </Map>
        </div>
          <MessageCardForm
          nameChanged={event => this.changeName(event)}
          messageChanged={event => this.changeName(event)}
        ></MessageCardForm>
      </>
    );
  }
}

export default MapExample;
