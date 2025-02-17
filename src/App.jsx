import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';
import Add from './components/Add';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/AppBar';
import CredentialsSignInPage from './components/Login';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'item1', price: 1 },
    { id: 2, name: 'item2', price: 2 },
    { id: 3, name: 'item3', price: 3 },
  ]);
  const [count, setCount] = useState(0);

  const sum = () => {
    setCount(count + 1);
  };

  const subtract = () => {
    setCount(count - 1);
  };

  const addItem = (item) => {
    item.id = items.length + 1;
    setItems([...items, item]);
  };

  const delItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Header />
        <Routes>
          <Route path='/' element={<CredentialsSignInPage />} />
          <Route path='/add' element={<Add addItem={addItem} />} />
          <Route
            path='/items'
            element={<List items={items} ondelete={delItem} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <p>{count}</p>
      <Button name='suma' click={sum} />
      <Button name='resta' click={subtract} />
      <Button name='mensaje' click={() => alert('Hola')} /> */}
    </div>
  );
};

export default App;
