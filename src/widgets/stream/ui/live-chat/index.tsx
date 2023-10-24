import { useEffect, useState } from 'react'
import io from 'socket.io-client';

import SendIcon from '/public/icons/send.svg'

import { PlayController } from '~/features/stram-controller'
import { Message } from '~/entities/message'
import { TextField } from '~/shared/ui'

import styles from './styles.module.scss'

const socket = io('http://localhost:3001', {
  autoConnect: true
});

export const LiveChat = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    socket.emit('chat message', {
      author: 'Muhammadamin Shifler',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWR89EvH9ioXbj_sjTwDAroSfvJVyNaN6tOgTlUQVrgkMBcSjQUAW-RlficXlTSfPQR7Q&usqp=CAU',
      job: 'manager',
      text: message
    });
    setMessage('')
  };

  useEffect(() => {
    const handleChatMessage = (msg: IMessage) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    };

    socket.on('chat message', handleChatMessage);

    return () => {
      socket.off('chat message', handleChatMessage);
    };
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.messages}>
          {messages.map((msg, idx) => (
            <Message key={idx} message={msg} />
          ))}
        </div>
        <TextField
          value={message}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          onChange={(e) => setMessage(e.target.value)}
          icon={{ src: SendIcon.src, alt: 'send', onClick: handleSendMessage }}
        />
      </div>
      <div className={styles.footer}>
        <PlayController />
      </div>
    </>
  )
}
