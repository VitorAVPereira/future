import React from 'react';
import styles from './card.module.css'

export default function Card({titulo, valor}) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>{titulo}</h2>
                <p>R${valor}</p>
            </div>
        </div>
    );
}