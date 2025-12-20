import { Award, Globe, Presentation, Users } from 'lucide-react';

export function Credentials() {
  const highlights = [
    {
      icon: Award,
      title: 'Academic Recognition',
      description: 'Received a fellowship from the University of Strathclyde for our contributions to digital marketing research and practice.'
    },
    {
      icon: Globe,
      title: 'International Experience',
      description: 'Worked with brands across Europe to build their online sales systems, bringing diverse market insights to every project.'
    },
    {
      icon: Users,
      title: 'Decade of Expertise',
      description: 'Our team combined has over a decade of digital marketing industry experience across multiple sectors and business types.'
    },
    {
      icon: Presentation,
      title: 'Industry Leadership',
      description: 'Presented insights at expos, conferences, and events across the UK and into Europe, sharing proven strategies with the business community.'
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Experience You Can Trust
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team brings together academic research, international experience, and proven results across diverse B2C markets
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#007bff]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 md:p-10 text-center border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Who This Is For
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            Our workshops are specifically designed for B2C business owners doing more than £50,000 per month who understand that real growth requires real strategy. This isn't for everyone—it's for businesses serious about understanding their marketing before investing in implementation.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8 text-left">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">You're Ready If:</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Doing £50k+ monthly revenue</li>
                <li>• Serious about growth</li>
                <li>• Want to understand your strategy</li>
                <li>• Ready to invest in clarity</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">This Won't Work If:</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Looking for a magic button</li>
                <li>• Want someone to do it all for you</li>
                <li>• Not ready to understand the strategy</li>
                <li>• Expecting instant results</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">You'll Receive:</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Initial consultation & research</li>
                <li>• Custom marketing plan</li>
                <li>• Half-day workshop (online/in-person)</li>
                <li>• Complete strategic clarity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
