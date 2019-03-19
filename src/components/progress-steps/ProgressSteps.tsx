import React from 'react';
import styles from './progress-steps.module.css';
import { StepsInterface } from '../../types';

const steps: StepsInterface[] = [
    {
        active: true,
        complete: false,
        title: 'My Basket'
    },
    {
        active: false,
        complete: false,
        title: 'Delivery'
    },
    {
        active: false,
        complete: false,
        title: 'Payment'
    }
];

/**
 * Responsible for rendering the progress steps.
 * It has been split into a separate function to keep the markup clean.
 */
const renderSteps = () => {
    return steps.map((step, index) => {
        const activeClass = step.active ? styles.isActive : '';

        return (
            <div key={step.title} className={`${styles.step} ${activeClass}`}>
                <div className={styles.icon}>{index + 1}</div>
                <div className={styles.title}>{step.title}</div>
            </div>
        )
    })
};

const ProgressSteps = () => {
    return (
        <div className={styles.stepContainer}>
            {renderSteps()}
        </div>
    )
};

export default ProgressSteps;
