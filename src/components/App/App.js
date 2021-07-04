import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";

const App = () => {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://bikewise.org:443/api/v2/incidents?page=1&per_page=10&incident_type=theft&proximity=berlin"
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        setLoading(false);
        setIncidents(jsonResponse.incidents);
      })
      .catch((e) => {
        setLoading(false);
        setError("Ooops, something went wrong");
      });
  }, []);

  return (
    <div className="App">
      <header>Police Department of Berlin</header>
      <SearchForm />
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <SearchResults incidents={incidents} />
      )}
    </div>
  );
};

export default App;
