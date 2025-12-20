import { useState } from 'react';
import { User, Building2, Mail, Phone } from 'lucide-react';

interface RegistrationFormProps {
  onSubmit: (data: { name: string; businessName: string; email: string; phone: string }) => void;
  onBack: () => void;
}

export function RegistrationForm({ onSubmit, onBack }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Please enter your business name';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#007bff] mb-4">
            Step 1: Your Details
          </h2>
          <p className="text-lg text-gray-700">
            Fill in your information below to continue with your marketing assessment
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="flex items-center gap-2 text-gray-900 font-medium mb-3">
                <User className="w-5 h-5 text-[#007bff]" />
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="John Smith"
                className={`w-full px-4 py-4 border-2 rounded-lg focus:border-[#007bff] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 ${
                  errors.name ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="businessName" className="flex items-center gap-2 text-gray-900 font-medium mb-3">
                <Building2 className="w-5 h-5 text-[#007bff]" />
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                required
                value={formData.businessName}
                onChange={(e) => handleChange('businessName', e.target.value)}
                placeholder="Your Business Name"
                className={`w-full px-4 py-4 border-2 rounded-lg focus:border-[#007bff] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 ${
                  errors.businessName ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {errors.businessName && (
                <p className="mt-1 text-sm text-red-600">{errors.businessName}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="flex items-center gap-2 text-gray-900 font-medium mb-3">
                <Mail className="w-5 h-5 text-[#007bff]" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="your.email@example.com"
                className={`w-full px-4 py-4 border-2 rounded-lg focus:border-[#007bff] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="flex items-center gap-2 text-gray-900 font-medium mb-3">
                <Phone className="w-5 h-5 text-[#007bff]" />
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="07123 456789"
                className={`w-full px-4 py-4 border-2 rounded-lg focus:border-[#007bff] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 ${
                  errors.phone ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            <p className="text-sm text-gray-500 text-center bg-gray-50 p-4 rounded-lg">
              Your information will be used to personalize your results and send you webinar access details.
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
                Continue to Assessment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
