export function PortfolioTemplate() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Paul Wilson
              </h1>
              <h2 className="text-2xl text-gray-600 font-medium">
                Founder, Marketing Strategist, Operating Investor
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Managing Partner of Consultico Group, where I lead growth strategy,
                capital deployment, and structured acquisitions in founder-led businesses.
                I focus on building scalable commercial systems and turning strong brands
                into durable, profitable operations. My work sits at the intersection of
                strategy, execution, and governance. Alongside Consultico, I invest in and
                support portfolio companies through hands-on, outcome-driven leadership.
                Recent activity includes a seller-financed acquisition in the media and
                content space.
              </p>
            </div>

            <div className="relative">
              <img
                src="/screenshot_2026-01-16_at_13.56.31.png"
                alt="Paul Wilson presenting"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
