"use client"
import React, { useState, useEffect } from 'react';
import { Mic } from 'lucide-react';

const GlowingMicrophone = () => {
  const [isActive, setIsActive] = useState(true);
  const [waveData, setWaveData] = useState([]);

  // Generate realistic audio wave data
  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        const waves = Array.from({ length: 8 }, (_, i) => ({
          intensity: Math.random() * 0.8 + 0.3,
          delay: i * 0.1,
          radius: 60 + i * 15
        }));
        setWaveData(waves);
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className=" flex flex-col items-center justify-center max-h-[500px] to-blue-50 p-8">
      {/* Title */}
      <div className="mb-16 text-center">
       
      </div>

      {/* Main microphone container */}
      <div className="relative mb-16">
        {/* Animated sound waves */}
        {isActive && waveData.map((wave, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border-2 opacity-60"
            style={{
              width: `${wave.radius * 2}px`,
              height: `${wave.radius * 2}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              borderColor: `rgba(59, 130, 246, ${wave.intensity * 0.3})`,
              animation: `wave-pulse 2s ease-out infinite ${wave.delay}s`
            }}
          />
        ))}

        {/* Frequency visualization bars */}
        {isActive && (
          <div className="absolute inset-0 flex items-center justify-center">
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30) - 165;
              const baseRadius = 100;
              const x = Math.cos(angle * Math.PI / 180) * baseRadius;
              const y = Math.sin(angle * Math.PI / 180) * baseRadius;
              const intensity = Math.sin(Date.now() * 0.01 + i) * 0.5 + 0.5;
              
              return (
                <div
                  key={i}
                  className="absolute transition-all duration-300 ease-out"
                  style={{
                    width: '3px',
                    height: `${12 + intensity * 25}px`,
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                    background: `linear-gradient(to top, 
                      rgba(59, 130, 246, ${intensity * 0.8}), 
                      rgba(147, 197, 253, ${intensity * 0.6})
                    )`,
                    borderRadius: '2px',
                    opacity: intensity * 0.7 + 0.3
                  }}
                />
              );
            })}
          </div>
        )}

        {/* Main blob */}
        <div 
          className="relative w-48 h-48 cursor-pointer transition-all duration-500 hover:scale-105"
          onClick={() => setIsActive(!isActive)}
          style={{
            background: `
              radial-gradient(circle at 35% 35%, rgba(147, 197, 253, 0.4) 0%, transparent 60%),
              radial-gradient(circle at 65% 65%, rgba(196, 181, 253, 0.3) 0%, transparent 60%),
              radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)
            `,
            borderRadius: isActive ? '45% 55% 35% 65% / 55% 45% 65% 35%' : '60% 40% 30% 70% / 60% 30% 70% 40%',
            boxShadow: `
              0 20px 40px rgba(59, 130, 246, 0.15),
              0 10px 20px rgba(196, 181, 253, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.6)
            `,
            transform: isActive ? 'scale(1.05)' : 'scale(1)',
            animation: isActive ? 'blob-active 4s ease-in-out infinite' : 'blob-idle 8s ease-in-out infinite'
          }}
        >
          {/* Inner highlight */}
          <div 
            className="absolute inset-6 rounded-full opacity-40"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6) 0%, transparent 70%)',
              filter: 'blur(8px)'
            }}
          />

          {/* Microphone icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <Mic 
                size={40} 
                className={`transition-all duration-500 ${
                  isActive 
                    ? 'text-blue-600 drop-shadow-lg' 
                    : 'text-gray-600 hover:text-blue-500'
                }`}
                strokeWidth={1.5}
              />
              
              {/* Icon glow effect */}
              {isActive && (
                <>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Mic 
                      size={40} 
                      className="text-blue-400 opacity-50 blur-sm"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-ping" 
                       style={{ width: '60px', height: '60px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
                </>
              )}
            </div>
          </div>

          {/* Surface ripples */}
          {isActive && (
            <>
              {[0, 1, 2].map(i => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-full border border-blue-300/30"
                  style={{
                    animation: `surface-ripple 3s ease-out infinite ${i * 1}s`
                  }}
                />
              ))}
            </>
          )}
        </div>

        {/* Status indicator */}
        {/* <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
          <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
            isActive 
              ? 'bg-blue-50 text-blue-600 border border-blue-200' 
              : 'bg-gray-50 text-gray-500 border border-gray-200'
          }`}>
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              isActive ? 'bg-blue-500 animate-pulse' : 'bg-gray-400'
            }`} />
            <span className="text-sm font-medium">
              {isActive ? 'Recording Active' : 'Click to Activate'}
            </span>
          </div>
        </div> */}
      </div>


      <style jsx>{`
        @keyframes blob-idle {
          0%, 100% { 
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% { 
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
        }

        @keyframes blob-active {
          0%, 100% { 
            border-radius: 45% 55% 35% 65% / 55% 45% 65% 35%;
          }
          25% {
            border-radius: 35% 65% 55% 45% / 45% 55% 35% 65%;
          }
          50% { 
            border-radius: 55% 45% 45% 55% / 35% 65% 55% 45%;
          }
          75% {
            border-radius: 65% 35% 65% 35% / 65% 35% 45% 55%;
          }
        }

        @keyframes wave-pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0;
          }
        }

        @keyframes surface-ripple {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default GlowingMicrophone;