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
        console.log(personalDetails)
        setCandidate(personalDetails)
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {


    }, [candidate])

    return (
        <>
            <Navbar />
            {candidate && <>
                <MemberContainer
                    color="#FEEE63"
                    title="Carlos Ricardo Ziegler"
                    subtitle="Developer"
                    image={MemberImg}
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
                <LinkButton text="Weiter" target="/motivation" style="primary" />
            </>}
        </>
    )
}
