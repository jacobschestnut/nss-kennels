import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./components/animal/AnimalList"
import { CustomerList } from "./components/Customer/CustomerList"
import { EmployeeList } from "./components/Employee/EmployeeList"
import { LocationList } from "./components/Location/LocationList"


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={<AnimalList />} />

                <Route path="/customers" element={<CustomerList />} />

                <Route path="/employees" element={<EmployeeList />} />

                <Route path="/locations" element={<LocationList />} />
            </Routes>
        </>
    )
}