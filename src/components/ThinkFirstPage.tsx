import { TrendingUp, Target, Award, BarChart3, CheckCircle, ArrowRight, Lightbulb, Users, Map, BookOpen } from 'lucide-react';
import { useState } from 'react';

export function ThinkFirstPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const benefits = [
    {
      icon: Target,
      title: 'Know Before You Invest',
      description: 'Understand exactly what marketing will work for your business with clear ROI projections.'
    },
    {
      icon: TrendingUp,
      title: 'Save Money Long-Term',
      description: 'Stop wasting money on marketing that doesn\'t work. Invest in strategies proven to deliver results.'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Confidence',
      description: 'Make marketing decisions backed by comprehensive analysis and ROI forecasting.'
    },
    {
      icon: Award,
      title: 'Custom Workshop Training',
      description: 'Half-day workshop ensuring you and your team understand every component of your strategy.'
    }
  ];

  const services = [
    {
      title: 'Initial Consultation',
      description: 'Deep-dive into your current business position and growth objectives.',
      features: [
        'Current marketing audit',
        'Business goals analysis',
        'Target audience research',
        'Competitive landscape review',
        'Growth opportunity identification'
      ]
    },
    {
      title: 'Bespoke Marketing Plan',
      description: 'Custom strategy built specifically for your business with detailed projections.',
      features: [
        'Channel strategy recommendations',
        'ROI projections for each component',
        'Budget allocation guidance',
        'Implementation timeline',
        'Risk assessment and mitigation'
      ]
    },
    {
      title: 'Half-Day Workshop',
      description: 'Comprehensive training session for you and your team on your marketing strategy.',
      features: [
        'Step-by-step strategy walkthrough',
        'Component-by-component training',
        'Implementation guidance',
        'Q&A and clarification',
        'Actionable takeaway materials'
      ]
    },
    {
      title: 'Ongoing Support',
      description: 'Continued guidance as you implement your strategy and grow.',
      features: [
        'Implementation check-ins',
        'Strategy refinement',
        'Performance review',
        'Optimization recommendations',
        'Growth strategy updates'
      ]
    }
  ];

  const packages = [
    {
      name: 'Strategy Starter',
      price: 'Custom',
      description: 'Essential strategy for small businesses',
      features: [
        'Initial consultation',
        'Basic marketing plan',
        'ROI projections',
        '2-hour strategy session',
        'Email support for 30 days'
      ],
      highlighted: false
    },
    {
      name: 'Think First Complete',
      price: 'Custom',
      description: 'Comprehensive done-with-you strategy',
      features: [
        'Everything in Starter',
        'Detailed bespoke plan',
        'Half-day workshop',
        'Implementation roadmap',
        'Team training materials',
        '90-day support'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise Strategy',
      price: 'Custom',
      description: 'Full-scale strategic planning for large organizations',
      features: [
        'Everything in Complete',
        'Multi-channel strategy',
        'Dedicated strategist',
        'Full-day workshop',
        'Quarterly strategy reviews',
        'Ongoing advisory',
        '12-month support'
      ],
      highlighted: false
    }
  ];

  const stats = [
    { number: '95%', label: 'Client Success Rate' },
    { number: '£250K+', label: 'Average Revenue Impact' },
    { number: '3.2x', label: 'Average ROI' },
    { number: '100+', label: 'Businesses Guided' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-[#007bff] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Lightbulb className="w-4 h-4" />
              Done-With-You Digital Marketing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Understand Your Marketing Strategy
              <br className="hidden lg:block" />
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

      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
              You're tired of throwing money at marketing that might not work
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xl text-gray-600 mb-12">
                  Every marketing agency promises results. But they all want you to sign long-term contracts and spend thousands before you even know if their strategy will work for your business. You're stuck guessing, hoping, and crossing your fingers.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Unclear ROI from marketing investments</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Agencies promise the world but can't show you concrete numbers. You're investing blind and hoping for the best.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Generic strategies that don't fit your business</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Cookie-cutter approaches ignore your unique situation, audience, and goals. What works for others won't work for you.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">You don't understand the marketing you're paying for</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Agencies use jargon and keep you in the dark. You're spending money on strategies you don't understand or control.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Locked into long-term contracts before seeing results</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Committed for 6-12 months with no proof it'll work. By the time you realize it's not working, you've wasted thousands.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                  <p className="text-xl text-gray-900 font-semibold mb-4">
                    Here's the truth: You should understand your strategy before you invest.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We don't throw you into the deep end. First, we build you a comprehensive, bespoke marketing plan with clear ROI projections for every component. Then, we walk you through it in a custom workshop until everything makes perfect sense. You'll know exactly what will work, why it will work, and how much it will return—before spending a penny on implementation.
                  </p>
                </div>
              </div>

              <div className="lg:sticky lg:top-8">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Marketing workshop and strategy planning"
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
              What's Included in Your Think First Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to understand, implement, and succeed with digital marketing
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
              Done-with-you solutions that ensure you understand before you invest
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
              <BookOpen className="w-8 h-8 text-[#007bff]" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Think First?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free consultation and discover your path to profitable marketing
          </p>
          <button className="bg-white text-[#007bff] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center gap-2">
            Schedule Your Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Think First Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Initial Consultation</h3>
              <p className="text-gray-600">
                Deep-dive into your business, goals, and current marketing to understand your unique situation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bespoke Plan Creation</h3>
              <p className="text-gray-600">
                We build a custom marketing strategy with clear ROI projections for every component.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Workshop Training</h3>
              <p className="text-gray-600">
                Half-day session where we walk you through every detail until everything makes sense.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implement & Grow</h3>
              <p className="text-gray-600">
                Armed with clarity and confidence, you implement your strategy and watch your business grow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
