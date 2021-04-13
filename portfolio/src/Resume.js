import React from 'react';

export default function Resume({ section }) {
    return (
        <>
            {section === 'resume' && (
                <div className="resume-container">
                    <h1>Resume gonna go here</h1>
                </div>
            )}
        </>
    )
}