import { useEffect, useState } from 'react';

interface CalculatingScreenProps {
  onComplete: () => void;
}

export function CalculatingScreen({ onComplete }: CalculatingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const timeout = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl mx-auto w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-6">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 border-8 border-gray-200 rounded-full"></div>
              <div
                className="absolute inset-0 border-8 border-[#007bff] rounded-full border-t-transparent animate-spin"
                style={{ animationDuration: '1s' }}
              ></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Analysing your answers...
          </h2>
          <p className="text-xl text-gray-600">
            Identifying bottlenecks, growth levers, and your clarity score.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#007bff] to-[#34A853] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-3">{Math.round(progress)}%</p>
        </div>
      </div>
    </div>
  );
}
