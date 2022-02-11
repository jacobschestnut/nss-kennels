import React from "react"
import "./Customer.css"

export const CustomerCard = ({ customer, handleDeleteCustomer }) => (
    <div className="card">
        <div className="card-content">
          <picture>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/3/38/Michael_Douglas_C%C3%A9sar_2016_3.jpg'} alt="Customer" />
          </picture>
          <h3>Name: <span className="card-customername">
            {customer.name}
          </span></h3>
          <p>Phone Number: {customer.phone}</p>
          <p>Address: {customer.address}</p>
          <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Delete</button>
        </div>
      </div>
)