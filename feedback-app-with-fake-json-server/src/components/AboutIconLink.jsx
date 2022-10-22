import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AboutIconLink = () => {
  const content = (
    <div className='about-link'>
      <Link to='/about'>
        <FaQuestion size={30} />
      </Link>
    </div>
  )

  return content
}

export default AboutIconLink
