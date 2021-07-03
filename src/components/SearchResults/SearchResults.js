import React from "react";
import Card from "../Card/Card";

const SearchResults = ({ incidents }) => {
  return (
    <div>
      total: {incidents.length}
      {incidents.map((incident, incidentIdx) => (
        <Card
          key={incidentIdx}
          title={incident.title}
          description={incident.description}
          occurredAt={incident.occurred_at}
          updatedAt={incident.updated_at}
        />
      ))}
      pagination
    </div>
  );
};

export default SearchResults;
