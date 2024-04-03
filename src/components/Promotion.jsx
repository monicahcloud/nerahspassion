import React from 'react'
import '../App.css';
import transfer from "../images/transfer.jpg"
const Promotion = () => {
    return (
        <div>
            <h1>Promotion Page</h1>
            <img
                className="grow"
                width="100"
                src={transfer} alt="new clients" />
        </div>
    )
}

export default Promotion
