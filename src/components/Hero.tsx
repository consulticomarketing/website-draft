import { Lightbulb, ArrowRight } from 'lucide-react';

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
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Lightbulb className="w-4 h-4" />
              Done-With-You Digital Marketing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Understand Your Marketing Strategy{' '}
              <span className="text-[#007bff]">Before You Invest</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              We help B2C businesses fully understand how to ensure digital marketing will be profitable, without having to blindly invest in long-term solutions you don't understand.
            </p>
            <button className="bg-[#007bff] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2">
              Get Your Strategy Consultation
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-[#007bff] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Marketing Strategy Consultation"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
