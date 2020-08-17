import PropTypes from 'prop-types'

const ThemeToggle = ({ onClick }) => (
  <div onClick={onClick} aria-hidden="true">
    Wola
  </div>
)

export default ThemeToggle

ThemeToggle.propTypes = {
  onClick: PropTypes.func.isRequired,
}
