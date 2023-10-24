
import { useDispatch, useSelector } from 'react-redux'

import ScreenFullIcon from '/public/icons/screen-full.svg'
import ScreenNormalIcon from '/public/icons/screen-normal.svg'

import { StreamPlayerModel } from '~/entities/stream-player'
import { IconButton } from '~/shared/ui/icon-button'

export const ScreenOnScreenController = () => {
    const dispatch = useDispatch()
    const { isScreenOnScreen } = useSelector((state: RootState) => state.videoPlayer)

    function toggleScreenSize() {
        dispatch(StreamPlayerModel.setIsScreenOnScreen(!isScreenOnScreen))
        if (!isScreenOnScreen) {
            dispatch(StreamPlayerModel.setIsFullScreen(false))
        }
    }
    return (
        <>
            {isScreenOnScreen
                ? <IconButton icon={{ src: ScreenFullIcon.src }} onClick={toggleScreenSize} />
                : <IconButton icon={{ src: ScreenNormalIcon.src }} onClick={toggleScreenSize} />
            }
        </>
    )
}
