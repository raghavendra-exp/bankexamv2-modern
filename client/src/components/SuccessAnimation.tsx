import { useEffect, useState } from "react";
import { CheckCircle, Sparkles } from "lucide-react";

interface SuccessAnimationProps {
  isVisible: boolean;
  message?: string;
  onComplete?: () => void;
}

export default function SuccessAnimation({
  isVisible,
  message = "Prompt copied successfully!",
  onComplete,
}: SuccessAnimationProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    if (isVisible) {
      // Generate confetti particles
      const newParticles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
      }));
      setParticles(newParticles);

      // Auto-hide after 2 seconds
      const timer = setTimeout(() => {
        onComplete?.();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
      {/* Main Success Icon */}
      <div className="relative">
        <div className="absolute inset-0 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="relative animate-bounce">
          <CheckCircle className="w-24 h-24 text-green-500 drop-shadow-lg" />
        </div>
      </div>

      {/* Confetti Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-confetti"
          style={{
            left: "50%",
            top: "50%",
            "--tx": `${particle.x}px`,
            "--ty": `${particle.y}px`,
          } as React.CSSProperties & { "--tx": string; "--ty": string }}
        >
          {particle.id % 2 === 0 ? (
            <Sparkles className="w-4 h-4 text-yellow-400" />
          ) : (
            <div className="w-2 h-2 bg-green-500 rounded-full" />
          )}
        </div>
      ))}

      {/* Success Message */}
      <div className="absolute bottom-20 text-center">
        <p className="text-lg font-bold text-green-600 animate-fade-in">{message}</p>
      </div>
    </div>
  );
}
