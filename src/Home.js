import React from "react";
import { PropsAndState } from './components/PropsAndState'

export const Home = () => {

    const addressObj = {
        streetAddress: "123 NSS Way",
        city: "Nashville",
        state: "TN",
        zip: 37536
      }

    return(
        <>
            <h2>Nashville Kennels</h2>

            <small>Loving care when you're not there.</small>

            <address>
                <div>Visit Us at the Nashville North Location</div>
                <div>500 Puppy Way</div>
            </address>
            <PropsAndState yourName={"Jake"} address={addressObj}/>
        </>)
}