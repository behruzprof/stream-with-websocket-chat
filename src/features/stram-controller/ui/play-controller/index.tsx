import { useDispatch, useSelector } from 'react-redux'

import PlayIcon from '/public/icons/play.svg'
import PauseIcon from '/public/icons/pause.svg'

import { StreamPlayerModel } from '~/entities/stream-player'
import { IconButton } from '~/shared/ui/icon-button'


export const PlayController = () => {
    const dispatch = useDispatch()
    const isPaused = useSelector((state: RootState) => state.videoPlayer.isPaused)

    function togglePLayPause() {
        dispatch(StreamPlayerModel.setIsPaused(!isPaused))
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
