const Header = ({ title }) => {

  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

// Title when there is not one defined
Header.defaultProps = {
  title: "Default Title"
}

export default Header;