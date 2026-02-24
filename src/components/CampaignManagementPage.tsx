import { Megaphone, Calendar, LineChart, Award, Target, CheckCircle, ArrowRight, Layers, Clock, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function CampaignManagementPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const benefits = [
    {
      icon: Target,
      title: 'Multi-Channel Coordination',
      description: 'Orchestrate seamless campaigns across all marketing channels for maximum impact and reach.'
    },
    {
      icon: LineChart,
      title: 'Data-Driven Execution',
      description: 'Every decision backed by real-time data and proven marketing frameworks that deliver results.'
    },
    {
      icon: Clock,
      title: 'Faster Time to Market',
      description: 'Launch campaigns quickly with streamlined processes and expert project management.'
    },
    {
      icon: Award,
      title: 'Consistent Messaging',
      description: 'Ensure your brand message is cohesive and powerful across every customer touchpoint.'
    }
  ];

  const services = [
    {
      title: 'Campaign Strategy & Planning',
      description: 'Comprehensive campaign blueprints aligned with your business objectives and market dynamics.',
      features: [
        'Goal setting and KPI definition',
        'Target audience research',
        'Competitive landscape analysis',
        'Multi-channel strategy development',
        'Budget allocation and forecasting'
      ]
    },
    {
      title: 'Creative Development',
      description: 'Compelling creative assets that capture attention and drive engagement across all channels.',
      features: [
        'Concept development and ideation',
        'Copywriting and messaging',
        'Visual design and branding',
        'Video and multimedia production',
        'A/B testing and optimization'
      ]
    },
    {
      title: 'Campaign Execution & Management',
      description: 'Flawless execution with ongoing optimization to ensure campaigns hit their targets.',
      features: [
        'Cross-channel campaign deployment',
        'Real-time performance monitoring',
        'Daily optimization and adjustments',
        'Stakeholder coordination',
        'Timeline and deliverable management'
      ]
    },
    {
      title: 'Analytics & Reporting',
      description: 'Transparent insights into campaign performance with actionable recommendations.',
      features: [
        'Comprehensive performance dashboards',
        'Attribution and conversion tracking',
        'ROI analysis and modeling',
        'Custom reporting schedules',
        'Strategic insights and recommendations'
      ]
    }
  ];

  const packages = [
    {
      name: 'Campaign Essentials',
      price: 'Custom',
      description: 'Single campaign management for focused initiatives',
      features: [
        '1 campaign per quarter',
        '2-3 marketing channels',
        'Basic creative assets',
        'Performance reporting',
        'Email support'
      ],
      highlighted: false
    },
    {
      name: 'Campaign Pro',
      price: 'Custom',
      description: 'Ongoing campaign management for growing brands',
      features: [
        'Everything in Essentials',
        'Multiple concurrent campaigns',
        'All marketing channels',
        'Full creative production',
        'Advanced analytics',
        'Dedicated campaign manager',
        'Priority support'
      ],
      highlighted: true
    },
    {
      name: 'Campaign Enterprise',
      price: 'Custom',
      description: 'Full-service campaign management at scale',
      features: [
        'Everything in Pro',
        'Unlimited campaigns',
        'Custom integrations',
        'Executive-level strategy',
        'White-glove service',
        'Quarterly planning sessions',
        'Real-time optimization',
        '24/7 support'
      ],
      highlighted: false
    }
  ];

  const stats = [
    { number: '200+', label: 'Campaigns Launched' },
    { number: '87%', label: 'Goal Achievement Rate' },
    { number: '$12M+', label: 'Revenue Generated' },
    { number: '4.2x', label: 'Average ROI' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Megaphone className="w-4 h-4" />
              Campaign Management
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Launch Campaigns That{' '}
              <span className="text-[#007bff]">Drive Real Business Growth</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Stop juggling disconnected marketing efforts. We orchestrate powerful multi-channel campaigns that deliver consistent messaging, measurable results, and maximum ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#007bff] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
                Plan Your Next Campaign
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-[#007bff] hover:text-[#007bff] transition-colors duration-200">
                See Our Work
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
              Your marketing campaigns are disjointed and underperforming
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xl text-gray-600 mb-12">
                  You're running social ads, sending emails, posting content, and maybe even doing some PR. But nothing connects. Each channel operates in a silo, your messaging is inconsistent, and you're not seeing the results you expected. You know there's a better way.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Each channel tells a different story</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Your email says one thing, your ads another, and your social content something else entirely. Confused customers don't convert.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Campaigns launch late or not at all</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Without clear project management, campaigns miss deadlines, creative assets aren't ready, and opportunities pass you by.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">You can't measure real impact</h3>
                      <p className="text-gray-600 leading-relaxed">
                        With different tools and disconnected metrics, you have no idea which campaigns actually drive revenue. You're guessing, not growing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Budget is wasted on underperforming tactics</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Without unified strategy and ongoing optimization, you keep pouring money into channels and tactics that don't deliver results.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                  <p className="text-xl text-gray-900 font-semibold mb-4">
                    Here's the truth: Great campaigns require orchestration, not chaos.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Successful campaigns don't happen by accident. They require strategic planning, coordinated execution across channels, consistent messaging, and relentless optimization. We bring order to the chaos, aligning every touchpoint to work together toward your business goals. That's how campaigns generate real ROI.
                  </p>
                </div>
              </div>

              <div className="lg:sticky lg:top-8">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Campaign planning and management strategy"
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
              What's Included in Campaign Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to launch, manage, and optimize winning campaigns across all channels
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
              Choose Your Campaign Management Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional campaign management that scales with your marketing ambitions
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
              <Sparkles className="w-8 h-8 text-[#007bff]" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Launch Your Best Campaign Yet?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create a coordinated, multi-channel campaign that delivers measurable results
          </p>
          <button className="bg-white text-[#007bff] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center gap-2">
            Start Your Campaign
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Campaign Management Process
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy & Planning</h3>
              <p className="text-gray-600">
                We define clear objectives, map out channels, develop messaging, and build a comprehensive campaign roadmap.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Creative & Execution</h3>
              <p className="text-gray-600">
                We produce all creative assets and deploy campaigns across channels with precision timing and coordination.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimize & Scale</h3>
              <p className="text-gray-600">
                We monitor performance in real-time, make data-driven optimizations, and scale what works to maximize ROI.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
