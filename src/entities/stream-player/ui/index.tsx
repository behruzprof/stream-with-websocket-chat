import { ReactNode, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import { Layout } from './layout'

import styles from './styles.module.scss'
interface StreamPlayerProps {
    PlayController: ReactNode,
    OtherControllers: ReactNode[]
}

export const StreamPlayer = ({ PlayController, OtherControllers }: StreamPlayerProps) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const { isScreenOnScreen, isPaused } = useSelector((state: RootState) => state.videoPlayer)

    useEffect(() => {
        if (isPaused) {
            videoRef.current?.pause()
        } else {
            videoRef.current?.play()
        }
    }, [isPaused])

    return (
        <Layout screenOnScreen={isScreenOnScreen} video={
            <video
                ref={videoRef}
                className={styles.video}
                src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'>
            </video>
        }>
            <div className={styles.wrapper}>

                <div className={styles['played-controls']}>
                    {PlayController}
                    <div className={styles['right-controls']}>
                        {OtherControllers}
                    </div>
                </div>

            </div>

        </Layout>
    )
}