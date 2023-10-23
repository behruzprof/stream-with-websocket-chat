import { DetailedHTMLProps, HTMLAttributes, ImgHTMLAttributes } from 'react'

import styles from './styles.module.scss'

interface ButtonProps {
    icon: Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'width' | 'height'>
}

type Props = ButtonProps & HTMLAttributes<HTMLButtonElement>

export const IconButton = ({ icon, className, ...props }: Props) => {
    return (
        <button className={`${styles.button} ${className}`} {...props}>
            <img {...icon} width={'25px'} />
        </button>
    )
}
