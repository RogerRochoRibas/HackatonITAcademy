import React from "react";
import EmailComponent from "../components/results/InputPeople";
import { ResultsBarLocation } from "../components/results/ResultsBarLocation";

const ResultPage = () => {
  return (
    <div id="resultsPage">
      <ResultsBarLocation />
      <EmailComponent />
    </div>
  );
};

export default ResultPage;
