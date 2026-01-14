import { Link } from 'react-router-dom'
import Nav from "../common/Nav";
import Footer from "../common/Footer";

function IntroProgramming() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <Nav />

        {/* Top yellow section with course title and card */}
        <section className="bg-[#FFC34D] pt-10 pb-6">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 flex flex-col lg:flex-row gap-10 items-start">
            {/* Left card */}
            <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm">
              <img
                src="/courses2 1.png"
                alt="Introduction to Programming"
                className="w-full rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Course Details
              </h2>
              <ul className="space-y-3 text-sm text-gray-800 mb-6">
                <li className="flex items-center gap-2">
                  <span>📚</span>
                  <span>8 course materials</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🧩</span>
                  <span>2 Projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🎥</span>
                  <span>10 Videos</span>
                </li>
              </ul>
              <Link to="/contact" className="block w-full bg-[#FF3B7F] text-white font-semibold py-3 rounded-md text-sm hover:bg-[#e43372] transition-colors text-center">
                ENROLL NOW
              </Link>
            </div>

            {/* Right heading/meta */}
            <div className="flex-1 flex flex-col justify-end">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Introduction to Programming
              </h1>
              <p className="text-base md:text-lg text-gray-800 mb-4">
                ⏱ Duration: 3 weeks &nbsp; | &nbsp; 📂 3 Levels &nbsp; | &nbsp; ⭐ Status: Beginner
              </p>
              <p className="text-sm text-gray-700 leading-relaxed max-w-2xl">
                Understanding core programming concepts is necessary for starting a career in software development, data science and many more. This is your first step to becoming a world-class tech pro.
              </p>
            </div>
          </div>
          {/* Black divider bar under top section */}
          <div className="mt-6 h-4 bg-black" />
        </section>

        {/* Description + videos on light blue background */}
        <section className="bg-[#E6F4FF] py-12">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 space-y-8">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-base text-gray-800 leading-relaxed max-w-4xl">
                Understanding core programming concepts is necessary for starting a career
                in software development, data science and many more. This is your first
                step to becoming a world-class tech pro. Learn the fundamentals of programming
                including variables, data types, control structures, functions, and more.
              </p>
            </div>

            {/* Videos list */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3 bg-gray-50">
                <span className="text-2xl">📺</span>
                <h2 className="text-xl font-bold text-gray-900">Course Videos</h2>
              </div>
              <ul className="divide-y divide-gray-200">
                {[
                  "Introduction to Programming",
                  "Understanding Syntax",
                  "Variables and Data Types",
                  "Control Structures",
                  "Functions and Modules",
                  "Object-Oriented Programming Basics",
                ].map((title, idx) => (
                  <li
                    key={title + idx}
                    className="flex items-center justify-between px-6 py-4 hover:bg-[#F3F8FF] transition-colors"
                  >
                    <span className="text-gray-800 font-medium">{title}</span>
                    <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded">02 : 10</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default IntroProgramming;
