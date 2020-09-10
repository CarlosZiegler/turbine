import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import Navbar from '../../components/Navbar'
import MemberContainer from '../../components/MemberContainer'
import FieldInfo from '../../components/FieldInfo'
import LinkButton from '../../components/LinkButton'

import MemberImg from '../../assets/ziegler.svg'

import "./style.css"

export default function Home() {

    const [candidate, setCandidate] = useState(null)

    const fetchData = async () => {
        const { data: { personalDetails } } = await api.get("api/resume")
        setCandidate(personalDetails)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <Navbar />
            {candidate && <>
                <MemberContainer
                    color="#FEEE63"
                    title="Carlos Ricardo Ziegler"
                    subtitle="Developer"
                    picture={MemberImg}
                />
                <div className="contact-container">
                    <h3 className="contact-info-title">
                        Kontakte Daten:
                    </h3>
                    <FieldInfo
                        label="Vorname"
                        data={candidate.firstName}
                    />
                    <FieldInfo
                        label="Nachname"
                        data={candidate.lastName}
                    />
                    <FieldInfo
                        label="Email"
                        data={candidate.email}
                    />
                    <FieldInfo
                        label="Mobilnummer"
                        data={candidate.phoneNumber}
                    />
                    <FieldInfo
                        label="Linkedin-Profil"
                        data={candidate.links.linkedin}
                    />
                    <FieldInfo
                        label="Github-Profil"
                        data={candidate.links.github}
                    />
                </div>
                <div className="btn-group">
                    <LinkButton text="Weiter" target="/motivation" btnStyle="primary" />
                </div>
            </>}
        </>
    )
}
