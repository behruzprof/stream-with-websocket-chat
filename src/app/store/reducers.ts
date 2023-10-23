import { combineReducers } from '@reduxjs/toolkit'
import { StreamPlayerModel } from '~/entities/stream-player'

export const rootReducer = combineReducers({
  [StreamPlayerModel.streamPlayerSlice.name]:
    StreamPlayerModel.streamPlayerSlice.reducer
})
