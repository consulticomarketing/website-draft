import { TrendingUp, Target, Award, BarChart3, CheckCircle, ArrowRight, Lightbulb, Users, Map, Compass } from 'lucide-react';
import { useState } from 'react';

export function MarketStrategyPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const benefits = [
    {
      icon: Target,
      title: 'Strategic Market Positioning',
      description: 'Define your unique market position and competitive advantage to stand out from competitors.'
    },
    {
      icon: TrendingUp,
      title: 'Accelerate Business Growth',
      description: 'Unlock new revenue streams and scale your business with data-driven market strategies.'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Decisions',
      description: 'Make informed strategic decisions backed by comprehensive market research and analysis.'
    },
    {
      icon: Award,
      title: 'Sustainable Competitive Edge',
      description: 'Build lasting advantages that keep you ahead of market trends and competition.'
    }
  ];

  const services = [
    {
      title: 'Market Research & Analysis',
      description: 'Deep-dive analysis of your market landscape, customer segments, and competitive environment.',
      features: [
        'Customer persona development',
        'Competitor intelligence gathering',
        'Market sizing and opportunity assessment',
        'Industry trend analysis',
        'SWOT analysis'
      ]
    },
    {
      title: 'Strategic Positioning',
      description: 'Define your unique value proposition and positioning strategy to capture market share.',
      features: [
        'Value proposition development',
        'Brand positioning strategy',
        'Competitive differentiation',
        'Target market segmentation',
        'Messaging framework'
      ]
    },
    {
      title: 'Go-to-Market Strategy',
      description: 'Comprehensive roadmap for launching products, entering new markets, or scaling operations.',
      features: [
        'Launch strategy and planning',
        'Channel strategy development',
        'Pricing strategy optimization',
        'Sales enablement planning',
        'Market entry tactics'
      ]
    },
    {
      title: 'Growth Strategy & Planning',
      description: 'Long-term strategic planning to drive sustainable business growth and market expansion.',
      features: [
        'Growth opportunity identification',
        'Strategic roadmap creation',
        'KPI framework development',
        'Resource allocation planning',
        'Quarterly strategy reviews'
      ]
    }
  ];

  const packages = [
    {
      name: 'Foundation',
      price: 'Custom',
      description: 'Essential market strategy for businesses getting started',
      features: [
        'Market research report',
        'Competitor analysis',
        'Basic positioning strategy',
        '90-day action plan',
        'Email support'
      ],
      highlighted: false
    },
    {
      name: 'Growth',
      price: 'Custom',
      description: 'Comprehensive strategy for scaling businesses',
      features: [
        'Everything in Foundation',
        'Go-to-market strategy',
        'Customer journey mapping',
        'Growth roadmap',
        'Monthly strategy sessions',
        'Priority support'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Full-scale strategic planning for large organizations',
      features: [
        'Everything in Growth',
        'Multi-market expansion strategy',
        'Dedicated strategy consultant',
        'Custom analytics dashboard',
        'Ongoing strategic advisory',
        'Quarterly board presentations',
        '24/7 support'
      ],
      highlighted: false
    }
  ];

  const stats = [
    { number: '180%', label: 'Average Revenue Growth' },
    { number: '92%', label: 'Client Success Rate' },
    { number: '100+', label: 'Strategies Delivered' },
    { number: '12 Months', label: 'Average Partnership' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-[#007bff] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Compass className="w-4 h-4" />
              Market Strategy
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with{' '}
              <span className="text-[#007bff]">Strategic Market Intelligence</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Stop guessing. Start growing. We help businesses develop winning market strategies that drive measurable results and sustainable competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#007bff] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
                Get Your Free Strategy Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-[#007bff] hover:text-[#007bff] transition-colors duration-200">
                View Case Studies
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

      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
              You're working harder than ever, but growth feels impossible
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xl text-gray-600 mb-12">
                  You know your product or service is great. But in a crowded market, being great isn't enough. Without a clear strategy, you're just another option in a sea of competitors.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Your competitors are winning customers you should have</h3>
                      <p className="text-gray-600 leading-relaxed">
                        They're not necessarily better, but they have a clear strategy that resonates with your target market.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">You're struggling to differentiate in a crowded market</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Without clear positioning, you're competing on price instead of value, eroding your margins.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Marketing efforts aren't delivering expected ROI</h3>
                      <p className="text-gray-600 leading-relaxed">
                        You're spending money on tactics without an overarching strategy to guide your investments.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Growth has plateaued and you don't know why</h3>
                      <p className="text-gray-600 leading-relaxed">
                        You've hit a ceiling, and without strategic insight, you're stuck repeating what's always worked.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                  <p className="text-xl text-gray-900 font-semibold mb-4">
                    Here's the truth: Strategy comes before tactics.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Without a clear market strategy, you're just throwing darts in the dark. We help you see the board clearly, identify the bullseye, and develop a systematic approach to hitting it consistently. That's the difference between hoping for growth and engineering it.
                  </p>
                </div>
              </div>

              <div className="lg:sticky lg:top-8">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Strategic planning session"
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What's Included in Your Market Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to outthink, outmaneuver, and outperform your competition
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Strategy Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for every stage of your business journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 transition-all duration-200 ${
                  pkg.highlighted
                    ? 'bg-[#007bff] text-white shadow-2xl scale-105'
                    : 'bg-white border-2 border-gray-200 hover:border-[#007bff] hover:shadow-lg'
                }`}
              >
                {pkg.highlighted && (
                  <div className="text-center mb-4">
                    <span className="bg-white text-[#007bff] px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${pkg.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${pkg.highlighted ? 'text-white' : 'text-[#007bff]'}`}>
                    {pkg.price}
                  </span>
                </div>
                <p className={`mb-6 ${pkg.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.highlighted ? 'text-blue-200' : 'text-green-500'}`} />
                      <span className={pkg.highlighted ? 'text-white' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPackage(pkg.name)}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                    pkg.highlighted
                      ? 'bg-white text-[#007bff] hover:bg-blue-50'
                      : 'bg-[#007bff] text-white hover:bg-blue-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#007bff] to-blue-700 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-[#007bff]" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build Your Winning Strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free strategy consultation and discover your path to sustainable growth
          </p>
          <button className="bg-white text-[#007bff] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center gap-2">
            Schedule Your Free Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Strategy Process
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery & Research</h3>
              <p className="text-gray-600">
                We analyze your market, competitors, and business goals to understand your unique challenges and opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy Development</h3>
              <p className="text-gray-600">
                We craft a comprehensive strategy with clear positioning, actionable tactics, and measurable objectives.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation & Growth</h3>
              <p className="text-gray-600">
                We guide execution with ongoing support, monitoring, and optimization to ensure sustainable results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
