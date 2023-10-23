import Image from 'next/image'
import { useState } from 'react'

import styles from './styles.module.scss'

const TEXT = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quibusdam optio fuga distinctio soluta exercitationem quam rerum iste illo repudiandae officia tenetur neque itaque minus eos cum est, dolores qui ipsa placeat unde nisi velit praesentium inventore! Suscipit quas facere animi ipsam, ad ab dolorum ipsa nihil atque dolore magnam.'

export const Message = () => {
  const { value: isTruncated, toggle } = useToggle(true)

  const truncatedText = TEXT.split(' ').slice(0, 20).join(' ') + '...'

  return (
    <div className={styles.message}>
      <div className={styles['message-header']}>
        <div className={styles['message-image']}>
          <Image width={40} height={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWR89EvH9ioXbj_sjTwDAroSfvJVyNaN6tOgTlUQVrgkMBcSjQUAW-RlficXlTSfPQR7Q&usqp=CAU" alt="" />
        </div>
        <div className={styles['message-author']}>
          <h5>
            Muhammadamin Shifler
          </h5>
          <h6>
            Menager
          </h6>
        </div>
      </div>
      <p className={styles['message-text']}>{isTruncated ? truncatedText : TEXT}<a onClick={toggle}>{isTruncated ? 'more' : 'hide'}</a></p>
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