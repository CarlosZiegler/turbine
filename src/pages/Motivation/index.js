import React, { useEffect, useState } from 'react';
import moment from 'moment-business-days'

import Navbar from '../../components/Navbar'
import InfoContainer from '../../components/InfoContainer'
import LinkButton from '../../components/LinkButton'

import "./style.css"

export default function Home() {

    const [workDate, setWorkDate] = useState(null)
    const [date] = moment(moment(), "DD-MM-YYYY")
        .nextBusinessDay()
        ._d.toLocaleString("de")
        .split(",")

    useEffect(() => {
        date && setWorkDate(String(date))
    }, [])

    return (
        <>
            <Navbar />
            <div className="motivation-container">
                <h2 className="motivation-title">
                    Motivation:
                </h2>
                <InfoContainer
                    question="Warum in Turbine arbeiten?"
                    answer="Ihr Unternehmen arbeitet mit genau
                    den Technologien, auf die ich mich
                    konzentriere. Das moderne Interface
                    der Website hat mich sehr begeistert,
                    Teil Ihres Teams zu sein. Ich denke,
                    ich kann mich sehr professionell 
                    weiterentwickeln und dem Unternehmen 
                    sehr helfen. "
                />
                <InfoContainer
                    question="Warum du Carlos?"
                    answer="Ich bin ein Mensch, der sich sehr
                    für neue Technologien interessiert und immer 
                    bestrebt ist, sich als Mensch und Fachmann zu
                    verbessern. Ich bin sehr begierig zu arbeiten
                    und zu lernen."
                />
                <InfoContainer
                    question="Warum in Turbine arbeiten?"
                    code={`let gehalt = (min,max) =>{
                        return Math.random() * (max - min) + min;
                      }
                      gehalt(30.000, 40.000)
                      `}
                    answer="// Zwischen 30k und 40k per Jahr."
                />
                <InfoContainer
                    question="Möglichem Einstiegsdatum?"
                    answer={workDate}
                />
            </div>
            <div className="btn-group">
                <LinkButton text="Zurück" target="/" btnStyle="primary" />
            </div>

        </>
    )
}
