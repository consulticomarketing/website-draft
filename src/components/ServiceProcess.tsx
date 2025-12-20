import { ClipboardList, Users, Lightbulb, Rocket } from 'lucide-react';

export function ServiceProcess() {
  const steps = [
    {
      icon: ClipboardList,
      title: 'Initial Consultation',
      description: 'We dive deep into your current business position and exactly what you want to achieve. We conduct preliminary research to understand your market, competitors, and opportunities.'
    },
    {
      icon: Lightbulb,
      title: 'Bespoke Strategy Development',
      description: 'Our team builds a custom marketing plan specifically for your business, complete with strategy proposals, ROI projections, and detailed analysis of growth opportunities.'
    },
    {
      icon: Users,
      title: 'Custom Workshop Delivery',
      description: 'You receive a comprehensive half-day workshop for you and your team with step-by-step training on each component. Available online or in-person, designed to ensure complete understanding.'
    },
    {
      icon: Rocket,
      title: 'Clear Implementation Path',
      description: 'Walk away with a complete understanding of how to make digital marketing profitable for your specific business. Every step makes sense before you invest a penny in implementation.'
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured process designed to give you complete clarity and confidence in your marketing strategy
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-[#007bff]" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#007bff] mb-2">
                      Step {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-50 rounded-xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What Makes This Different
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#007bff] mb-2">30 Days</div>
              <p className="text-gray-700">From booking to workshop delivery</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#007bff] mb-2">100% Custom</div>
              <p className="text-gray-700">Every strategy built for your specific business</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#007bff] mb-2">Complete Clarity</div>
              <p className="text-gray-700">Understand every step before investing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
