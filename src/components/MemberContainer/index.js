import React from 'react'

import "./style.css"

export default function MemberContainer({ picture, color, title, subtitle }) {
    return (
        <article>
            <div className="member-container" style={{ backgroundColor: color }}>
                <img src={picture} alt={`photo ${title}`} className="member-image" />
            </div>
            <div className="member-labels">
                <p className="member-title">{title}</p>
                <p className="member-subtitle">{subtitle}</p>
            </div>
        </article>
    )
}
