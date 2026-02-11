import { Palette, Eye, Award, BarChart3, CheckCircle, ArrowRight, Sparkles, Target, Layers, Zap } from 'lucide-react';
import { useState } from 'react';

export function BrandingPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const benefits = [
    {
      icon: Eye,
      title: 'Stand Out from Competition',
      description: 'Create a distinctive brand identity that makes your business instantly recognizable and memorable.'
    },
    {
      icon: Target,
      title: 'Connect with Your Audience',
      description: 'Build emotional connections that transform customers into loyal brand advocates.'
    },
    {
      icon: Award,
      title: 'Premium Perception',
      description: 'Elevate your brand image to command higher prices and attract quality customers.'
    },
    {
      icon: BarChart3,
      title: 'Consistent Brand Experience',
      description: 'Deliver cohesive messaging across all touchpoints for maximum impact and recognition.'
    }
  ];

  const services = [
    {
      title: 'Brand Identity Design',
      description: 'Create a visual identity that captures your brand essence and resonates with your audience.',
      features: [
        'Logo design and variations',
        'Color palette development',
        'Typography system',
        'Brand style guide',
        'Visual asset library'
      ]
    },
    {
      title: 'Brand Strategy & Positioning',
      description: 'Define your brand purpose, values, and unique market position.',
      features: [
        'Brand purpose and mission',
        'Core values definition',
        'Brand personality framework',
        'Competitive positioning',
        'Brand architecture'
      ]
    },
    {
      title: 'Brand Messaging & Voice',
      description: 'Craft compelling messaging that speaks directly to your target audience.',
      features: [
        'Brand voice guidelines',
        'Key messaging framework',
        'Tagline development',
        'Brand story creation',
        'Tone of voice templates'
      ]
    },
    {
      title: 'Brand Collateral & Assets',
      description: 'Design professional materials that bring your brand to life across all channels.',
      features: [
        'Business card design',
        'Letterhead and templates',
        'Social media templates',
        'Presentation decks',
        'Marketing collateral'
      ]
    }
  ];

  const packages = [
    {
      name: 'Brand Essentials',
      price: 'Custom',
      description: 'Perfect for startups and small businesses',
      features: [
        'Logo design',
        'Color palette',
        'Basic brand guidelines',
        '2 rounds of revisions',
        'Email support'
      ],
      highlighted: false
    },
    {
      name: 'Brand Complete',
      price: 'Custom',
      description: 'Comprehensive branding for growing businesses',
      features: [
        'Everything in Essentials',
        'Full brand strategy',
        'Brand messaging framework',
        'Complete style guide',
        'Marketing collateral design',
        'Priority support'
      ],
      highlighted: true
    },
    {
      name: 'Brand Enterprise',
      price: 'Custom',
      description: 'Full-scale branding for established companies',
      features: [
        'Everything in Complete',
        'Multi-brand architecture',
        'Dedicated brand consultant',
        'Brand rollout strategy',
        'Staff training materials',
        'Ongoing brand management',
        '24/7 support'
      ],
      highlighted: false
    }
  ];

  const stats = [
    { number: '300+', label: 'Brands Created' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '2 Weeks', label: 'Average Delivery' },
    { number: '89%', label: 'Revenue Increase' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-rose-50 via-white to-orange-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Palette className="w-4 h-4" />
              Branding & Image
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Build a Brand That{' '}
              <span className="text-[#007bff]">People Remember & Trust</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Your brand is more than a logo. It's the feeling people get when they think of your business. We create powerful brand identities that attract the right customers and drive lasting growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#007bff] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
                Start Your Brand Journey
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-[#007bff] hover:text-[#007bff] transition-colors duration-200">
                View Our Portfolio
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
              Your business deserves better than a forgettable brand
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xl text-gray-600 mb-12">
                  You've poured your heart into building something great. But when customers can't tell you apart from competitors, all that hard work goes unnoticed. Your brand should be doing the heavy lifting.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">You look like everyone else in your industry</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Generic branding makes it impossible to stand out. Customers don't remember you because there's nothing memorable about your brand.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Your brand doesn't reflect the quality you deliver</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Amateur branding makes your business look cheap, even when you deliver premium results. First impressions matter.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Inconsistent messaging confuses potential customers</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Without clear brand guidelines, every touchpoint tells a different story. Confusion kills conversions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">You're competing on price because you lack brand value</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Without strong branding, customers see you as a commodity. Strong brands command premium pricing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                  <p className="text-xl text-gray-900 font-semibold mb-4">
                    Here's the truth: Your brand is your biggest business asset.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Strong brands attract better customers, command higher prices, and create lasting loyalty. We don't just make things look pretty—we build strategic brand identities that drive real business results. Your brand should work as hard as you do.
                  </p>
                </div>
              </div>

              <div className="lg:sticky lg:top-8">
                <img
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Brand design and strategy"
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
              What's Included in Your Branding Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build a brand that attracts, converts, and retains customers
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
              Choose Your Branding Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional branding solutions tailored to your business needs
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
            Ready to Build Your Brand?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create a brand identity that sets you apart and drives business growth
          </p>
          <button className="bg-white text-[#007bff] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center gap-2">
            Start Your Brand Project
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Branding Process
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery & Strategy</h3>
              <p className="text-gray-600">
                We dive deep into your business, audience, and goals to create a strategic foundation for your brand.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design & Development</h3>
              <p className="text-gray-600">
                We create your visual identity, messaging framework, and all brand assets with strategic precision.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Launch & Support</h3>
              <p className="text-gray-600">
                We deliver your complete brand package with guidelines and ongoing support for consistent implementation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
