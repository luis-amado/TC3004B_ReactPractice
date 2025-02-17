import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = ({ addItem }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    addItem({ name, price });
    setName('');
    setPrice('');
    navigate('/items');
  };

  return (
    <form onSubmit={submit}>
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
      <input type='submit' value='Add' />
    </form>
  );
};

export default Add;
