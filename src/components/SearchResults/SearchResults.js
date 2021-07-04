import React from "react";
import IncidentCard from "../IncidentCard/IncidentCard";

const SearchResults = ({ incidents }) => {
  return (
    <div>
      <div>total: {incidents.length}</div>
      {incidents.map((incident, incidentIdx) => (
        <IncidentCard key={incidentIdx} incident={incident} />
      ))}
      <div>pagination</div>
    </div>
  );
};

export default SearchResults;
