import React, { Component } from 'react';
import "./Address.css"
class Address extends Component {
  render() {
    return (
	<div className="Address">
	   <div className="name">
       {this.props.name}
     </div>
	   <div className="street">
       {this.props.street}
	   </div>
     <div className="city state zip">
       <span className="city">{this.props.city}</span>,
       <span className="state">{this.props.state}</span>
       <span className="zip">{this.props.zip}</span>
     </div>
	</div>
    );
  }
}

export default Address;
