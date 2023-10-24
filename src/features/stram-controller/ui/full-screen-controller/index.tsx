import { useDispatch, useSelector } from 'react-redux'


import ScreenDesktopIcon from '/public/icons/screen-desktop.svg'
import ScreenDisabledIcon from '/public/icons/screen-disabled.svg'

import { StreamPlayerModel } from '~/entities/stream-player'
import { IconButton } from '~/shared/ui/icon-button'

export const FullScreenController = () => {
    const dispatch = useDispatch()
    const isFullScreen = useSelector((state: RootState) => state.videoPlayer.isFullScreen)

    function toggleFullScreen() {
        if (!isFullScreen && !document.fullscreenElement) {
            dispatch(StreamPlayerModel.setIsFullScreen(true))
            dispatch(StreamPlayerModel.setIsScreenOnScreen(true))
            document.documentElement.requestFullscreen()
        } else if (document.exitFullscreen) {
            document.exitFullscreen()
            dispatch(StreamPlayerModel.setIsFullScreen(false))
            dispatch(StreamPlayerModel.setIsScreenOnScreen(false))
        }
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
