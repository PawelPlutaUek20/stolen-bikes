import React from "react";
import bike from "./bike.svg";

const IncidentCard = ({ incident }) => {
  return (
    <div>
      {incident.media.image_url_thumb ? (
        <img alt="bike" src={incident.media.image_url_thumb} />
      ) : (
        <img alt="bike" src={bike} width={300} height={300} />
      )}
      <br />
      title: {incident.title}
      <br />
      description: {incident.description}
      <br />
      occuredAt: {new Date(incident.occurred_at * 1000).toLocaleString()}
      <br />
      updatedAt: {new Date(incident.updated_at * 1000).toLocaleString()}
      <br />
      address: {incident.address}
      <br />
      <br />
    </div>
  );
};

export default IncidentCard;
