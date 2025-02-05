export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-2">Digital Strategy</h3>
            <p className="text-gray-300">
              Strategic consulting and roadmap development for digital transformation.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-2">Technology Implementation</h3>
            <p className="text-gray-300">
              End-to-end implementation of cutting-edge technology solutions.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 