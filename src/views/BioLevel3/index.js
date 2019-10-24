import React, { Component } from "react";
import { Map, TileLayer, Marker, Tooltip, Popup } from "react-leaflet";
import MessageCardForm from "../../components/MessageCardForms/MessageCardForm";
class MapExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: []
      // flag:true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { markers } = this.state;
    alert(`You have been signed in: ${e.latlng.lat} : ${e.latlng.lng}`);
    markers.push(e.latlng);
    this.setState({
      markers
    });
  }

  handleMarkerClick(e) {
    const { markers } = this.state;
    // console.log(markers);
    // console.log(e);
    let index = markers.indexOf(e);
    // console.log(index);
    if (index > -1) {
      markers.splice(index, 1);
    }
    this.setState({
      markers
    });
    alert("You have removed the signed room");
  }

  render() {
    return (
      <>
        <div style={{ height: "180px" }}>
          <Map
            center={[5.090944175033399, -11]}
            zoom={4}
            onClick={this.handleClick}
          >
            <TileLayer
              url={
                "https://s4305352-deco7180.uqcloud.net/maps/Floor_Plan_0080_2/{z}/{x}/{y}.png"
              }
            />
            {this.state.markers.map((position, idx) => (
              <Marker
                key={`marker-${idx}`}
                position={position}
                onClick={() => this.handleMarkerClick(position)}
              >
                <Tooltip>
                  <span>This room has been signed!</span>
                </Tooltip>
              </Marker>
            ))}
          </Map>
        </div>
        <MessageCardForm
          cancelMessage={false}
          showMessageForm={true}
          sendingMessage={false}
          sentMessage={false}
          haveUsersLocation={true}
          formSubmitted={false}
          valueChanged={false}
          formIsValid={false}
        ></MessageCardForm>
      </>
    );
  }
}

export default MapExample;
