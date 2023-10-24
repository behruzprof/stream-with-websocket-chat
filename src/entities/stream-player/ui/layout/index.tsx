import { PropsWithChildren, ReactElement } from 'react'

import styles from './styles.module.scss'

interface LayoutProps {
    video: ReactElement
    screenOnScreen?: boolean
}

type Props = LayoutProps & PropsWithChildren

export const Layout = ({ screenOnScreen, video, children }: Props) => {
    return (
        <div className={`${styles.layout} ${screenOnScreen ? styles.active : ''}`}>
            <div className={styles.wrapper}>
                {video}
                <div className={styles.controls}>
                    {children}
                </div>
            </div>
        </div>
    )
}
