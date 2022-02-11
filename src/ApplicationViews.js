import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./components/animal/AnimalList"
import { CustomerList } from "./components/Customer/CustomerList"
import { EmployeeList } from "./components/Employee/EmployeeList"
import { LocationList } from "./components/Location/LocationList"
import { AnimalDetail } from "./components/animal/AnimailDetail"
import { LocationDetail } from "./components/Location/LocationDetail"
import { AboutPage } from "./components/about/AboutPage"
import { CareersPage } from "./components/careers/CareersPage"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Make sure you add the `exact` attribute here */}
                <Route exact path="/animals" element={<AnimalList />} />
                <Route path="/animals/:animalId" element={<AnimalDetail />} />
                {/*This is a new route to handle a URL with the following pattern:http://localhost:3000/animals/1
                It will not handle the following URL because the `(\d+)`
                matches only numbers after the final slash in the URL
                http://localhost:3000/animals/jack
                */}

                <Route path="/customers" element={<CustomerList />} />

                <Route path="/employees" element={<EmployeeList />} />

                <Route exact path="/locations" element={<LocationList />} />
                <Route path="/locations/:locationId" element={<LocationDetail />} />

                <Route path="/about" element={<AboutPage />} />

                <Route path="/careers" element={<CareersPage />} />
            </Routes>
        </>
    )
}