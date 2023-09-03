import { FC, type PropsWithChildren } from 'react'

import styles from './Layout.module.scss'
import { Header } from '@/widgets/Header'

export const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={ styles.Layout }>
            {/* <Header /> */}
            {children}
        </div>
    )
}