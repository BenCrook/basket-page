import React from 'react';
import styles from './button.module.css';

interface PropsInterface {
    children: any,
    type?: 'primary' | 'secondary',
    size?: 'medium' | 'large'
}

const Button = (props: PropsInterface) => {
    const type = props.type ? props.type : 'primary';
    const size = props.size ? props.size : 'medium';

    return (
        <button className={`${styles.button} ${styles[type]} ${styles[size]}`}>{props.children}</button>
    )
};

export default React.memo(Button);
