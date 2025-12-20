import { AlertCircle, CheckCircle } from 'lucide-react';

export function ProblemSolution() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Challenge With Digital Marketing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most B2C businesses face the same frustrating challenges when trying to scale their marketing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-start gap-4 mb-4">
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Struggles</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>Unclear ROI from marketing investments and agency partnerships</li>
                  <li>Difficulty building effective marketing systems without specialized expertise</li>
                  <li>Generic strategies that don't align with your specific business model</li>
                  <li>Uncertainty about whether your current marketing can scale with growth</li>
                  <li>Need for a marketing system that evolves alongside your business</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-start gap-4 mb-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">The Solution</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>A short-term solution which answers long term problem</li>
                  <li>Save money over time by investing in the right things</li>
                  <li>Get rid of the guesswork</li>
                  <li>Walk away with actionable insights</li>
                  <li>Benefit from a bespoke workshop to go through your specific solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-10 shadow-lg border border-blue-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            A Different Approach: Done-With-You Strategy
          </h3>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700">
            <p>
              We don't throw you into the deep end with another generic marketing strategy. Instead, you get a comprehensive initial consultation where we dive deep into your current business position and exactly what you want to achieve.
            </p>
            <p>
              Our team builds you a bespoke marketing plan specifically for your business, with strategy proposals, ROI projections, and step-by-step training on each component.
            </p>
            <p className="font-medium text-gray-900">
              You get a custom half-day workshop for you and your team which ensures every single step makes perfect sense before you spend a penny on implementation.
            </p>
            <p className="text-center text-xl font-semibold text-[#007bff] mt-6">
              You're not guessing or hoping anymore. You know exactly what will work and why it will work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
