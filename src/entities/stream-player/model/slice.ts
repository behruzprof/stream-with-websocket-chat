import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { StreamPlayerState } from './types'

const initialState: StreamPlayerState = {
  streamName: null,
  streamOwnerName: null,
  src: null,
  watching: 0,
  isLoading: true,
  isPaused: true,
  isFullScreen: false,
  isScreenOnScreen: false
}

export const streamPlayerSlice = createSlice({
  name: 'videoPlayer',
  initialState,
  reducers: {
    setStreamName(state, action: PayloadAction<string>) {
      return { ...state, streamName: action.payload }
    },
    setStreamOwnerName(state, action: PayloadAction<string>) {
      return { ...state, streamOwnerName: action.payload }
    },
    setSrc(state, action: PayloadAction<string>) {
      return { ...state, src: action.payload }
    },
    setWatching(state, action: PayloadAction<number>) {
      return { ...state, watching: action.payload }
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      return { ...state, isLoading: action.payload }
    },
    setIsPaused(state, action: PayloadAction<boolean>) {
      return { ...state, isPaused: action.payload }
    },
    setIsFullScreen(state, action: PayloadAction<boolean>) {
      return { ...state, isFullScreen: action.payload }
    },
    setIsScreenOnScreen(state, action: PayloadAction<boolean>) {
      return { ...state, isScreenOnScreen: action.payload }
    }
  }
})

export const {
  setStreamName,
  setStreamOwnerName,
  setSrc,
  setWatching,
  setIsLoading,
  setIsPaused,
  setIsFullScreen,
  setIsScreenOnScreen
} = streamPlayerSlice.actions
