import logo from "../assets/react.svg"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="React Logo"/>
            <h2>ReactFacts</h2>
            <p>React Course - Project 1</p>
        </nav>
    )
}