import React from 'react';

const ListItem = ({ name, rating, description }) => {
  return (
    <div>
      <h2>{name}</h2>

      <h4>{description}</h4>

      <h6>{rating}</h6>
    </div>
  );
};

export default ListItem;
