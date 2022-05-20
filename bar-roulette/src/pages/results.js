import React from "react";
import EmailComponent from "../components/results/inputPeople";
import { ResultsBarLocation } from "../components/results/resultsBarLocation";

const ResultPage = () => {
  return (
    <div id="resultsPage">
      <ResultsBarLocation />
      <EmailComponent />
    </div>
  );
};

export default ResultPage;
