import { Link } from "react-router-dom";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";

function Courses() {
  return (
    <>
      <div className="bg-[#F9EDE3] min-h-screen">
        <Nav />

        {/* Hero / Search Section */}
        <section className="w-full py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                <span className="text-[#0F75BC] font-bold">Search</span> for your desired{" "}
                <span className="text-[#E54066] font-bold">courses</span>
              </h1>
              <div className="flex items-center gap-2 w-full max-w-2xl bg-white rounded-md shadow-sm border border-gray-200 px-3 py-2">
                <input
                  type="text"
                  placeholder="What are you looking for ?"
                  className="flex-1 text-sm md:text-base text-gray-700 outline-none"
                />
                <button className="bg-[#E54066] text-white px-3 py-2 rounded-md text-sm hover:bg-[#d53659] transition-colors">
                  🔍
                </button>
              </div>
              <p className="text-sm text-gray-600">
                Find the right course for your learning path.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src="/courses1 1.png"
                alt="Search illustration"
                className="w-full max-w-xl h-auto"
              />
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="bg-[#F8C35C] w-full py-16 md:py-20 rounded-t-[28px]">
          <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-10">
              Check out our courses
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Card 1 */}
              <Link
                to="/courses/introduction-to-programming"
                className="bg-white rounded-xl shadow-md overflow-hidden block hover:translate-y-1 hover:shadow-lg transition-transform"
              >
                <img
                  src="/courses2 1.png"
                  alt="Introduction to Programming"
                  className="w-full h-56 object-cover"
                />
                <div className="text-center px-6 py-4">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">
                    Introduction to Programming
                  </h3>
                  <span className="text-[#0F75BC] text-xs font-semibold hover:underline">
                    Click to learn more
                  </span>
                </div>
              </Link>

              {/* Card 2 */}
              <Link
                to="/courses/frontend-development"
                className="bg-white rounded-xl shadow-md overflow-hidden block hover:translate-y-1 hover:shadow-lg transition-transform"
              >
                <img
                  src="/courses3 1.png"
                  alt="Frontend Development"
                  className="w-full h-56 object-cover"
                />
                <div className="text-center px-6 py-4">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">
                    Frontend Development
                  </h3>
                  <span className="text-[#0F75BC] text-xs font-semibold hover:underline">
                    Click to learn more
                  </span>
                </div>
              </Link>

              {/* Card 3 */}
              <Link
                to="/courses/ui-ux-designing"
                className="bg-white rounded-xl shadow-md overflow-hidden block hover:translate-y-1 hover:shadow-lg transition-transform"
              >
                <img
                  src="/courses3 2.png"
                  alt="UI / UX Designing"
                  className="w-full h-56 object-cover"
                />
                <div className="text-center px-6 py-4">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">
                    UI / UX Designing
                  </h3>
                  <span className="text-[#0F75BC] text-xs font-semibold hover:underline">
                    Click to learn more
                  </span>
                </div>
              </Link>

              {/* Card 4 */}
              <Link
                to="/courses/sql-programming"
                className="bg-white rounded-xl shadow-md overflow-hidden block hover:translate-y-1 hover:shadow-lg transition-transform"
              >
                <img
                  src="/programming 1.png"
                  alt="SQL Programming"
                  className="w-full h-56 object-cover"
                />
                <div className="text-center px-6 py-4">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">
                    SQL Programming
                  </h3>
                  <span className="text-[#0F75BC] text-xs font-semibold hover:underline">
                    Click to learn more
                  </span>
                </div>
              </Link>
            </div>

            <div className="flex justify-center mt-12">
              <button className="bg-[#0F75BC] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#0d659f] transition-colors">
                View All Courses
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Courses;

