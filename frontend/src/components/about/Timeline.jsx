import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Timeline({ milestones }) {
  const timelineRef = useRef(null)

  useEffect(() => {
    const timeline = timelineRef.current
    if (!timeline) return

    const items = timeline.querySelectorAll('.timeline-item')

    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
  }, [])

  return (
    <div ref={timelineRef} className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#1E40AF] to-[#3B82F6] hidden md:block"></div>

      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`timeline-item flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline Dot */}
            <div className="relative z-10 w-16 h-16 bg-[#1E40AF] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
              {milestone.year}
            </div>

            {/* Content Card */}
            <div
              className={`flex-1 bg-white rounded-xl shadow-lg p-6 ${
                index % 2 === 0 ? 'md:mr-auto md:max-w-md' : 'md:ml-auto md:max-w-md'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
              <p className="text-gray-600">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
