import React from "react"
import { Link } from "react-router-dom";
import "./Employee.css"

export const EmployeeCard = ({ employee, handleDeleteEmployee }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={'https://c8.alamy.com/comp/PK6ARW/happy-positive-nice-man-achieving-his-success-PK6ARW.jpg'} alt="employee" />
          </picture>
          <h3>Name: <span className="card-employeename">{employee.name}</span></h3>
          <p>Location: {employee.locationId}</p>
          <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Terminate</button>
          <Link to={`/employees/${employee.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
      </div>
    );
  }