import React, { useState, useEffect } from 'react';
import { Mascot } from './Mascot';
import { Mail, Lock } from 'lucide-react';

export const LoginForm: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        <div className="h-48 relative mb-4">
          <Mascot 
            mousePosition={mousePosition}
            isPasswordFocused={isPasswordFocused}
          />
        </div>
        
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:scale-[1.02]">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Bienvenue !
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl 
                         text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 
                         focus:ring-purple-500 focus:border-transparent transition-all
                         bg-white/50 backdrop-blur-sm"
                placeholder="Email"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl 
                         text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 
                         focus:ring-purple-500 focus:border-transparent transition-all
                         bg-white/50 backdrop-blur-sm"
                placeholder="Mot de passe"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 
                       text-white font-semibold rounded-xl shadow-lg 
                       transform transition-all duration-500 
                       hover:scale-[1.02] hover:shadow-xl
                       focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};