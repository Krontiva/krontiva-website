export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-white mb-6">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards can be added here */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-2">Digital Transformation</h3>
            <p className="text-gray-300">
              Enterprise-wide digital transformation projects for leading organizations.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 