import React from 'react';

export default function Resume({ setSection }) {
    return (
        <>
            <h1>Resume goes here</h1>
            <button onClick={setSection(null)}>Back</button>
        </>
    )
}