import { useSelector } from 'react-redux'
import styles from './styles.module.scss'

export const StreamPlayer = () => {
    const { isLoading } = useSelector((state: RootState) => state.videoPlayer)

    if (isLoading) return <p>Loading...</p>

    return (
        <video
            className={styles.video}
            controls
            src='https://res.cloudinary.com/dssvrf9oz/video/upload/v1635662987/pexels-pavel-danilyuk-5359634_1_gmixla.mp4'></video>
    )
}