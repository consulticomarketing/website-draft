import { Share2, Users, TrendingUp, Award, BarChart3, CheckCircle, ArrowRight, Heart, MessageCircle, Hash } from 'lucide-react';
import { useState } from 'react';

export function SocialMediaPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const benefits = [
    {
      icon: Users,
      title: 'Build Engaged Community',
      description: 'Create loyal followers who actively engage with your brand and become advocates.'
    },
    {
      icon: TrendingUp,
      title: 'Increase Brand Awareness',
      description: 'Expand your reach and get your business in front of thousands of potential customers.'
    },
    {
      icon: Heart,
      title: 'Authentic Connections',
      description: 'Build genuine relationships with your audience through meaningful conversations.'
    },
    {
      icon: BarChart3,
      title: 'Measurable Results',
      description: 'Track engagement, reach, and conversions with detailed analytics and reporting.'
    }
  ];

  const services = [
    {
      title: 'Social Media Strategy',
      description: 'Comprehensive strategy aligned with your business goals and target audience.',
      features: [
        'Platform selection and optimization',
        'Content strategy development',
        'Audience research and targeting',
        'Competitive analysis',
        'Performance benchmarking'
      ]
    },
    {
      title: 'Content Creation & Management',
      description: 'Professional content that resonates with your audience and drives engagement.',
      features: [
        'Custom graphics and visuals',
        'Engaging caption writing',
        'Content calendar planning',
        'Hashtag research',
        'Posting and scheduling'
      ]
    },
    {
      title: 'Community Management',
      description: 'Active community engagement to build relationships and brand loyalty.',
      features: [
        'Comment monitoring and responses',
        'Direct message management',
        'Proactive engagement',
        'Reputation management',
        'Crisis communication'
      ]
    },
    {
      title: 'Social Media Advertising',
      description: 'Targeted ad campaigns that reach the right people and drive conversions.',
      features: [
        'Campaign strategy and setup',
        'Ad creative development',
        'Audience targeting',
        'Budget optimization',
        'Performance tracking'
      ]
    }
  ];

  const packages = [
    {
      name: 'Social Starter',
      price: 'Custom',
      description: 'Essential social media for growing businesses',
      features: [
        '2 platforms managed',
        '12 posts per month',
        'Basic graphics',
        'Community monitoring',
        'Monthly reporting'
      ],
      highlighted: false
    },
    {
      name: 'Social Growth',
      price: 'Custom',
      description: 'Comprehensive social strategy for scaling',
      features: [
        'Everything in Starter',
        '4 platforms managed',
        '20 posts per month',
        'Custom graphics and videos',
        'Active community engagement',
        'Story and reel content',
        'Priority support'
      ],
      highlighted: true
    },
    {
      name: 'Social Enterprise',
      price: 'Custom',
      description: 'Full-scale social media for large organizations',
      features: [
        'Everything in Growth',
        'Unlimited platforms',
        'Daily content',
        'Dedicated social media manager',
        'Paid advertising campaigns',
        'Influencer partnerships',
        'Real-time monitoring',
        '24/7 support'
      ],
      highlighted: false
    }
  ];

  const stats = [
    { number: '500K+', label: 'Social Impressions' },
    { number: '92%', label: 'Engagement Increase' },
    { number: '250+', label: 'Campaigns Managed' },
    { number: '3.8x', label: 'Average ROI' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-pink-50 via-white to-rose-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Share2 className="w-4 h-4" />
              Social Media Marketing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Turn Social Media Into a{' '}
              <span className="text-[#007bff]">Revenue-Generating Machine</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Stop posting into the void. We create strategic social media campaigns that build engaged communities, drive brand awareness, and generate real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#007bff] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
                Get Your Social Strategy
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-[#007bff] hover:text-[#007bff] transition-colors duration-200">
                View Our Results
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
              You're posting regularly but getting zero results
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xl text-gray-600 mb-12">
                  You know social media matters. You've seen competitors build massive followings and generate leads effortlessly. But when you post, crickets. Low engagement, no growth, and definitely no sales. Something's not working.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Your posts get ignored by the algorithm</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Without strategic posting times, formats, and engagement tactics, your content never reaches beyond your existing followers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">You're not sure what content to post</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Guessing what your audience wants leads to inconsistent posting and content that doesn't resonate or drive engagement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Managing multiple platforms is overwhelming</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Between Instagram, Facebook, LinkedIn, and TikTok, you're spread too thin and doing nothing well.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Social media isn't translating to actual sales</h3>
                      <p className="text-gray-600 leading-relaxed">
                        You have followers, but they're not becoming customers. Vanity metrics don't pay the bills.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                  <p className="text-xl text-gray-900 font-semibold mb-4">
                    Here's the truth: Social media is a science, not guesswork.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We know exactly what content performs, when to post it, and how to turn followers into paying customers. While others are posting randomly and hoping for the best, we're using proven strategies that consistently deliver results. That's the difference between having a social media presence and having a social media strategy.
                  </p>
                </div>
              </div>

              <div className="lg:sticky lg:top-8">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Social media marketing and engagement"
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
              What's Included in Your Social Media Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build a powerful social media presence that drives real business growth
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
              Choose Your Social Media Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic social media management that grows with your business
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
              <MessageCircle className="w-8 h-8 text-[#007bff]" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's build a social media strategy that drives engagement, builds community, and generates revenue
          </p>
          <button className="bg-white text-[#007bff] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center gap-2">
            Start Growing Your Socials
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Social Media Process
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy Development</h3>
              <p className="text-gray-600">
                We analyze your audience, competitors, and goals to create a data-driven social media strategy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Content Creation & Posting</h3>
              <p className="text-gray-600">
                We create engaging content and post strategically to maximize reach and engagement.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007bff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Engage & Optimize</h3>
              <p className="text-gray-600">
                We actively engage with your community and continuously optimize based on performance data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
