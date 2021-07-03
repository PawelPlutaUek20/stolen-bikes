import React, { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm/SearchForm";
import SearchResults from "./components/SearchResults/SearchResults";

const App = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    fetch(
      "https://bikewise.org/api/v2/incidents?page=1&per_page=10&incident_type=theft&proximity=berlin"
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        setIncidents(jsonResponse.incidents);
      });
  }, []);

  return (
    <div className="App">
      <header>Police Department of Berlin</header>
      <SearchForm />
      <SearchResults incidents={incidents} />
    </div>
  );
};

export default App;
