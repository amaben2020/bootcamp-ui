import React from 'react';
import { ListItems } from './types';

const ListItem = ({ name, rating, description }: ListItems) => {
  return (
    <div>
      <h2>{name}</h2>

      <h4>{description}</h4>

      <h6>{rating}</h6>
    </div>
  );
};

export default ListItem;
