import { FaStar, FaQuoteLeft } from 'react-icons/fa'

function Testimonial({ testimonial }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow h-full">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
      </div>
      <FaQuoteLeft className="text-[#E54066] text-2xl mb-3 opacity-50" />
      <p className="text-gray-700 mb-4 leading-relaxed italic">
        "{testimonial.text}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-[#E54066] to-[#FF6B9D] rounded-full flex items-center justify-center text-white font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-800">{testimonial.name}</p>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
          <p className="text-xs text-gray-500">{testimonial.company}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
