import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";

function Home() {
  return (
    <>
      {/* Navigation */}
      <div className="bg-[#4A90E2] relative">
        <Nav />

        {/* Main Content */}
        <div className="max-w-7xl px-8 mx-auto md:px-10 lg:px-16 py-25">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white z-10">
              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                Learn on your schedule
              </h1>

              {/* Search Bar */}
              <div className="flex items-center gap-3 max-w-2xl">
                <input
                  type="text"
                  placeholder="Search for your desired courses"
                  className="flex-1 px-6 py-4 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-lg"
                />
                <button className="bg-[#FF6B9D] hover:bg-[#FF5A8A] text-white p-4 rounded-lg transition-colors flex items-center justify-center min-w-[56px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side - Image Placeholder */}
            <div className="relative z-10 flex items-center justify-center overflow-hidden">
              <div className="w-full max-w-md h-[500px] bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
                <p className="text-white/70 text-lg">Image placeholder</p>
              </div>

              {/* Decorative Circles Background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <div className="w-96 h-96 rounded-full border-4 border-blue-400/30 absolute"></div>
                <div className="w-[500px] h-[500px] rounded-full border-4 border-blue-400/20 absolute"></div>
                <div className="w-[600px] h-[600px] rounded-full border-4 border-blue-400/10 absolute"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section - Pink Background */}
      <div className="bg-[#FF6B9D] w-full py-12">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Courses Statistic */}
            <div className="text-white">
              <div className="text-6xl md:text-7xl font-bold mb-2">5000+</div>
              <div className="text-xl md:text-2xl font-medium">Courses</div>
            </div>

            {/* Tutors Statistic */}
            <div className="text-white">
              <div className="text-6xl md:text-7xl font-bold mb-2">2000+</div>
              <div className="text-xl md:text-2xl font-medium">Tutors</div>
            </div>

            {/* Students Statistic */}
            <div className="text-white">
              <div className="text-6xl md:text-7xl font-bold mb-2">1000+</div>
              <div className="text-xl md:text-2xl font-medium">Students</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section - White Background */}
      <div className="bg-white w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
          {/* Section Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16 md:mb-20">
            Why Choose Us?
          </h2>

          {/* Feature 1: Detailed Syllabus with Localized Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image on Left */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/1 1.png"
                alt="Detailed Syllabus"
                className="w-full max-w-lg h-auto"
              />
            </div>

            {/* Content on Right */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Detailed Syllabus with Localized Content
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We offer a comprehensive syllabus with localized content and
                examples to help you grasp programming concepts easily, even
                without prior experience.
              </p>
            </div>
          </div>

          {/* Feature 2: An Interactive Personalized Learning Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Content on Left */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                An Interactive Personalized Learning Experience
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                With AlphaDelving's flexible learning options and 1-on-1 code
                review with seasoned tutors, your learning is suited just for
                you.
              </p>
            </div>

            {/* Image on Right */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <img
                src="/1 2.png"
                alt="Interactive Learning"
                className="w-full max-w-lg h-auto"
              />
            </div>
          </div>

          {/* Feature 3: World-Class Learning with World-Class Jobs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image on Left */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/1 3.png"
                alt="World-Class Jobs"
                className="w-full max-w-lg h-auto"
              />
            </div>

            {/* Content on Right */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                World-Class Learning with World-Class Jobs
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                At AlphaDelving, we impact students with industry-standard skills
                and training. We also support them in getting jobs that are
                available from around the globe. How cool is that?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Tutorials Section */}
      {/* Top Section - Green Background */}
      <div className="bg-[#00A17F] h-[550px] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            QUICK TUTORIALS
          </h2>
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
            At AlphaDelving, acquire industry-relevant tech skills such as
            programming, software development, data science, cloud computing and
            more to become a <strong>world-class IT professional</strong>.
          </p>
        </div>

        {/* Middle Section - Main Illustration */}
        <div className=" w-full py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-lg p-4 md:p-6">
                <img
                  src="/quick tutorial 1 1.png"
                  alt="Quick Tutorial Learning Environment"
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute top-45 left-105 -translate-x-1/2 -translate-y-1/2  max-w-16">
                  <img
                    src="/play button.png"
                    alt="Quick Tutorial Learning Environment"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Features Include */}
      <div className="bg-white w-full py-12 md:py-20 mt-[200px]">
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

      {/* What People Are Saying Section - Pink Background */}
      <div className="bg-[#E10C72]  w-full py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-4xl font-bold text-white text-center ">
            What People Are Saying
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2  gap-12 ">
            {/* Left Side - Characters */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/features1.png"
                alt="Happy Users"
                className="w-full max-w-[300px] h-auto"
              />
            </div>

            {/* Right Side - Testimonial */}
            <div className="flex flex-col justify-center text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-10 mb-6">
                <p className="text-lg md:text-xl leading-relaxed mb-4">
                  "I took the python course using the mobile app and I found the
                  videos encouraging and helpful."
                </p>
                <p className="text-base md:text-lg font-semibold">- John Doe</p>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center lg:justify-start gap-2">
                <div className="w-2 h-2 rounded-full border-2 border-white"></div>
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full border-2 border-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download AlphaDelving App Section - Orange Background */}
      <div className="bg-[#FCBA4D] h-[500px] w-full py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-6">
            Download AlphaDelving App
          </h2>
          <p className="text-lg md:text-xl text-gray-800 text-center max-w-3xl mx-auto mb-12">
            Whether at home or on the go, AlphaDelving wants you to keep
            learning. Hence, the AlphaDelving app.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Side - Phone Images */}
            <div className="relative flex  justify-center lg:justify-start">
              <div className="relative">
                <img
                  src="/handphone.png"
                  alt="AlphaDelving App"
                  className="w-full max-w-60  h-auto relative z-10"
                />
              </div>
            </div>

            {/* Right Side - Phone Image and Google Play Button */}
            {/* Google Play Button */}
            <a href="#" className="inline-block">
              <img
                src="/google-play-badge 1.png"
                alt="GET IT ON Google Play"
                className="h-16 md:h-20 w-auto ml-25"
              />
            </a>

            <div className="flex flex-col items-center lg:items-end">
              <div className="relative mb-8">
                <img
                  src="/handphone2.png"
                  alt="AlphaDelving App Interface"
                  className="w-full max-w-60 h-auto relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
