import styles from './Input.module.scss';

interface IProps {
    placeholder: string;
    text: string;
    inputVal: number | null,
    setInputVal: (inputVal: number) => void,
}

export const Input = (props: IProps) => {
    const {placeholder, text, inputVal, setInputVal} = props;

    const handleInputChange = (event: any) => {
        setInputVal(event.target.value);
    };

    return (
        <div className={styles.Input_body}>
            <p>{text}</p>
            <input
                className={styles.Input}
                placeholder={placeholder}
                value={inputVal !== null ? inputVal.toString() : ''}
                onChange={handleInputChange}
                type="number"
            />
        </div>
    )
}