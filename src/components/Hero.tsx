export function Hero() {
  return (
    <section className="relative bg-transparent py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <p className="text-sm md:text-base font-medium text-gray-600 tracking-wide uppercase">
                Done-With-You Digital Marketing
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Understand Your Marketing Strategy{' '}
              <span className="text-[#007bff]">Before You Invest</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We help B2C businesses fully understand how to ensure digital marketing will be profitable, without having to blindly invest in long-term solutions you don't understand.
            </p>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Through comprehensive consultation and custom workshops, you'll gain complete clarity on your marketing strategy with ROI projections and step-by-step guidance for each component.
            </p>
          </div>

          <div className="lg:pl-8 flex justify-center lg:justify-start">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full md:w-3/4 lg:w-full">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Marketing Workshop Overview"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
