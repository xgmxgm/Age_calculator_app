'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { GetAdvice } from '@/components/GetAdvice';
import styles from './AdviceCard.module.css'
import { Button } from '@/libs/ui/Button';
import { Loading } from '@/widgets/Loading';
import { AdviceType } from '@/components/GetAdvice/type';

export const AdviceCard = () => {
    const [adviceData, setAdviceData] = useState<null | AdviceType>(null);
    const [loading, setLoading] = useState<null | boolean>(null)

    const handleFunc = () => {
        setLoading(true)
        GetAdvice(setAdviceData).finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        handleFunc();
    }, [])

    return (
        <div className={styles.div__app}>
            <div className={styles.app}>
                <h4 className={styles.Id}>A D V I C E  #  {adviceData && adviceData.id}</h4>
                <div className={styles.Text}>
                    { !loading ?
                        adviceData && <h2 className={styles.h2}>"{adviceData.advice}"</h2> :
                        <Loading />
                    }
                </div>
                <div className={styles.Lines}>
                    <div className={styles.Line}></div>
                    <Image className={styles.Image} src="/pause.svg" width={25} height={25} alt='pause' />
                    <div className={styles.Line}></div>
                </div>
                <div className={styles.Bottom}>
                    <Button onClick={() => handleFunc()}><Image src="/dice.svg" width={35} height={35} alt='Dice'/></Button>
                </div>
            </div>
        </div>
    )
}
