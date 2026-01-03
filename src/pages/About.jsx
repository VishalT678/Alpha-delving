import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";

function About() {
  return (
    <>
      <div className="bg-[#E6F4FF]   ">
        <Nav />

        <section className="w-full py-16 md:py-20  ">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  About <span className="text-[#FF5A8A]">AlphaDelving</span>
                </h1>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl">
                  AlphaDelving is an ed-tech platform that trains kids and teenagers in programming and other tech skills so as to prepare them for the opportunities of the future.
                </p>
                <button className="inline-flex items-center gap-2 bg-[#FF6B9D] hover:bg-[#FF5A8A] text-white font-semibold px-5 py-3 rounded-lg transition-colors">
                  <span role="img" aria-label="search">🔍</span> Explore
                </button>
              </div>

              {/* Illustration */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/aboutus 1.png"
                  alt="About AlphaDelving illustration"
                  className="w-full max-w-xl h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        </div>

        {/* Features Include Section */}
        <div className="bg-[#FCBA4D] rounded-t-2xl w-full py-12 md:py-20 ">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 md:mb-16">
            Features Include
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Feature 1: Code Reviews */}
            <div className="flex flex-col">
              <div className="mb-6">
                <img
                  src="/2 1.png"
                  alt="Code Reviews"
                  className="w-full max-w-md h-auto"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Code Reviews
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We don't just give you assignments, we review your solutions and
                give you insightful feedbacks on your code to enhance and
                reinforce your understanding.
              </p>
            </div>

            {/* Feature 2: Mentorship */}
            <div className="flex flex-col">
              <div className="mb-6">
                <img
                  src="/2 2.png"
                  alt="Mentorship"
                  className="w-full max-w-md h-auto"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Mentorship
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Even without being in a physical class, we make it possible for
                our students to ask questions and get guidance through our
                seasoned and qualified mentors.
              </p>
            </div>

            {/* Feature 3: Live Code Editor */}
            <div className="flex flex-col">
              <div className="mb-6">
                <img
                  src="/2 3.png"
                  alt="Live Code Editor"
                  className="w-full max-w-md h-auto"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Live Code Editor
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether at home or on the go, you can still follow your classes
                and practice with our easy-to-use code editor. It works on both
                the web and mobile app.
              </p>
            </div>

            {/* Feature 4: Community Forums */}
            <div className="flex flex-col">
              <div className="mb-6">
                <img
                  src="/2 4.png"
                  alt="Community Forums"
                  className="w-full max-w-md h-auto"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Community Forums
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Just because you are learning online doesn't mean you have to be
                all alone. With our discussion forum, you can share your
                opinions with other students and even make friends.
              </p>
            </div>
          </div>
        </div>
      </div>
      

      <Footer />
    </>
  );
}

export default About;

