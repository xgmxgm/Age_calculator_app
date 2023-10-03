import { forwardRef } from 'react';

import styles from './Button.module.scss';

interface IProps {
    imageSrc: string;
    altText: string;
    style?: React.CSSProperties;
    onClick?: () => void
}

export const Button = forwardRef<HTMLButtonElement, IProps> ((props, ref) => {
    const { imageSrc, onClick, altText, style } = props;

    return (
        <button ref={ref} onClick={onClick} className={styles.Button}>
            <img src={imageSrc} alt={altText} style={style} />
        </button>
    )
})