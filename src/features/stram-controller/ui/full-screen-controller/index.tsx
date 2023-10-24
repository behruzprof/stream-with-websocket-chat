import { useDispatch, useSelector } from 'react-redux'


import ScreenDesktopIcon from '/public/icons/screen-desktop.svg'
import ScreenDisabledIcon from '/public/icons/screen-disabled.svg'

import { StreamPlayerModel } from '~/entities/stream-player'
import { IconButton } from '~/shared/ui/icon-button'
import { useEffect } from 'react'

export const FullScreenController = () => {
    const dispatch = useDispatch()
    const isFullScreen = useSelector((state: RootState) => state.videoPlayer.isFullScreen)


    async function toggleFullScreen() {
        if (!isFullScreen && !document.fullscreenElement) {
            await document.documentElement.requestFullscreen()
            dispatch(StreamPlayerModel.setIsFullScreen(true))
            dispatch(StreamPlayerModel.setIsScreenOnScreen(true))
        } else if (document.exitFullscreen && document.fullscreenElement) {
            await document.exitFullscreen()
            dispatch(StreamPlayerModel.setIsFullScreen(false))
            dispatch(StreamPlayerModel.setIsScreenOnScreen(false))
        }
    }

    useEffect(() => {
        const handleFullscreenChange = () => {
            if (document.fullscreenElement === null && isFullScreen) {          
                dispatch(StreamPlayerModel.setIsFullScreen(false));
            }
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, [isFullScreen])


    return (
        <>
            {isFullScreen
                ? <IconButton icon={{ src: ScreenDisabledIcon.src }} onClick={toggleFullScreen} />
                : <IconButton icon={{ src: ScreenDesktopIcon.src }} onClick={toggleFullScreen} />
            }
        </>
    )
}
