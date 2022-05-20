import React from 'react'
import { Footer } from "../components/general/footer";
import inputPeople from '../components/results/inputPeople';
//import header from '../components/general/header'

const barLocation = [];

const ResultPage = () => {
    return (
        <div>
            <h1>Its a Match</h1>
            <h3>Vas a desfrutar de unas cervezas en esa ubicacion {barLocation}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius</p>
            <inputPeople />

            <Footer />
        </div>
    );
}

export default ResultPage;
