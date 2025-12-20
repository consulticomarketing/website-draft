import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { supabase } from '../lib/supabase';

const timeSlots = [
  'Monday 10:00 AM GMT',
  'Monday 2:00 PM GMT',
  'Tuesday 10:00 AM GMT',
  'Tuesday 2:00 PM GMT',
  'Wednesday 10:00 AM GMT',
  'Wednesday 2:00 PM GMT',
  'Thursday 10:00 AM GMT',
  'Thursday 2:00 PM GMT',
  'Friday 10:00 AM GMT',
  'Friday 2:00 PM GMT'
];

export function WebinarForm() {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    preferredTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('webinar_registrations').insert([
        {
          business_name: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          preferred_time: formData.preferredTime
        }
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        businessName: '',
        email: '',
        phone: '',
        preferredTime: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="bg-transparent py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#007bff] mb-3">
            REGISTER FOR THE WEBINAR
          </h2>
          <p className="text-gray-900 text-lg">
            Fill out the form & select your preferred time
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="businessName" className="flex items-center gap-2 text-gray-900 font-medium mb-2">
                <span className="flex items-center justify-center w-6 h-6 bg-[#007bff] text-white rounded-full text-sm">
                  1
                </span>
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                required
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Enter your business name"
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#007bff] outline-none transition-colors text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="email" className="flex items-center gap-2 text-gray-900 font-medium mb-2">
                <span className="flex items-center justify-center w-6 h-6 bg-[#007bff] text-white rounded-full text-sm">
                  2
                </span>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#007bff] outline-none transition-colors text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="phone" className="flex items-center gap-2 text-gray-900 font-medium mb-2">
                <span className="flex items-center justify-center w-6 h-6 bg-[#007bff] text-white rounded-full text-sm">
                  3
                </span>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="07123 456789"
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#007bff] outline-none transition-colors text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="preferredTime" className="flex items-center gap-2 text-gray-900 font-medium mb-2">
                <span className="flex items-center justify-center w-6 h-6 bg-[#007bff] text-white rounded-full text-sm">
                  4
                </span>
                Preferred Webinar Time
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  id="preferredTime"
                  name="preferredTime"
                  required
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border-b-2 border-gray-300 focus:border-[#007bff] outline-none transition-colors text-gray-900 bg-white appearance-none cursor-pointer"
                >
                  <option value="">Select a time slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                Registration successful! Check your email for webinar access details.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#007bff] hover:bg-[#0056b3] text-white font-semibold py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {isSubmitting ? 'SUBMITTING...' : 'SECURE YOUR PLACE'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
