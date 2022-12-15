import PropTypes from 'prop-types'

const Button = ({text, background, color}) => {
  return (
    <div>
        <button className={`${background} ${color}`}>
            {text}
        </button>
    </div>
  )
}

Button.defaultProps = {
    color: '#F9BC60'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    background: PropTypes.string
}

export default Button