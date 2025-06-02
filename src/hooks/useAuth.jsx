import { useState } from 'react';
import { API_URL } from '../App';

export default function useAuth() {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState('');

  const login = async (user) => {
    const response = await fetch(`${API_URL}/login/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    setIsLogin(data.isLogin);
    setToken(data.token);
    return data.isLogin;
  };

  const logout = () => {
    setIsLogin(false);
  };

  return {
    isLogin,
    token,
    login,
    logout,
  };
}
