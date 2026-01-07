import { Link } from 'react-router-dom'
import Nav from '../components/common/Nav'
import Footer from '../components/common/Footer'

function Tutorials() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <Nav />

        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
            Quick Tutorials
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Explore our quick tutorials and see where our students are placed in top tech companies.
          </p>

          {/* Link to Placements */}
          <div className="flex justify-center mt-12">
            <Link
              to="/placements"
              className="bg-[#4A90E2] hover:bg-[#3A7BC8] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg inline-flex items-center gap-2"
            >
              View Student Placements
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Tutorials

