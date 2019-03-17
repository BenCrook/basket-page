import React from 'react';
import styles from './progress-steps.module.css';

interface StepsInterface {
    active: boolean,
    complete: boolean,
    title: string
}

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

const renderSteps = () => {
    return steps.map((step) => {
        return <div key={step.title} className={styles.step}>
            {step.title}
        </div>
    })
};

const ProgressSteps = () => {
    return (
        <div className={`container ${styles.stepContainer}`}>
            {renderSteps()}
        </div>
    )
};

export default ProgressSteps;