export function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to Consultico
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your partner in digital marketing excellence. Explore our services and discover how we can help grow your business.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="p-8 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Strategy</h3>
          <p className="text-gray-600">
            Data-driven approaches to maximize your digital presence and ROI.
          </p>
        </div>

        <div className="p-8 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Results</h3>
          <p className="text-gray-600">
            Track record of success across SEO, content marketing, and paid advertising.
          </p>
        </div>

        <div className="p-8 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Support</h3>
          <p className="text-gray-600">
            Personalized guidance and support throughout your digital journey.
          </p>
        </div>
      </div>
    </div>
  );
}
