import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import CourseCard from "../components/courses/CourseCard";
import Testimonial from "../components/courses/Testimonial";
import { FaStar, FaChevronLeft, FaChevronRight, FaBrain, FaCode, FaBullhorn, FaBriefcase, FaServer, FaIndustry, FaHandshake, FaLaptop, FaGraduationCap, FaUsers, FaCertificate, FaClock, FaTrophy } from 'react-icons/fa';

function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tech"); // Initial filter set to "Tech"
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const searchInputRef = useRef(null);

  // All courses data
  const allCourses = [
    {
      id: 1,
      title: "Big Data Analytics",
      skill: "Data Analytics",
      path: "/courses/big-data-analytics",
      rating: 4.8,
      reviews: "1.2k",
      originalPrice: "15,999",
      price: "4,999",
      discount: 70,
      duration: "12 Weeks",
      level: "Intermediate",
      gradient: "from-blue-500 to-cyan-500",
      category: "Tech",
      image: "/programming 1.png"
    },
    {
      id: 2,
      title: "Full Stack Development",
      skill: "MERN Stack",
      path: "/courses/full-stack-development",
      rating: 4.9,
      reviews: "1.5k",
      originalPrice: "18,999",
      price: "5,499",
      discount: 71,
      duration: "6 Months",
      level: "Intermediate",
      gradient: "from-pink-500 to-rose-500",
      category: "Tech",
      image: "/programming 1.png"
    },
    {
      id: 3,
      title: "Digital Marketing",
      skill: "Marketing",
      path: "/courses/digital-marketing",
      rating: 4.8,
      reviews: "900",
      originalPrice: "16,999",
      price: "4,999",
      discount: 71,
      duration: "6 Months",
      level: "Beginner",
      gradient: "from-green-500 to-emerald-500",
      category: "Business",
      image: "/programming 1.png"
    },
    {
      id: 4,
      title: "Introduction to Programming",
      skill: "Programming",
      path: "/courses/introduction-to-programming",
      rating: 4.7,
      reviews: "800",
      originalPrice: "12,999",
      price: "3,999",
      discount: 69,
      duration: "3 Weeks",
      level: "Beginner",
      gradient: "from-yellow-500 to-orange-500",
      category: "Tech",
      image: "/courses2 1.png"
    },
    {
      id: 5,
      title: "Frontend Development",
      skill: "Frontend",
      path: "/courses/frontend-development",
      rating: 4.8,
      reviews: "1.1k",
      originalPrice: "14,999",
      price: "4,499",
      discount: 70,
      duration: "4 Months",
      level: "Intermediate",
      gradient: "from-purple-500 to-indigo-500",
      category: "Tech",
      image: "/courses3 1.png"
    },
    {
      id: 6,
      title: "UI / UX Designing",
      skill: "Design",
      path: "/courses/ui-ux-designing",
      rating: 4.9,
      reviews: "600",
      originalPrice: "15,999",
      price: "4,999",
      discount: 69,
      duration: "5 Months",
      level: "Beginner",
      gradient: "from-pink-400 to-purple-400",
      category: "Design",
      image: "/courses3 2.png"
    },
    {
      id: 7,
      title: "SQL Programming",
      skill: "Database",
      path: "/courses/sql-programming",
      rating: 4.7,
      reviews: "700",
      originalPrice: "13,999",
      price: "3,999",
      discount: 71,
      duration: "8 Weeks",
      level: "Beginner",
      gradient: "from-blue-400 to-teal-400",
      category: "Tech",
      image: "/programming 1.png"
    }
  ];

  const featuredCourses = allCourses.slice(0, 4);
  const trendingCourses = allCourses.slice(0, 4);

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Software Engineer",
      company: "TCS",
      rating: 5,
      text: "Alphademy transformed my career! The courses are comprehensive and the instructors are industry experts. I landed my dream job within 3 months of completing the Full Stack course."
    },
    {
      name: "Priya Patel",
      role: "Data Analyst",
      company: "Infosys",
      rating: 5,
      text: "The Big Data Analytics course exceeded my expectations. The hands-on projects and one-on-one mentorship helped me master complex concepts. Highly recommended!"
    },
    {
      name: "Amit Kumar",
      role: "Digital Marketer",
      company: "Wipro",
      rating: 5,
      text: "Best investment in my career! The Digital Marketing course covers everything from SEO to paid ads. The placement assistance helped me get multiple job offers."
    }
  ];

  const categories = [
    { name: "Big Data", icon: FaBrain, color: "bg-blue-100 text-blue-700 border-blue-300", path: "/courses/big-data-analytics" },
    { name: "Full Stack", icon: FaCode, color: "bg-pink-100 text-pink-700 border-pink-300", path: "/courses/full-stack-development" },
    { name: "Digital Marketing", icon: FaBullhorn, color: "bg-green-100 text-green-700 border-green-300", path: "/courses/digital-marketing" },
    { name: "Job Assistance", icon: FaBriefcase, color: "bg-yellow-100 text-yellow-700 border-yellow-300", path: "/contact" },
    { name: "Placement Training", icon: FaServer, color: "bg-purple-100 text-purple-700 border-purple-300", path: "/placements" },
    { name: "Industry Ready", icon: FaGraduationCap, color: "bg-cyan-100 text-cyan-700 border-cyan-300", path: "/contact" }
  ];

  const features = [
    {
      icon: FaUsers,
      title: "10K+ Students",
      description: "Join thousands of successful learners"
    },
    {
      icon: FaCertificate,
      title: "Industry Certificates",
      description: "Get recognized certificates"
    },
    {
      icon: FaClock,
      title: "Flexible Learning",
      description: "Learn at your own pace"
    },
    {
      icon: FaTrophy,
      title: "95% Placement",
      description: "Get placed in top companies"
    }
  ];

  // Filter courses based on search and category
  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.skill.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Auto-rotate featured courses
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % featuredCourses.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredCourses.length]);

  // Search bar glow effect
  useEffect(() => {
    const input = searchInputRef.current;
    if (!input) return;

    const handleFocus = () => {
      input.classList.add('ring-2', 'ring-[#0F75BC]', 'ring-opacity-50');
    };
    const handleBlur = () => {
      input.classList.remove('ring-2', 'ring-[#0F75BC]', 'ring-opacity-50');
    };

    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);

    return () => {
      input.removeEventListener('focus', handleFocus);
      input.removeEventListener('blur', handleBlur);
    };
  }, []);

  return (
    <>
      {/* SEO Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Alphademy",
            "description": "Discover your dream career path with industry-leading courses",
            "course": allCourses.slice(0, 5).map(course => ({
              "@type": "Course",
              "name": course.title,
              "description": `Master ${course.skill}`,
              "provider": {
                "@type": "Organization",
                "name": "Alphademy"
              },
              "offers": {
                "@type": "Offer",
                "price": course.price,
                "priceCurrency": "INR"
              }
            }))
          })
        }}
      />

      <div className="bg-[#F9EDE3] min-h-screen">
        <Nav />

        {/* Enhanced Hero / Search Section */}
        <section className="w-full py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            {/* New H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-6 leading-tight">
              Discover Your Dream Career Path
            </h1>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-8 text-center">
              <div className="flex items-center gap-2">
                <FaUsers className="text-[#0F75BC] text-xl" />
                <span className="text-lg font-semibold text-gray-800">10K+ Students</span>
              </div>
              <span className="text-gray-400">|</span>
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-[#E54066] text-xl" />
                <span className="text-lg font-semibold text-gray-800">50+ Courses</span>
              </div>
              <span className="text-gray-400">|</span>
              <div className="flex items-center gap-2">
                <FaTrophy className="text-[#00A17F] text-xl" />
                <span className="text-lg font-semibold text-gray-800">95% Placement</span>
              </div>
            </div>

            {/* Search Bar with Animation */}
            <div className="max-w-3xl mx-auto mb-6">
              <div className="flex items-center gap-2 w-full bg-white rounded-lg shadow-md border-2 border-gray-200 px-4 py-3 transition-all duration-300 hover:border-[#0F75BC]">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-base text-gray-700 outline-none"
                />
                <button className="bg-[#E54066] text-white px-4 py-2 rounded-md hover:bg-[#d53659] transition-colors">
                  🔍
                </button>
              </div>
              <p className="text-sm text-gray-600 text-center mt-2">
                Find the right course for your learning path.
              </p>
            </div>

            {/* Category Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === "All"
                    ? "bg-[#0F75BC] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedCategory("Tech")}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === "Tech"
                    ? "bg-[#0F75BC] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Tech
              </button>
              <button
                onClick={() => setSelectedCategory("Business")}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === "Business"
                    ? "bg-[#0F75BC] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Business
              </button>
              <button
                onClick={() => setSelectedCategory("Design")}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === "Design"
                    ? "bg-[#0F75BC] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Design
              </button>
            </div>

            {/* Featured Courses Carousel - Industry Level Design */}
            <div className="relative max-w-5xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Featured Courses
              </h2>
              <div className="relative">
                <div className="bg-white rounded-2xl border-2 border-red-500 shadow-2xl overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${featuredIndex * 100}%)` }}
                  >
                    {featuredCourses.map((course) => (
                      <div key={course.id} className="min-w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                          {/* Left Side - Course Image */}
                          <div className="relative">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                              Featured
                            </div>
                          </div>

                          {/* Right Side - Course Details */}
                          <div className="p-8 bg-white">
                            <div className="flex items-center justify-between mb-4">
                              <button
                                onClick={() => setFeaturedIndex((prev) => (prev - 1 + featuredCourses.length) % featuredCourses.length)}
                                className="text-[#0F75BC] hover:text-[#0d659f] transition-colors"
                              >
                                <FaChevronLeft className="text-2xl" />
                              </button>
                              <button
                                onClick={() => setFeaturedIndex((prev) => (prev + 1) % featuredCourses.length)}
                                className="text-[#0F75BC] hover:text-[#0d659f] transition-colors"
                              >
                                <FaChevronRight className="text-2xl" />
                              </button>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                              {course.title}
                            </h3>
                            <p className="text-lg text-gray-600 mb-4">Master {course.skill}</p>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-4">
                              <FaStar className="text-yellow-400 text-xl" />
                              <span className="text-lg font-bold text-gray-800">{course.rating}</span>
                              <span className="text-gray-600">({course.reviews})</span>
                            </div>

                            {/* Pricing */}
                            <div className="flex items-baseline gap-3 mb-4">
                              <span className="text-gray-400 line-through text-lg">₹{course.originalPrice}</span>
                              <span className="text-3xl font-bold text-red-600">₹{course.price}</span>
                              <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-bold">
                                {course.discount}% OFF
                              </span>
                            </div>

                            {/* Duration and Level Badges */}
                            <div className="flex gap-3 mb-6">
                              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                                {course.duration}
                              </span>
                              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                                {course.level}
                              </span>
                            </div>

                            {/* Enroll Button */}
                            <Link
                              to={course.path}
                              className="block w-full bg-[#E54066] hover:bg-[#d53659] text-white font-bold py-4 rounded-lg text-center transition-colors text-lg"
                            >
                              ENROLL NOW
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {featuredCourses.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setFeaturedIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === featuredIndex ? "bg-red-500 w-8" : "bg-gray-300 w-2"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Original Illustration - KEEP EXACTLY SAME */}
            <div className="flex justify-center lg:justify-end mt-8">
              <img
                src="/courses1 1.png"
                alt="Search illustration"
                className="w-full max-w-xl h-auto"
              />
            </div>
          </div>
        </section>

        {/* Trending Now Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-3">
                🔥 Trending Now
              </h2>
              <Link to="/courses" className="text-[#0F75BC] font-semibold hover:underline">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-4">
              {trendingCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>

        {/* Top Categories Section */}
        <section className="bg-[#F9EDE3] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              🏆 Top Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Link
                    key={index}
                    to={category.path}
                    className={`${category.color} border-2 rounded-xl p-6 text-center hover:scale-105 transition-transform cursor-pointer`}
                  >
                    <Icon className="text-3xl mx-auto mb-3" />
                    <p className="font-semibold text-sm">{category.name}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              📈 Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Alphademy Section */}
        <section className="bg-[#F9EDE3] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              🎯 Why Alphademy?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#E54066] to-[#FF6B9D] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Filter Results Section - Show filtered courses */}
        {(searchQuery || selectedCategory !== "All") && (
          <section className="bg-white py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {searchQuery 
                    ? `Search Results for "${searchQuery}"` 
                    : `${selectedCategory} Courses (${filteredCourses.length} found)`
                  }
                </h2>
                {(searchQuery || selectedCategory !== "All") && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("Tech");
                    }}
                    className="text-[#0F75BC] font-semibold hover:underline"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600 mb-4">No courses found matching your search.</p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("Tech");
                    }}
                    className="bg-[#0F75BC] text-white px-6 py-2 rounded-lg hover:bg-[#0d659f] transition-colors"
                  >
                    View All Courses
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Original Courses Grid Section - KEEP EXACTLY SAME - Only show when no search and All selected */}
        {!searchQuery && selectedCategory === "All" && (
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
        )}
      </div>

      <Footer />
    </>
  );
}

export default Courses;
