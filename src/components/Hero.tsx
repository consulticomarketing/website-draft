import { Lightbulb, ArrowRight, Target, TrendingUp, Users, Award } from 'lucide-react';

export function Hero() {
  const stats = [
    { number: '95%', label: 'Client Success Rate' },
    { number: '£250K+', label: 'Average Revenue Impact' },
    { number: '3.2x', label: 'Average ROI' },
    { number: '100+', label: 'Businesses Guided' }
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Lightbulb className="w-4 h-4" />
            Done-With-You Digital Marketing
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Understand Your Marketing Strategy{' '}
            <span className="text-[#007bff]">Before You Invest</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            We help B2C businesses fully understand how to ensure digital marketing will be profitable, without having to blindly invest in long-term solutions you don't understand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#007bff] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
              Get Your Strategy Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-[#007bff] hover:text-[#007bff] transition-colors duration-200">
              View Success Stories
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#007bff] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
