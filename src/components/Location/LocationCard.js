import React from "react"
import "./Location.css"
import { Link } from "react-router-dom";

export const LocationCard = ({ location, handleDeleteLocation }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={'https://www.neweuropetours.eu/wp-content/uploads/2018/09/mun-castle-21-1600x900.jpg'} alt="location" />
          </picture>
          <h3>Name: <span className="card-location">
            {location.name}
          </span></h3>
          <p>Address: {location.address}</p>
          <button type="button" onClick={() => handleDeleteLocation(location.id)}>This Location is Closed</button>
          <Link to={`/locations/${location.id}`}>
              <button>Details</button>
          </Link>
        </div>
      </div>
    );
  }