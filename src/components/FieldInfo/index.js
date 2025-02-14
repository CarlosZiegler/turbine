import React from 'react'

import "./style.css"

export default function FieldInfo({ label, data }) {

    return (
        <div className="field-info">
            <label className="field-label">{label}</label>
            <a href={data.includes("://") ? data : "#"}>
                <p className="field-data">{data}</p>
            </a>
        </div>
    )
}
