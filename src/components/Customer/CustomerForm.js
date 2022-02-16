import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addCustomer } from '../../modules/CustomerManager';
import './CustomerForm.css'

export const CustomerForm = () => {

	const [customer, setCustomer] = useState({
		name: "",
		phone: "",
		address: ""
	});

	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const handleControlledInputChange = (event) => {
	
		const newCustomer = { ...customer }

		let selectedVal = event.target.value
		
		newCustomer[event.target.id] = selectedVal
		
		setCustomer(newCustomer)
	}

	const handleClickSaveCustomer = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form
		
        addCustomer(customer).then(() => navigate("/customers"))
	}

	return (
		<form className="customerForm">
			<h2 className="customerForm__title">New Customer</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Customer name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Customer name" value={customer.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="phone">Phone number:</label>
					<input type="text" id="phone" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Phone number" value={customer.phone} />
				</div>
			</fieldset>
			<fieldset>
                <div className="form-group">
					<label htmlFor="address">Address:</label>
					<input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Address" value={customer.address} />
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveCustomer}>
				Save Customer
            </button>
		</form>
	)
};