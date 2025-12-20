import { useState } from 'react';
import { Mail, Building2 } from 'lucide-react';

interface EmailCaptureProps {
  onSubmit: (email: string, businessName: string) => void;
  onBack: () => void;
}

export function EmailCapture({ onSubmit, onBack }: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    onSubmit(email, businessName);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#007bff] mb-4">
            Your personalised marketing clarity score is ready
          </h2>
          <p className="text-xl text-gray-700">
            Enter your email to unlock your full results and see exactly where your biggest growth opportunity lies.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="flex items-center gap-2 text-gray-900 font-medium mb-3">
                <Mail className="w-5 h-5 text-[#007bff]" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#007bff] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="businessName" className="flex items-center gap-2 text-gray-900 font-medium mb-3">
                <Building2 className="w-5 h-5 text-[#007bff]" />
                Business Name <span className="text-sm text-gray-500 font-normal">(optional)</span>
              </label>
              <input
                type="text"
                id="businessName"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Your Business Name"
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#007bff] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <p className="text-sm text-gray-500 text-center">
              We'll also send your score and recommended roadmap directly to your inbox.
            </p>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={onBack}
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 bg-[#007bff] hover:bg-[#0056b3] text-white font-semibold py-4 rounded-lg transition-colors text-lg shadow-lg"
              >
                Show My Results
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
