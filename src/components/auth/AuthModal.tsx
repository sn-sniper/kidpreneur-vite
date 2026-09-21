import { useState } from 'react';
import type { FormEvent } from 'react';
import { createPortal } from 'react-dom';
import { X, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export type AuthMode = 'login' | 'register';

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: AuthMode;
  onClose: () => void;
}

export default function AuthModal({ isOpen, initialMode = 'login', onClose }: AuthModalProps) {
  const { refreshUser } = useAuth();
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Reset state when modal opens/closes or mode changes
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  const [prevInitialMode, setPrevInitialMode] = useState(initialMode);

  if (isOpen !== prevIsOpen || initialMode !== prevInitialMode) {
    setPrevIsOpen(isOpen);
    setPrevInitialMode(initialMode);
    if (isOpen) {
      setMode(initialMode);
      setError('');
      setLoading(false);
      // We don't reset email/password here so the user doesn't lose typed data if they accidentally toggle
    }
  }

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const endpoint = mode === 'login' ? '/api/auth/login' : '/api/auth/register';
    const bodyPayload = mode === 'login' 
      ? { email, password } 
      : { fullName, email, password };

    try {
      const apiUrl = import.meta.env.VITE_API_URL || '';
      const res = await fetch(`${apiUrl}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyPayload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || `Failed to ${mode}`);
      }

      await refreshUser();
      onClose();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
    } finally {
      setLoading(false);
    }
  };

  const isLogin = mode === 'login';

  return createPortal(
    <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-kidpreneur-slate/60 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 md:p-8 overflow-hidden z-10000">
        {/* Decorative background blob */}
        <div className={`absolute top-0 right-0 w-32 h-32 rounded-full mix-blend-multiply filter blur-2xl opacity-70 translate-x-1/2 -translate-y-1/2 transition-colors duration-500 ${isLogin ? 'bg-kidpreneur-yellow/20' : 'bg-kidpreneur-teal/20'}`}></div>
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors z-50"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8 relative z-10">
          <h2 className="text-3xl font-display font-bold text-kidpreneur-slate mb-2">
            {isLogin ? 'Welcome Back!' : 'Start Your Journey'}
          </h2>
          <p className="text-gray-500">
            {isLogin ? 'Log in to continue your Kidpreneur Journey' : 'Create an account to join the Kidpreneur program'}
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100 text-center relative z-10">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 relative z-10 bg-white">
          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required={!isLogin}
                className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-kidpreneur-yellow focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-kidpreneur-teal focus:border-transparent transition-all"
              placeholder="hello@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-kidpreneur-teal focus:border-transparent transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center gap-2 font-bold py-4 rounded-xl transition-colors shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-4 ${
              isLogin 
                ? 'bg-kidpreneur-slate text-white hover:bg-kidpreneur-blue' 
                : 'bg-kidpreneur-yellow text-kidpreneur-slate hover:bg-yellow-300'
            }`}
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (isLogin ? 'Log In' : 'Create Account')}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500 relative z-10 bg-white pt-2">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => {
              setMode(isLogin ? 'register' : 'login');
              setError('');
            }}
            className="font-bold text-kidpreneur-teal hover:text-teal-700 transition-colors"
          >
            {isLogin ? 'Sign up now' : 'Log in instead'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
