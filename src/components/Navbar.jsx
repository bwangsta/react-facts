import logo from "../assets/react-icon-small.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="React Logo" className="nav-logo"/>
            <h2 className="nav-title">ReactFacts</h2>
            <p className="nav-course">React Course - Project 1</p>
        </nav>
    )
}