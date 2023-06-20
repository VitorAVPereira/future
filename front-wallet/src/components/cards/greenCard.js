import React from 'react';
import EditButton from '../buttons/editButton';

export default function GreenCard({ title, content }) {
    return (
        <div className="ml-5 md:ml-16 mr-5 w-1/5 h-50 mt-5 bg-white backdrop-blur-lg rounded-lg p-4 flex items-start justify-between">
            <div className="flex flex-col">
                <div className="mb-1">
                    <h3 className="text-xm font-semibold">{title}</h3>
                </div>
                <div>
                    <p className="ml-1 text-3xl text-green-600">R$ {content}</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="self-end">
                    <EditButton content="logoEditButton.png" />
                </div>
            </div>
        </div>
    );
}