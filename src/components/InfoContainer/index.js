import React from 'react'

import "./style.css"

export default function InfoContainer({ question, answer, code }) {

    return (
        <article className="motivation">
            <p className="motivation-question">
                {question}
            </p>
            <div className="motivation-answer-container">
                <code className="motivation-answer-text">
                    {code}
                </code>
                <p className="motivation-answer-text">
                    {answer}
                </p>
            </div>
        </article>

    )
}
