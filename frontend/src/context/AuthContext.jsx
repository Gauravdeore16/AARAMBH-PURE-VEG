import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('aarambh_token'));
  const navigate = useNavigate();

  useEffect(() => {
    // If we have a token but no user, we'd normally fetch the user profile from API here
    // For now, we'll just mock it or assume user data is in localStorage too
    const savedUser = localStorage.getItem('aarambh_user');
    if (savedUser && token) {
      setUser(JSON.parse(savedUser));
    }
  }, [token]);

  const login = async (email, password) => {
    try {
      const response = await fetch('https://aarambh-backend-ma3z.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      if (!response.ok) throw new Error('Login failed');
      
      const data = await response.json();
      setToken(data.token);
      setUser(data.user);
      
      localStorage.setItem('aarambh_token', data.token);
      localStorage.setItem('aarambh_user', JSON.stringify(data.user));
      
      // Redirect based on role
      if (data.user.role === 'ADMIN' || data.user.role === 'STAFF') {
        navigate('/admin');
      } else {
        navigate('/');
      }
      
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('aarambh_token');
    localStorage.removeItem('aarambh_user');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
