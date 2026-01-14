import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

function CourseCard({ course, featured = false }) {
  return (
    <Link
      to={course.path}
      className={`group bg-white rounded-xl shadow-md overflow-hidden block hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative ${
        featured ? 'border-2 border-[#E54066]' : ''
      }`}
    >
      {/* Course Image with Gradient Overlay */}
      <div className="relative h-48 overflow-hidden">
        {course.image ? (
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div 
            className={`w-full h-full bg-gradient-to-br ${course.gradient}`}
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        {featured && (
          <div className="absolute top-3 right-3 bg-[#E54066] text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>

      <div className="p-5">
        {/* Title and Subtitle */}
        <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-[#E54066] transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          Master {course.skill}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="text-sm font-semibold text-gray-800">{course.rating}</span>
          </div>
          <span className="text-xs text-gray-500">({course.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-gray-400 line-through text-sm">₹{course.originalPrice}</span>
          <span className="text-xl font-bold text-[#E54066]">₹{course.price}</span>
          <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded">
            {course.discount}% OFF
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
            {course.duration}
          </span>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
            {course.level}
          </span>
        </div>

        {/* Enroll Button */}
        <Link
          to="/contact"
          onClick={(e) => e.stopPropagation()}
          className="block w-full bg-[#E54066] hover:bg-[#d53659] text-white font-semibold py-2.5 rounded-lg text-center transition-colors text-sm"
        >
          ENROLL NOW
        </Link>
      </div>

      {/* Shimmer Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </Link>
  )
}

export default CourseCard
