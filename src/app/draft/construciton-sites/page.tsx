'use client';
import axios from 'axios';
import React from 'react';
export default function Page() {
    const [construction, setConstruction] = React.useState([]);
    const getConstruction = async () =>{
        const constructionResponse = await axios.get(
            'http://localhost:8080/api/constructions'
        )
        setConstruction(constructionResponse.data);
    }
    React.useEffect(()=>{
        getConstruction();
    }, []);
    console.log(construction);
    return (
        <h1>Hello</h1>
    )
}