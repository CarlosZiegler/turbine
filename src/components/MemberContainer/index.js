import React from 'react'

import "./style.css"

export default function MemberContainer({ image, color, title, subtitle }) {
    return (
        <article>
            <div className="member-container" style={{ backgroundColor: color }}>
                <img src={image} alt={`photo ${title}`} className="member-image" />
            </div>
            <div className="member-labels">
                <h2 className="member-title">{title}</h2>
                <h3 className="member-subtitle">{subtitle}</h3>
            </div>
        </article>
    )
}
