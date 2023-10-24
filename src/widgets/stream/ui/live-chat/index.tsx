import React from 'react'

import SendIcon from '/public/icons/send.svg'

import { Message } from '~/entities/message'
import { TextField } from '~/shared/ui'

import styles from './styles.module.scss'
import { PlayController } from '~/features/stram-controller'

export const LiveChat = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.messages}>
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
        <TextField icon={{ src: SendIcon.src, alt: 'send' }} />
      </div>
      <div className={styles.footer}>
        <PlayController />
      </div>
    </>
  )
}
