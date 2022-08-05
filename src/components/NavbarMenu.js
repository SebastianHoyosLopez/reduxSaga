import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav style={{ display: "flex", justifyContent: "space-around"}}>
                <Link to="/">Home</Link>
                <Link to="pokebola">Pokebola</Link>
            </nav>
        </div>
    )
}

export default Navbar