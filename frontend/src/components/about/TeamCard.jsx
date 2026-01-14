import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

function TeamCard({ member }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -10,
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-2xl"
    >
      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex items-center justify-center text-5xl text-white font-bold">
        {member.avatar}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
      <p className="text-[#1E40AF] font-semibold mb-3">{member.role}</p>
      <p className="text-sm text-gray-600">{member.expertise}</p>
    </div>
  )
}

export default TeamCard
