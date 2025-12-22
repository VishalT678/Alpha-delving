import Nav from '../components/common/Nav'

function Tutorials() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Nav />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
          Quick Tutorials Page
        </h1>
        <p className="text-lg text-gray-600 text-center">
          This page is under development.
        </p>
      </div>
    </div>
  )
}

export default Tutorials

