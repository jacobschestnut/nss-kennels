import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./components/animal/AnimalList"
import { CustomerList } from "./components/Customer/CustomerList"
import { EmployeeList } from "./components/Employee/EmployeeList"
import { LocationList } from "./components/Location/LocationList"
import { AnimalDetail } from "./components/animal/AnimailDetail"
import { LocationDetail } from "./components/Location/LocationDetail"
import { AboutPage } from "./components/about/AboutPage"
import { CareersPage } from "./components/careers/CareersPage"
import { AnimalForm } from "./components/animal/AnimalForm"
import { CustomerForm } from "./components/Customer/CustomerForm"
import { EmployeeForm } from "./components/Employee/EmployeeForm"
import { LocationForm } from "./components/Location/LocationForm"
import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'
import { AnimalEditForm } from './components/animal/AnimalEditForm'
import { EmployeeEditForm } from "./components/Employee/EmployeeEditForm"
import { LocationEditForm } from "./components/Location/LocationEditForm"

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {

    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
    
    const setAuthUser = (user) => {
      sessionStorage.setItem("kennel_customer", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute> }/>

                {/* Make sure you add the `exact` attribute here */}
                <Route exact path="/animals" element={
                    <PrivateRoute>
                        <AnimalList />
                    </PrivateRoute>}/>

                <Route exact path="/animals/:animalId" element={
                    <PrivateRoute>
                        <AnimalDetail />
                    </PrivateRoute>
                } />

                <Route path="/animals/:animalId/edit" element={
                    <PrivateRoute>
                        <AnimalEditForm />
                    </PrivateRoute>} />

                <Route path="/animals/create" element={
                    <PrivateRoute>
                        <AnimalForm />
                    </PrivateRoute>}/>

                <Route path="/customers" element={
                    <PrivateRoute>
                        <CustomerList/>
                    </PrivateRoute>} />

                <Route path="/customers/create" element={
                    <PrivateRoute>
                        <CustomerForm />
                    </PrivateRoute>} />

                <Route path="/employees" element={
                    <PrivateRoute>
                        <EmployeeList />
                    </PrivateRoute>} />

                <Route path="/employees/:employeeId/edit" element={
                    <PrivateRoute>
                        <EmployeeEditForm />
                    </PrivateRoute>} />

                <Route path="/employees/create" element={
                    <PrivateRoute>
                        <EmployeeForm />
                    </PrivateRoute>} />

                <Route exact path="/locations" element={
                    <LocationList />} />

                <Route path="/locations/:locationId" element={
                    <PrivateRoute>
                        <LocationDetail />
                    </PrivateRoute>} />

                <Route path="locations/create" element={
                    <PrivateRoute>
                        <LocationForm />
                    </PrivateRoute>} />

                <Route path="/locations/:locationId/edit" element={
                    <PrivateRoute>
                        <LocationEditForm />
                    </PrivateRoute>} />

                <Route path="/about" element={<AboutPage />} />

                <Route path="/careers" element={<CareersPage />} />

                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />

                <Route exact path="/register" element={<Register />} />

            </Routes>
        </>
    )
}