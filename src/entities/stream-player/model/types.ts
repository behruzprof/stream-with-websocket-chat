export type StreamPlayerState = {
  streamName: string | null
  streamOwnerName: string | null
  src: string | null
  watching: number
  isLoading: boolean
  isPaused: boolean
  isFullScreen: boolean
  isScreenOnScreen: boolean
}
