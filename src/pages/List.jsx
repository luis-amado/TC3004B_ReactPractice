import React from 'react';
import Item from '../components/Item';

const List = ({ items, ondelete }) => {
  return (
    <>
      {items.map((item) => (
        <Item item={item} key={item.id} ondelete={ondelete} />
      ))}
    </>
  );
};

export default List;
