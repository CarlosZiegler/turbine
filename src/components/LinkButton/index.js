import React from 'react'
import { Link } from 'react-router-dom'

import "./style.css"

export default function LinkButton({ text, target, style }) {

    return (

        <Link to={target}>
            <span className={`btn ${style}`}>
                {text}
            </span>
        </Link>

    )
}
