import React from 'react';

interface MascotProps {
  mousePosition: { x: number; y: number };
  isPasswordFocused: boolean;
}

export const Mascot: React.FC<MascotProps> = ({ mousePosition, isPasswordFocused }) => {
  // Calculer la position des yeux en fonction du curseur
  const calculateEyePosition = (mouseX: number, mouseY: number) => {
    const maxMove = 3; // Limite du mouvement des yeux
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const deltaX = (mouseX - centerX) / centerX;
    const deltaY = (mouseY - centerY) / centerY;
    
    return {
      x: deltaX * maxMove,
      y: deltaY * maxMove
    };
  };

  const eyePosition = calculateEyePosition(mousePosition.x, mousePosition.y);

  return (
    <div className="absolute left-1/2 -translate-x-1/2 w-40 h-40">
      <div className="relative">
        {/* Corps */}
        <div className="w-40 h-40 bg-pink-200 rounded-full relative overflow-visible shadow-lg">
          {/* Yeux */}
          <div className={`transition-all duration-300 ${isPasswordFocused ? 'opacity-0' : 'opacity-100'}`}>
            {/* Œil gauche */}
            <div className="absolute left-10 top-14 w-8 h-9 bg-white rounded-full overflow-hidden">
              <div 
                className="absolute w-6 h-6 bg-black rounded-full transition-transform duration-100"
                style={{ 
                  transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                  left: '1px',
                  top: '1px'
                }}
              >
                <div className="absolute w-2.5 h-2.5 bg-white rounded-full top-1 right-1"></div>
              </div>
            </div>
            {/* Œil droit */}
            <div className="absolute right-10 top-14 w-8 h-9 bg-white rounded-full overflow-hidden">
              <div 
                className="absolute w-6 h-6 bg-black rounded-full transition-transform duration-100"
                style={{ 
                  transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                  left: '1px',
                  top: '1px'
                }}
              >
                <div className="absolute w-2.5 h-2.5 bg-white rounded-full top-1 right-1"></div>
              </div>
            </div>
          </div>
          
          {/* Mains qui cachent les yeux */}
          <div 
            className={`transition-all duration-300
            ${isPasswordFocused ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            {/* Main gauche */}
            <div className="absolute top-10 left-7">
              {/* Bras */}
              <div className="absolute h-8 w-3 bg-pink-300 rounded-full -rotate-30 origin-bottom"></div>
              {/* Main */}
              <div className="absolute -top-1 left-1">
                <div className="w-10 h-8 bg-pink-300 rounded-full"></div>
                {/* Doigts */}
                <div className="absolute -top-1 left-1 w-2 h-4 bg-pink-300 rounded-full -rotate-15"></div>
                <div className="absolute -top-1 left-3 w-2 h-4 bg-pink-300 rounded-full"></div>
                <div className="absolute -top-1 left-5 w-2 h-4 bg-pink-300 rounded-full rotate-15"></div>
              </div>
            </div>
            
            {/* Main droite */}
            <div className="absolute top-10 right-7">
              {/* Bras */}
              <div className="absolute h-8 w-3 bg-pink-300 rounded-full rotate-30 origin-bottom right-0"></div>
              {/* Main */}
              <div className="absolute -top-1 right-1">
                <div className="w-10 h-8 bg-pink-300 rounded-full"></div>
                {/* Doigts */}
                <div className="absolute -top-1 right-1 w-2 h-4 bg-pink-300 rounded-full rotate-15"></div>
                <div className="absolute -top-1 right-3 w-2 h-4 bg-pink-300 rounded-full"></div>
                <div className="absolute -top-1 right-5 w-2 h-4 bg-pink-300 rounded-full -rotate-15"></div>
              </div>
            </div>
          </div>
          
          {/* Joues */}
          <div className="absolute left-7 top-20 w-5 h-3 bg-pink-300 rounded-full opacity-75"></div>
          <div className="absolute right-7 top-20 w-5 h-3 bg-pink-300 rounded-full opacity-75"></div>
          
          {/* Bouche */}
          <div className="absolute left-1/2 top-24 -translate-x-1/2 w-4 h-2">
            <div className="w-full h-full border-b-2 border-black rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};