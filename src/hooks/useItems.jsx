import { useState } from 'react';
import { API_URL } from '../App';

export default function useItems({ token }) {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const response = await fetch(`${API_URL}/items`, {
      headers: { Authorization: token },
    });
    const data = await response.json();
    setItems(data);
  };

  const addItem = async (item) => {
    const response = await fetch(`${API_URL}/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    setItems([...items, data.item]);
  };

  const delItem = async (id) => {
    await fetch(`${API_URL}/items/${id}`, {
      method: 'DELETE',
      headers: { Authorization: token },
    });
    setItems(items.filter((item) => item.id !== id));
  };

  return {
    getItems,
    addItem,
    delItem,
    items,
  };
}
