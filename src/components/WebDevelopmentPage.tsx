import { Code, Smartphone, Zap, Award, BarChart3, CheckCircle, ArrowRight, Rocket, Shield, Globe } from 'lucide-react';
import { useState } from 'react';

export function WebDevelopmentPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const benefits = [
    {
      icon: Zap,
      title: 'Lightning-Fast Performance',
      description: 'Optimized websites that load instantly and keep visitors engaged instead of waiting.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Flawless experiences across all devices, from desktop to mobile and everything in between.'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Built with security best practices to protect your business and customer data.'
    },
    {
      icon: Award,
      title: 'Conversion Optimized',
      description: 'Strategic design and development focused on turning visitors into customers.'
    }
  ];

  const services = [
    {
      title: 'Custom Website Development',
      description: 'Bespoke websites built from scratch to match your exact business requirements.',
      features: [
        'Custom design and development',
        'Responsive across all devices',
        'Modern tech stack',
        'CMS integration',
        'Performance optimization'
      ]
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Powerful online stores that provide seamless shopping experiences and drive sales.',
      features: [
        'Product catalog management',
        'Secure payment processing',
        'Inventory management',
        'Order tracking systems',
        'Customer account features'
      ]
    },
    {
      title: 'Web Application Development',
      description: 'Complex web applications built to streamline operations and enhance user experience.',
      features: [
        'Custom functionality',
        'Database architecture',
        'API integrations',
        'User authentication',
        'Real-time features'
      ]
    },
    {
      title: 'Website Maintenance & Support',
      description: 'Ongoing technical support to keep your website secure, updated, and performing optimally.',
      features: [
        'Regular security updates',
        'Performance monitoring',
        'Bug fixes and troubleshooting',
        'Content updates',
        'Technical support'
      ]
    }
  ];

  const packages = [
    {
      name: 'Business Website',
      price: 'Custom',
      description: 'Professional website for small businesses',
      features: [
        'Up to 10 pages',
        'Responsive design',
        'Contact forms',
        'Basic SEO setup',
        '3 months support'
      ],
      highlighted: false
    },
    {
      name: 'E-Commerce Store',
      price: 'Custom',
      description: 'Complete online store solution',
      features: [
        'Everything in Business',
        'Product catalog',
        'Payment integration',
        'Order management',
        'Customer accounts',
        '6 months support'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise Solution',
      price: 'Custom',
      description: 'Advanced web applications for large organizations',
      features: [
        'Everything in E-Commerce',
        'Custom functionality',
        'Advanced integrations',
        'Dedicated project manager',
        'Scalable infrastructure',
        'Ongoing maintenance',
        '12 months support'
      ],
      highlighted: false
    }
  ];

  const stats = [
    { number: '150+', label: 'Websites Launched' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '2.5s', label: 'Average Load Time' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Code className="w-4 h-4" />
              Web Development
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Websites That Work as Hard as{' '}
              <span className="text-[#007bff]">You Do</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Your website should be your best salesperson, working 24/7 to attract customers and drive growth. We build fast, secure, and conversion-optimized websites that deliver real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#007bff] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-[#007bff] hover:text-[#007bff] transition-colors duration-200">
                View Our Work
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
              Your website is costing you customers every single day
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xl text-gray-600 mb-12">
                  You know you need a better website. But between slow loading times, broken mobile experiences, and confusing navigation, visitors leave before they even see what you offer. Every second counts, and your current site is counting you out.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Your website looks outdated and unprofessional</h3>
                      <p className="text-gray-600 leading-relaxed">
                        First impressions happen in milliseconds. An amateur website makes your business look amateur, no matter how good you actually are.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">It's painfully slow and frustrating to use</h3>
                      <p className="text-gray-600 leading-relaxed">
                        53% of visitors abandon sites that take over 3 seconds to load. Your slow website is literally turning away half your potential customers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile users get a terrible experience</h3>
                      <p className="text-gray-600 leading-relaxed">
                        60% of traffic comes from mobile. If your site isn't mobile-optimized, you're losing more than half your potential business.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">You can't update it yourself and rely on developers</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Simple updates take weeks and cost hundreds. You're trapped paying someone else every time you need to change a word.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                  <p className="text-xl text-gray-900 font-semibold mb-4">
                    Here's the truth: Your website is your most important marketing asset.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We build websites that load instantly, look stunning on every device, and are designed specifically to convert visitors into customers. No fluff, no bloat—just clean, powerful websites that work. That's the difference between a website that sits there and one that actually grows your business.
                  </p>
                </div>
              </div>

              <div className="lg:sticky lg:top-8">
                <img
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Web development and coding"
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
              What's Included in Your Web Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to launch a professional website that drives real business results
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
              Choose Your Development Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional web solutions designed for your business needs
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
              <Rocket className="w-8 h-8 text-[#007bff]" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Launch Your New Website?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a custom quote and see how we can transform your online presence
          </p>
          <button className="bg-white text-[#007bff] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center gap-2">
            Request a Proposal
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Development Process
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery & Planning</h3>
              <p className="text-gray-600">
                We understand your goals, audience, and requirements to create a detailed project roadmap.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design & Development</h3>
              <p className="text-gray-600">
                We design beautiful interfaces and build robust, scalable websites using modern technologies.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Launch & Support</h3>
              <p className="text-gray-600">
                We launch your website and provide ongoing support to ensure optimal performance and growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
