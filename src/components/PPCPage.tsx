import { MousePointerClick, Target, TrendingUp, Award, BarChart3, CheckCircle, ArrowRight, Zap, DollarSign, Users } from 'lucide-react';
import { useState } from 'react';

export function PPCPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const benefits = [
    {
      icon: Target,
      title: 'Instant Traffic & Leads',
      description: 'Get qualified visitors to your site immediately, no waiting for organic rankings to build up.'
    },
    {
      icon: DollarSign,
      title: 'Maximum ROI',
      description: 'Only pay for clicks that matter. Every dollar is tracked and optimized for the best return.'
    },
    {
      icon: Users,
      title: 'Reach Your Exact Audience',
      description: 'Target by demographics, interests, location, and behavior to reach ideal customers.'
    },
    {
      icon: BarChart3,
      title: 'Complete Transparency',
      description: 'See exactly where your budget goes and what results you get with detailed reporting.'
    }
  ];

  const services = [
    {
      title: 'Google Ads Management',
      description: 'Capture high-intent customers actively searching for your products or services.',
      features: [
        'Search campaign setup and optimization',
        'Shopping ads for ecommerce',
        'Display and remarketing campaigns',
        'Keyword research and bidding strategy',
        'Ad copy testing and optimization'
      ]
    },
    {
      title: 'Social Media Advertising',
      description: 'Reach your target audience on Facebook, Instagram, LinkedIn, and more.',
      features: [
        'Facebook and Instagram ads',
        'LinkedIn B2B advertising',
        'TikTok and Snapchat campaigns',
        'Audience targeting and segmentation',
        'Creative design and testing'
      ]
    },
    {
      title: 'Conversion Rate Optimization',
      description: 'Turn more clicks into customers with landing page optimization and testing.',
      features: [
        'Landing page design and testing',
        'A/B testing strategies',
        'Conversion funnel optimization',
        'Heat mapping and user behavior analysis',
        'Form and checkout optimization'
      ]
    },
    {
      title: 'Analytics & Reporting',
      description: 'Track every metric that matters and get actionable insights for growth.',
      features: [
        'Custom dashboard setup',
        'ROI and ROAS tracking',
        'Attribution modeling',
        'Weekly performance reports',
        'Strategic recommendations'
      ]
    }
  ];

  const packages = [
    {
      name: 'PPC Starter',
      price: 'Custom',
      description: 'Perfect for businesses new to paid advertising',
      features: [
        '1 platform (Google or Social)',
        'Up to $2K monthly ad spend',
        '2 campaigns',
        'Basic reporting',
        'Email support'
      ],
      highlighted: false
    },
    {
      name: 'PPC Growth',
      price: 'Custom',
      description: 'Comprehensive PPC for scaling businesses',
      features: [
        'Everything in Starter',
        '2-3 platforms',
        'Up to $10K monthly ad spend',
        'Multiple campaigns',
        'Conversion tracking setup',
        'A/B testing',
        'Priority support'
      ],
      highlighted: true
    },
    {
      name: 'PPC Enterprise',
      price: 'Custom',
      description: 'Full-scale PPC management for large budgets',
      features: [
        'Everything in Growth',
        'All platforms',
        'Unlimited ad spend',
        'Advanced testing strategies',
        'Dedicated account manager',
        'Real-time optimization',
        'Custom analytics',
        '24/7 support'
      ],
      highlighted: false
    }
  ];

  const stats = [
    { number: '$5M+', label: 'Ad Spend Managed' },
    { number: '425%', label: 'Average ROAS' },
    { number: '180+', label: 'Active Campaigns' },
    { number: '47%', label: 'Lower CPA' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <MousePointerClick className="w-4 h-4" />
              Pay-Per-Click Advertising
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Turn Ad Spend Into{' '}
              <span className="text-[#007bff]">Predictable Revenue</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Stop wasting money on ads that don't convert. We create data-driven PPC campaigns that deliver qualified leads and measurable ROI from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#007bff] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
                Get Your Free PPC Audit
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
              Your paid ads are burning cash without delivering results
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xl text-gray-600 mb-12">
                  You're spending thousands on Google Ads and social media advertising. The clicks are coming in, but something's wrong. Your cost per acquisition keeps climbing, conversions are down, and you can't figure out what's broken.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">You're targeting the wrong people</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Broad targeting means you're paying for clicks from people who will never buy. Every wasted click drains your budget.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Your ads aren't converting</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Generic ad copy and poor landing pages mean most visitors bounce immediately. You're paying for traffic that goes nowhere.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">You can't track real ROI</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Without proper tracking and attribution, you have no idea which campaigns actually drive revenue. You're flying blind.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Costs keep rising while results decline</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Platform algorithms change constantly. Without daily optimization, your campaigns become less effective and more expensive over time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                  <p className="text-xl text-gray-900 font-semibold mb-4">
                    Here's the truth: PPC is a profit machine when done right.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The difference between profitable PPC and burning money is precision. We use advanced targeting, relentless testing, and proven conversion strategies to ensure every dollar you spend generates more in return. While others set it and forget it, we optimize daily to maximize your ROI.
                  </p>
                </div>
              </div>

              <div className="lg:sticky lg:top-8">
                <img
                  src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="PPC advertising dashboard and analytics"
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
              What's Included in Your PPC Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to turn paid advertising into your most profitable customer acquisition channel
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
              Choose Your PPC Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic PPC management that scales with your business growth
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
              <Zap className="w-8 h-8 text-[#007bff]" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Scale with Profitable PPC?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's build campaigns that deliver qualified leads and predictable revenue at scale
          </p>
          <button className="bg-white text-[#007bff] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center gap-2">
            Start Your PPC Campaign
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our PPC Process
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Audit & Strategy</h3>
              <p className="text-gray-600">
                We analyze your current campaigns, competitors, and audience to build a data-driven strategy for maximum ROI.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Launch & Optimize</h3>
              <p className="text-gray-600">
                We set up campaigns with precise targeting and compelling creative, then optimize daily for peak performance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scale & Report</h3>
              <p className="text-gray-600">
                We scale what works, cut what doesn't, and provide transparent reporting on every dollar spent and earned.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
