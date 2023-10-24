import { useDispatch, useSelector } from 'react-redux'

import PlayIcon from '/public/icons/play.svg'
import PauseIcon from '/public/icons/pause.svg'

import { StreamPlayerModel } from '~/entities/stream-player'
import { IconButton } from '~/shared/ui/icon-button'

interface PlayControllerProps {
    onPlay: () => void,
    onPause: () => void,
}

export const PlayController = ({ onPause, onPlay }: PlayControllerProps) => {
    const dispatch = useDispatch()
    const isPaused = useSelector((state: RootState) => state.videoPlayer.isPaused)

    function togglePLayPause() {
        dispatch(StreamPlayerModel.setIsPaused(!isPaused))
        if (isPaused) {
            onPlay()
        } else {
            onPause()
        }
    }

    return (
        <>
            {isPaused
                ? <IconButton icon={{ src: PlayIcon.src }} onClick={togglePLayPause} />
                : <IconButton icon={{ src: PauseIcon.src }} onClick={togglePLayPause} />
            }
        </>
    )
}
