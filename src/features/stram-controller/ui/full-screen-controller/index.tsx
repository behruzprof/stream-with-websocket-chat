import { useDispatch, useSelector } from 'react-redux'


import ScreenDesktopIcon from '/public/icons/screen-desktop.svg'
import ScreenDisabledIcon from '/public/icons/screen-disabled.svg'

import { StreamPlayerModel } from '~/entities/stream-player'
import { IconButton } from '~/shared/ui/icon-button'

export const FullScreenController = () => {
    const dispatch = useDispatch()
    const isFullScreen = useSelector((state: RootState) => state.videoPlayer.isFullScreen)

    function toggleFullScreen() {
        if (isFullScreen && !document.fullscreenElement) {
            document.documentElement.requestFullscreen()
            dispatch(StreamPlayerModel.setIsScreenOnScreen(true))
        } else if (document.exitFullscreen) {
            document.exitFullscreen()
            dispatch(StreamPlayerModel.setIsScreenOnScreen(false))
        }
        dispatch(StreamPlayerModel.setIsFullScreen(!isFullScreen))
    }


    return (
        <>
            {isFullScreen
                ? <IconButton icon={{ src: ScreenDisabledIcon.src }} onClick={toggleFullScreen} />
                : <IconButton icon={{ src: ScreenDesktopIcon.src }} onClick={toggleFullScreen} />
            }
        </>
    )
}
