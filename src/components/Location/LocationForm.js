import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addLocation } from '../../modules/LocationManager';
import './LocationForm.css'

export const LocationForm = () => {

	const [location, setLocation] = useState({
		name: "",
		address: ""
	});

	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const handleControlledInputChange = (event) => {
	
        const newLocation = {...location}
        
		let selectedVal = event.target.value
	
		newLocation[event.target.id] = selectedVal
		
		setLocation(newLocation)
	}


	const handleClickSaveEmployee = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

        addLocation(location)
			.then(() => navigate("/location"))
		}

	return (
		<form className="locationForm">
			<h2 className="locationForm__title">New Location</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Location name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={location.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="address">Address:</label>
					<input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location address" value={location.address} />
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveEmployee}>
				Save Location
          </button>
		</form>
	)
};