import React, { useState } from 'react';
import Button from './Button';

const Add = ({ addItem }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  return (
    <div>
      <input
        type='text'
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type='number'
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <Button name='Add' click={() => addItem({ name, price })}></Button>
    </div>
  );
};

export default Add;
