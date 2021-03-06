import React, { useState, useEffect } from 'react';
//import the components we will need
import { EmployeeCard } from './EmployeeCard';
import { getAllEmployees, getEmployeeById, deleteEmployee } from '../../modules/EmployeeManager';
import { useNavigate } from 'react-router-dom';

export const EmployeeList = () => {

    const navigate = useNavigate()

    // The initial state is an empty array
    const [employees, setEmployees] = useState([]);

    const handleDeleteEmployee = id => {
        deleteEmployee(id)
        .then(() => getAllEmployees().then(setEmployees));
    };
  
    const getEmployees = () => {
      // After the data comes back from the API, we
      //  use the setAnimals function to update state
      return getAllEmployees().then(employeesFromAPI => {
        setEmployees(employeesFromAPI)
      });
    };
  
    // got the animals from the API on the component's first render
    useEffect(() => {
      getEmployees();
    }, []);
  
    // Finally we use .map() to "loop over" the animals array to show a list of animal cards
    return (
      <div className="container-cards">
        <section className="section-content">
          <button type="button"
              className="btn"
              onClick={() => {navigate("/employees/create")}}>
              New Employee
          </button>
        </section>
        {employees.map(employee => <EmployeeCard key={employee.id} employee={employee} handleDeleteEmployee={handleDeleteEmployee} />)}
      </div>
    );
  };