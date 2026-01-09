import { Search, TrendingUp, Target, Award, BarChart3, Users, CheckCircle, ArrowRight, Globe, Zap } from 'lucide-react';
import { useState } from 'react';

export function SEOPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase Organic Traffic',
      description: 'Drive more qualified visitors to your website through improved search rankings and targeted keyword optimization.'
    },
    {
      icon: Target,
      title: 'Reach Your Ideal Customers',
      description: 'Connect with customers actively searching for your products or services at the exact moment they need them.'
    },
    {
      icon: BarChart3,
      title: 'Measurable ROI',
      description: 'Track your success with clear metrics, detailed reporting, and transparent performance indicators.'
    },
    {
      icon: Award,
      title: 'Build Brand Authority',
      description: 'Establish your business as a trusted industry leader through consistent top search rankings.'
    }
  ];

  const services = [
    {
      title: 'Technical SEO Audit',
      description: 'Comprehensive analysis of your website\'s technical health, crawlability, and indexing.',
      features: [
        'Site architecture review',
        'Page speed optimization',
        'Mobile responsiveness check',
        'Schema markup implementation',
        'XML sitemap optimization'
      ]
    },
    {
      title: 'Keyword Research & Strategy',
      description: 'Data-driven keyword targeting aligned with your business goals and customer intent.',
      features: [
        'Competitor keyword analysis',
        'Search intent mapping',
        'Long-tail opportunity identification',
        'Keyword difficulty assessment',
        'Content gap analysis'
      ]
    },
    {
      title: 'On-Page Optimization',
      description: 'Strategic optimization of your website content and structure for maximum visibility.',
      features: [
        'Title tag and meta description optimization',
        'Header tag structure',
        'Internal linking strategy',
        'Content optimization',
        'Image alt text optimization'
      ]
    },
    {
      title: 'Link Building & Authority',
      description: 'Ethical link acquisition strategies to build your website\'s domain authority.',
      features: [
        'High-quality backlink acquisition',
        'Competitor backlink analysis',
        'Broken link building',
        'Guest posting opportunities',
        'Digital PR outreach'
      ]
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: 'Custom',
      description: 'Perfect for small businesses starting their SEO journey',
      features: [
        'Initial SEO audit',
        'Keyword research (up to 20 keywords)',
        'On-page optimization',
        'Monthly reporting',
        'Email support'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: 'Custom',
      description: 'Comprehensive SEO for growing businesses',
      features: [
        'Everything in Starter',
        'Advanced keyword research (up to 50 keywords)',
        'Content strategy development',
        'Link building campaign',
        'Quarterly strategy sessions',
        'Priority support'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Full-scale SEO for large organizations',
      features: [
        'Everything in Professional',
        'Unlimited keyword tracking',
        'Dedicated account manager',
        'Custom reporting dashboard',
        'Ongoing technical optimization',
        'Multi-location SEO',
        '24/7 support'
      ],
      highlighted: false
    }
  ];

  const stats = [
    { number: '250%', label: 'Average Traffic Increase' },
    { number: '87%', label: 'Client Retention Rate' },
    { number: '150+', label: 'Businesses Helped' },
    { number: '6 Months', label: 'Average Time to Page 1' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-[#007bff] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Search className="w-4 h-4" />
              SEO Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Dominate Search Rankings &{' '}
              <span className="text-[#007bff]">Drive Organic Growth</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Partner with SEO experts who understand your business goals. We don't just improve rankings—we deliver qualified traffic that converts into real revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#007bff] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
                Get Your Free SEO Audit
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why SEO Matters For Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Search engines are where your customers are looking. Be there when they search.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#007bff]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive SEO Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end SEO solutions tailored to your business needs
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
              Choose Your SEO Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible packages designed to scale with your business growth
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
            Ready to Grow Your Organic Traffic?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free, no-obligation SEO audit and discover your growth opportunities
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
              Our SEO Process
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery & Audit</h3>
              <p className="text-gray-600">
                We analyze your current SEO performance, competitors, and opportunities to create a baseline.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy & Implementation</h3>
              <p className="text-gray-600">
                We execute a custom SEO strategy with technical fixes, content optimization, and link building.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Monitor & Optimize</h3>
              <p className="text-gray-600">
                Continuous monitoring, reporting, and optimization to ensure sustained growth and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
