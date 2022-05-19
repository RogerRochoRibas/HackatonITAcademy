import React from 'react'
import { Footer } from "../components/general/footer";
import EmailComponent from '../components/results/inputPeople';
//import header from '../components/general/header'

const ResultPage = () => {
    return (
        <div>
            <EmailComponent />
            <Footer />
        </div>
    );
}

export default ResultPage;
