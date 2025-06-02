import './App.css';
import { useEffect, useState } from 'react';
import List from './pages/List';
import Add from './components/Add';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/AppBar';
import Login from './pages/Login';
import Home from './pages/Home';
import ConditionalRoute from './components/AuthedRoute';
import ItemInfo from './components/ItemInfo';
import LifeCycle from './pages/LifeCycle';
import useAuth from './hooks/useAuth';
import useItems from './hooks/useItems';

export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const App = () => {
  const { login, logout, token, isLogin } = useAuth();
  const { addItem, delItem, items, getItems } = useItems({ token });

  useEffect(() => {
    if (isLogin) {
      getItems();
    }
  }, [isLogin]);

  const [show, setShow] = useState(false);

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
            <Route path='/items/:id' element={<ItemInfo items={items} />} />
          </Route>
          <Route />
        </Routes>
      </BrowserRouter>
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      {show && <LifeCycle />}
    </div>
  );
};

export default App;
