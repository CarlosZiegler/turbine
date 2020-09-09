import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Home() {

    const [data1, setData1] = useState(null)

    const fetchData = async () => {
        const { data: { personalDetails } } = await api.get("api/resume")
        console.log(personalDetails)
        setData1(personalDetails)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {data1 && <>
                {data1.firstName}
            </>}
        </div>
    )
}
