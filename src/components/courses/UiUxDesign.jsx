import { Link } from 'react-router-dom'
import Nav from "../common/Nav";
import Footer from "../common/Footer";

function UiUxDesign() {
  return (
    <>
      <div className="bg-[#F9EDE3] min-h-screen">
        <Nav />

        <section className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6 lg:col-span-1">
              <img
                src="/courses3 2.png"
                alt="UI / UX Designing"
                className="w-full rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Course Details
              </h2>
              <ul className="space-y-3 text-sm text-gray-800">
                <li>📚 7 course materials</li>
                <li>🧩 2 Projects</li>
                <li>🎥 12 Videos</li>
              </ul>
              <Link to="/contact" className="block mt-6 w-full bg-[#FF3B7F] text-white font-semibold py-3 rounded-md text-sm hover:bg-[#e43372] transition-colors text-center">
                ENROLL NOW
              </Link>
            </div>

            <div className="bg-[#F8C35C] rounded-xl shadow-md p-6 lg:col-span-2">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                UI / UX Designing
              </h1>
              <p className="text-xs text-gray-800 mb-4">
                ⏱ Duration: 3 weeks &nbsp; | &nbsp; 📂 3 Levels &nbsp; | &nbsp; ⭐ Status:
                Intermediate
              </p>
              <h2 className="font-semibold text-gray-900 mb-2">Description</h2>
              <p className="text-sm text-gray-800 leading-relaxed">
                Master the foundations of user interface and user experience design.
                Learn how to create user-centered designs, wireframes and prototypes that
                delight users.
              </p>
            </div>
          </div>

          <div className="bg-[#E6F4FF] rounded-xl shadow-md p-6">
            <h2 className="font-semibold text-gray-900 mb-4">📺 Videos</h2>
            <ul className="divide-y divide-gray-200 text-sm text-gray-800">
              {[
                "Introduction to UI / UX",
                "Design Principles",
                "Wireframing Basics",
                "Prototyping Tools",
                "Usability Testing",
              ].map((title, idx) => (
                <li
                  key={title + idx}
                  className="flex items-center justify-between py-3"
                >
                  <span>{title}</span>
                  <span className="text-xs text-gray-600">02 : 10</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default UiUxDesign;


