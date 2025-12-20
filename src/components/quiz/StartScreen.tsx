import { ArrowRight } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-6 pb-3">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#007bff] mb-6">
          Discover Your Marketing Clarity Score & Register for the Free Webinar
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          You'll instantly discover where your marketing stands, what growth opportunities you're missing, and get a personalized roadmap based on your current stage.
        </p>
        <div className="bg-blue-50 border-2 border-[#007bff] rounded-xl p-6 mb-10">
          <p className="text-lg font-semibold text-gray-900 mb-2">
            Here's how it works:
          </p>
          <div className="text-left max-w-lg mx-auto space-y-2">
            <p className="text-gray-700">
              <span className="font-semibold text-[#007bff]">Step 1:</span> Fill in your contact details
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-[#007bff]">Step 2:</span> Answer 6 quick questions about your marketing
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-[#007bff]">Step 3:</span> Get your personalized score and choose your webinar time
            </p>
          </div>
        </div>
        <button
          onClick={onStart}
          className="inline-flex items-center gap-3 bg-[#007bff] hover:bg-[#0056b3] text-white font-semibold px-10 py-5 rounded-lg transition-all transform hover:scale-105 text-xl shadow-xl"
        >
          Start Registration
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
