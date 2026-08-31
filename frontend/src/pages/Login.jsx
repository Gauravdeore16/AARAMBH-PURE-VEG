import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    const success = await login(email, password);
    if (!success) {
      setError('Invalid email or password');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="pt-20 pb-20 max-w-md mx-auto px-4 min-h-[70vh] flex flex-col justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
        <h1 className="text-3xl font-bold text-brand-primary mb-2">Welcome Back</h1>
        <p className="text-gray-500 mb-8">Sign in to your account</p>
        
        {error && <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-6 text-sm">{error}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Mail size={20} />
            </div>
            <input 
              type="email" 
              required 
              placeholder="Email address"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Lock size={20} />
            </div>
            <input 
              type="password" 
              required 
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          
          <div className="text-right">
            <a href="#" className="text-sm text-brand-secondary hover:underline">Forgot password?</a>
          </div>
          
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-brand-primary text-white font-bold py-3 rounded-xl hover:bg-brand-primary-light transition-colors disabled:opacity-70 mt-4"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-gray-600">
            Don't have an account? <a href="#" className="text-brand-primary font-bold hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
