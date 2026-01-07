import { Link } from 'react-router-dom'
import Nav from "../common/Nav";
import Footer from "../common/Footer";

function FrontendDev() {
  return (
    <>
      <div className="bg-[#D1E4F1] min-h-screen">
        <Nav />

        {/* <section className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-10"> */}

          <div className="bg-[#F8C35C] h-[500px] shadow-md p-6 lg:col-span-2">
            <div className="flex flex-col  items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Frontend Development
              </h1>
              <p className="text-lg font-bold text-gray-800 mb-4">
                ⏱ Duration: 4 weeks &nbsp; | &nbsp; 📂 4 Levels &nbsp; | &nbsp; ⭐ Status:
                Intermediate
              </p>
            </div>
            <div className="bg-white  w-[480px]  rounded-xl shadow-md p-6 lg:col-span-1">
              <img
                src="/courses3 1.png"
                alt="Frontend Development"
                className=" rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Course Details
              </h2>
              <ul className="space-y-3 text-sm text-gray-800">
                <li>📚 10 course materials</li>
                <li>🧩 3 Projects</li>
                <li>🎥 15 Videos</li>
              </ul>
              <Link to="/contact" className="block mt-6 w-[430px] bg-[#FF3B7F] text-white font-semibold py-3 rounded-md text-sm hover:bg-[#e43372] transition-colors text-center">
                ENROLL NOW
              </Link>
            </div>
              </div>
              <h2 className="font-semibold  bg-black text-white flex justify-center items-center py-2 mb-2">Description</h2>

                      



         
          <div className="flex flex-col items-end">
          <div className="">
          <p className="text-sm text-gray-800 leading-relaxed">
                Learn how to build beautiful, responsive websites using HTML, CSS and
                modern JavaScript frameworks. This course walks you through practical
                projects to solidify your skills.
              </p>
            
            <ul className="divide-y divide-[#BFBEBE] text-sm text-black">
            <h2 className="font-bold text-gray-900 mb-4">📺 Videos</h2>
              {[
                "Introduction to Frontend",
                "HTML Basics",
                "Modern CSS",
                "JavaScript for the Web",
                "Building Responsive Layouts",
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
        {/* </section> */}
        </div>
      </div>
       {/* </div> */}
      <Footer />
    </>
  );
}

export default FrontendDev;


