import { FileText, TrendingUp, Award, BarChart3, CheckCircle, ArrowRight, Pen, Users, BookOpen, Video } from 'lucide-react';
import { useState } from 'react';

export function ContentCreationPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Drive Organic Traffic',
      description: 'Quality content attracts qualified visitors and improves your search engine rankings naturally.'
    },
    {
      icon: Users,
      title: 'Build Authority & Trust',
      description: 'Establish your expertise and credibility through valuable, informative content.'
    },
    {
      icon: Award,
      title: 'Convert More Customers',
      description: 'Strategic content guides prospects through the buyer journey, increasing conversions.'
    },
    {
      icon: BarChart3,
      title: 'Long-Term ROI',
      description: 'Content is an investment that continues to generate leads and sales over time.'
    }
  ];

  const services = [
    {
      title: 'Blog & Article Writing',
      description: 'SEO-optimized blog posts and articles that attract, engage, and convert your target audience.',
      features: [
        'Keyword research and optimization',
        'Industry-specific content',
        'Long-form articles',
        'Thought leadership pieces',
        'Editorial calendar planning'
      ]
    },
    {
      title: 'Website Copy & Landing Pages',
      description: 'Conversion-focused copy that communicates value and drives action.',
      features: [
        'Homepage and service pages',
        'Landing page copywriting',
        'Product descriptions',
        'About and team pages',
        'Call-to-action optimization'
      ]
    },
    {
      title: 'Video Scripts & Podcasts',
      description: 'Engaging scripts and content for video and audio marketing channels.',
      features: [
        'Video script development',
        'Podcast episode planning',
        'Interview questions',
        'Presentation content',
        'Storyboarding'
      ]
    },
    {
      title: 'Social Media Content',
      description: 'Platform-specific content that builds engagement and grows your audience.',
      features: [
        'Social media posts',
        'Caption writing',
        'Content calendars',
        'Hashtag strategy',
        'Community engagement content'
      ]
    }
  ];

  const packages = [
    {
      name: 'Content Starter',
      price: 'Custom',
      description: 'Essential content for building your online presence',
      features: [
        '4 blog posts per month',
        'Keyword research',
        'Basic SEO optimization',
        '1 revision per piece',
        'Email support'
      ],
      highlighted: false
    },
    {
      name: 'Content Growth',
      price: 'Custom',
      description: 'Comprehensive content strategy for scaling businesses',
      features: [
        'Everything in Starter',
        '8 blog posts per month',
        'Landing page copywriting',
        'Social media content',
        'Content strategy planning',
        'Priority support'
      ],
      highlighted: true
    },
    {
      name: 'Content Enterprise',
      price: 'Custom',
      description: 'Full-scale content production for large organizations',
      features: [
        'Everything in Growth',
        'Unlimited content',
        'Dedicated content team',
        'Video scripts and podcasts',
        'Content performance analysis',
        'Multi-channel distribution',
        '24/7 support'
      ],
      highlighted: false
    }
  ];

  const stats = [
    { number: '500K+', label: 'Words Written' },
    { number: '94%', label: 'Client Retention' },
    { number: '3.5x', label: 'Average Traffic Increase' },
    { number: '200+', label: 'Content Campaigns' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Pen className="w-4 h-4" />
              Content Creation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Content That Attracts, Engages, and{' '}
              <span className="text-[#007bff]">Converts</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Stop struggling to create content. We produce strategic, high-quality content that drives traffic, builds authority, and generates real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#007bff] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
                Get Your Content Strategy
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-[#007bff] hover:text-[#007bff] transition-colors duration-200">
                View Content Samples
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
              You know you need content, but creating it consistently is impossible
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xl text-gray-600 mb-12">
                  Content marketing works. You've seen competitors dominate with blogs, videos, and social posts. But between running your business and everything else, there's no time to create content that actually moves the needle.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">You don't have time to write regularly</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Creating quality content takes hours you don't have. Your blog sits empty while competitors publish weekly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">You're not sure what to write about</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Staring at a blank page, wondering what your audience wants to read. No strategy, just guessing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Your content isn't generating results</h3>
                      <p className="text-gray-600 leading-relaxed">
                        You've published content before, but it gets no traffic, no engagement, and definitely no leads.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Hiring writers hasn't worked out</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Freelancers deliver generic content that doesn't understand your business or resonate with your audience.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                  <p className="text-xl text-gray-900 font-semibold mb-4">
                    Here's the truth: Great content is a competitive advantage.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    While your competitors struggle with the same challenges, we'll fill your content calendar with strategic pieces that attract your ideal customers. Every article, every post, every word is designed to build authority, drive traffic, and generate leads. That's not just content—that's a growth engine.
                  </p>
                </div>
              </div>

              <div className="lg:sticky lg:top-8">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Content creation and writing"
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
              What's Included in Your Content Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic content that works across every channel to grow your business
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
              Choose Your Content Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible content solutions that scale with your business
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
            Ready to Build Your Content Engine?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create a content strategy that drives traffic, builds authority, and generates leads
          </p>
          <button className="bg-white text-[#007bff] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center gap-2">
            Start Creating Content
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Content Process
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy & Planning</h3>
              <p className="text-gray-600">
                We research your audience, competitors, and keywords to create a strategic content roadmap.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Creation & Optimization</h3>
              <p className="text-gray-600">
                Our expert writers craft SEO-optimized, engaging content that resonates with your target audience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Publish & Analyze</h3>
              <p className="text-gray-600">
                We handle publishing and track performance, continuously optimizing for better results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
