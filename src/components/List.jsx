import React from 'react';
import Item from './Item';

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
