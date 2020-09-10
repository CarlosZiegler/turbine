import React from 'react'
import { Link } from 'react-router-dom'

import "./style.css"

export default function LinkButton({ text, target, btnStyle }) {

    return (

        <Link to={target}>
            <span className={`btn ${btnStyle}`}>
                {text}
            </span>
        </Link>

    )
}
