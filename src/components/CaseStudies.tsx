import { TrendingUp, Target, ArrowRight } from 'lucide-react';

export function CaseStudies() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Results From Real Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our workshop approach transformed these B2C businesses
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-blue-600 p-8 md:p-10 text-white flex flex-col justify-center">
                <div className="mb-4">
                  <TrendingUp className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Ant Vitale</h3>
                  <p className="text-blue-100 text-lg">The Boiler Co</p>
                  <p className="text-blue-100 text-sm mt-1">Plumbing & Construction</p>
                </div>
                <div className="mt-6 pt-6 border-t border-blue-400">
                  <div className="text-4xl font-bold mb-1">3x</div>
                  <div className="text-blue-100">Online Revenue Growth</div>
                </div>
              </div>
              <div className="md:w-2/3 p-8 md:p-10">
                <h4 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h4>
                <p className="text-gray-700 mb-6">
                  When Ant came to us, his lead generation was stale and he desperately needed to keep getting work for his team. His existing advertising wasn't making him money, and after dealing with pushy agencies and expensive quotes, he was frustrated and running out of options.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-4">The Transformation</h4>
                <p className="text-gray-700 mb-6">
                  Through our workshop, Ant gained complete understanding of how to build a profitable digital marketing system tailored to his plumbing and construction business. We identified the exact channels and strategies that would work for his specific market.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-4">The Results</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#007bff] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">More than tripled his online revenue in six months</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#007bff] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Every aspect of his digital marketing became profitable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#007bff] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Opened entirely new avenues for business growth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#007bff] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Understood every step of the process before implementation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex md:flex-row-reverse">
              <div className="md:w-1/3 bg-gradient-to-br from-green-500 to-green-600 p-8 md:p-10 text-white flex flex-col justify-center">
                <div className="mb-4">
                  <Target className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Peter</h3>
                  <p className="text-green-100 text-lg">E-Commerce Business</p>
                  <p className="text-green-100 text-sm mt-1">Online Retail</p>
                </div>
                <div className="mt-6 pt-6 border-t border-green-400">
                  <div className="text-4xl font-bold mb-1">€65k</div>
                  <div className="text-green-100">Monthly Growth Potential</div>
                </div>
              </div>
              <div className="md:w-2/3 p-8 md:p-10">
                <h4 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h4>
                <p className="text-gray-700 mb-6">
                  Peter came to us ready to invest in his e-commerce marketing, but he didn't feel confident about his approach moving forward. He was searching for an answer that didn't require expensive trial and error with his marketing budget.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-4">The Discovery</h4>
                <p className="text-gray-700 mb-6">
                  Our comprehensive research into his company revealed five significant areas for growth and identified a solution to a substantial seasonal bottleneck that was hindering their expansion. In a single session, we guided Peter through the exact steps to generate an extra €65,000 per month without paying for Google or Facebook ads.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-4">The Outcome</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Identified five significant growth opportunities specific to his business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Solved a major seasonal bottleneck limiting expansion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Gained a clear roadmap to €65,000 additional monthly revenue</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Understood every detail so he could easily implement with his team</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 md:p-10 text-center border border-blue-100">
            <p className="text-xl md:text-2xl text-gray-800 font-medium max-w-3xl mx-auto">
              These transformations happened because each business owner understood every step of the process before implementing it. No guessing, no hoping—just clarity and confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
