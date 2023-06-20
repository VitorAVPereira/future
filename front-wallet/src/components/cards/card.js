import React from 'react';

export default function Card({ title, content }) {
    return (
        <div className="ml-5 md:mr-16 mr-5 w-2/5 h-50 mt-5 bg-white backdrop-blur-lg rounded-lg p-4 flex items-center">
            <h3 className="text-3xl font-semibold mb-2 mr-5">{title}</h3>
            <p className="ml-auto">R$ {content}</p>
        </div>
    );
}