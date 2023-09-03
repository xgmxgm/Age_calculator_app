import { FC, useState } from 'react'

import styles from './HomePage.module.scss'
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'

import arrow from '../../../../../public/reshot-icon-arrow-upward-V2XFR4EU7Z.svg'

export const HomePage: FC = () => {

    // State Day

    const [Days, setDays] = useState<number | null>(null); // State for input
    const [DaysData, setDaysData] = useState<number | null>(null);

    // State Month

    const [month, setMonth] = useState<number | null>(null); // State for input
    const [MonthData, setMonthData] = useState<number | null>(null);

    // State Year

    const [years, setYears] = useState<number | null>(null); // State for input
    const [yearsData, setYearsData] = useState<number | null>(null);

    // State for Message

    const [message, setMessage] = useState<string>('')

    const currentDate = new Date();

    const endDate = new Date(currentDate);
    
    const getData = () => {
        if (years !== null && month !== null && Days !== null) {
            // set Time for endDate
    
            endDate.setFullYear(currentDate.getFullYear() - years);
            endDate.setMonth(currentDate.getMonth() - month + 1);
            endDate.setDate(currentDate.getDate() - Days);

            // Set states
    
            setYearsData(endDate.getFullYear());
            setMonthData(endDate.getMonth());
            setDaysData(endDate.getDate());

            setMessage('');

            setYears(null);
            setMonth(null);
            setDays(null);
        } else {
            setMessage("You didn't fill in the field!");
        }
    }

    return (
        <main className={styles.Home_Page}>
            <div className={`${styles.Message} ${message ? styles.Active : ''}`}>
                    <p>{message}</p>
            </div>
            <div className={styles.Main_up}>
                <Input inputVal={Days} setInputVal={setDays} placeholder='DD' text='DAY' />
                <Input inputVal={month} setInputVal={setMonth} placeholder='MM' text='MONTH' />
                <Input inputVal={years} setInputVal={setYears} placeholder='YYYY' text='YEAR' />
            </div>
            <div className={styles.Main_center}>
                <Button  onClick={getData} imageSrc={arrow} altText='arrow' style={{transform: 'rotate(180deg)'}} />
            </div>
            <div className={styles.Main_down}>
                <div className={styles.Text_Years}>
                    <h3>{yearsData ? yearsData : '--'}</h3>
                    <h2>years</h2>
                </div>
                <div className={styles.Text_Months}>
                    <h3>{MonthData ? MonthData : '--'}</h3>
                    <h2>months</h2>
                </div>
                <div className={styles.Text_Days}>
                    <h3>{DaysData ? DaysData : '--'}</h3>
                    <h2>days</h2>
                </div>
            </div>
        </main>
    )
}