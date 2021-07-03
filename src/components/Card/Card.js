import React from "react";

const Card = ({ title, description, occurredAt, updatedAt }) => {
  return (
    <div>
      title: {title}
      <br />
      description: {description}
      <br />
      occuredAt: {occurredAt}
      <br />
      updatedAt: {updatedAt}
      <br />
      <br />
    </div>
  );
};

export default Card;
