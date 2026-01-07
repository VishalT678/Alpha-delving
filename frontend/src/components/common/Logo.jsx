import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-2xl md:text-3xl font-bold">
        <span className="text-[#0063A4]">Alpha</span>
        <span className="text-[#FF0B80]">Delving</span>
      </span>
    </Link>
  )
}

export default Logo

