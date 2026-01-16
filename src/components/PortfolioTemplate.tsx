export function PortfolioTemplate() {
  const skills = [
    { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
    { name: 'WordPress', logo: 'https://s.w.org/style/images/about/WordPress-logotype-standard.png' },
    { name: 'FreeAgent', logo: 'https://www.freeagent.com/wp-content/themes/freeagent/img/logo.svg' },
    { name: 'Google Workspace', logo: 'https://lh3.googleusercontent.com/23K9TDTOdlo57Pi9JvNtPc9K-utoed1JM7BxbvBd7QAr4-hi5SypEbOiFvW2SGZH2TOo8jYn-sd5yaf6I3JMGO_vLvSIvFaTnWLnGWk' },
    { name: 'Meta Business Suite', logo: 'https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/S3Y3TH1pIuX.png' }
  ];

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

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 w-full h-32"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="max-w-full max-h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
