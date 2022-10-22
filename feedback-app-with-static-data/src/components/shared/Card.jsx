import PropTypes from 'prop-types'

const Card = ({ children, reverse }) => {
  const content = (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )

  //   const content = (
  //     <div
  //       className='card'
  //       style={{
  //         backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
  //         color: reverse ? '#fff' : '#000',
  //       }}
  //     >
  //       {children}
  //     </div>
  //   )

  return content
}

Card.defaultProps = {
  reverse: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card
