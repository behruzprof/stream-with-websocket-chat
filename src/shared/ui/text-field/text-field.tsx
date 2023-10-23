import { DetailedHTMLProps, ImgHTMLAttributes, InputHTMLAttributes, ReactElement, ReactNode } from "react"

import styles from './styles.module.scss'

interface TextFieldProps {
    icon?: Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'width' | 'height'>
}

type Props = TextFieldProps & InputHTMLAttributes<HTMLInputElement>

export const TextField = ({ className, icon, ...props }: Props) => {
    return (
        <div className={styles.wrapper}>
            <input
                placeholder="Type something"
                className={`${styles.input} ${className}`}
                {...props}
            />
            <div className={styles.icon}>
                <img {...icon} width='100%' />
            </div>
        </div>
    )
}
