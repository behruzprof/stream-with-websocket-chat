import Image from 'next/image'
import { useState } from 'react'

import styles from './styles.module.scss'

interface MessageProps {
  message: IMessage
}


export const Message = ({ message }: MessageProps) => {
  const { value: isShow, toggle } = useToggle(true)

  const isLarge = message.text.split('').length >= 40

  const truncatedText = message.text.split('').slice(0, 40).join('') + '...'

  return (
    <div className={styles.message}>
      <div className={styles['message-header']}>
        <div className={styles['message-image']}>
          <Image width={40} height={40} src={message.imageUrl} alt={message.author} />
        </div>
        <div className={styles['message-author']}>
          <h5>
            {message.author}
          </h5>
          <h6>
            {message.job}
          </h6>
        </div>
      </div>
      <p className={styles['message-text']}>{isLarge && isShow ? truncatedText : message.text}</p>
      {isLarge && <a onClick={toggle}>{isShow ? 'more' : 'hide'}</a>}
    </div>
  )
}

function useToggle(initValue: boolean) {
  const [value, setValue] = useState<boolean>(initValue)

  const toggle = () => setValue(v => !v)

  return {
    value,
    toggle
  }
}