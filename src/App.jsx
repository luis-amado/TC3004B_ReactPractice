import './App.css';
import { useState } from 'react';
import List from './pages/List';
import Add from './components/Add';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/AppBar';
import Login from './pages/Login';
import Home from './pages/Home';
import ConditionalRoute from './components/AuthedRoute';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'item1', price: 1 },
    { id: 2, name: 'item2', price: 2 },
    { id: 3, name: 'item3', price: 3 },
  ]);

  const [isLogin, setIsLogin] = useState(false);

  const addItem = (item) => {
    item.id = items.length + 1;
    setItems([...items, item]);
  };

  const delItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const login = (user) => {
    if (user.username === 'luisamado' && user.password === '123') {
      setIsLogin(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLogin(false);
  };

  return (
    <div>
      <BrowserRouter>
        {isLogin && <ResponsiveAppBar logout={logout} />}
        <Routes>
          <Route path='/' element={<Login login={login} />} />
          <Route
            element={<ConditionalRoute condition={isLogin} redirectTo='/' />}
          >
            <Route path='/home' element={<Home />} />
            <Route path='/add' element={<Add addItem={addItem} />} />
            <Route
              path='/items'
              element={<List items={items} ondelete={delItem} />}
            />
          </Route>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
