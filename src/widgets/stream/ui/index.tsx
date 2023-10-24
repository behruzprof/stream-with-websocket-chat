
import { StreamPlayer } from '~/entities/stream-player'
import styles from './styles.module.scss'

import { PlayController } from '~/features/stram-controller'
import { FullScreenController, ScreenOnScreenController } from '~/features/stram-controller/ui'
import { LiveChat } from './live-chat'

export const Stream = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h5>Stream Name</h5>
                <h6>Stream Owner name</h6>
            </div>
            <div className={styles.content}>
                <div className={styles['content-left']}>
                    <StreamPlayer
                        PlayController={<PlayController/>}
                        OtherControllers={[<ScreenOnScreenController key={1} />, <FullScreenController key={2} />]}
                    />
                    <div className={styles.watching}>
                        13 445 watching...
                    </div>
                </div>
                <div className={styles['content-right']}>
                    <LiveChat />
                </div>
            </div>
        </div>
    )
}
