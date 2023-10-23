declare global {
  type AppDispatch = import('~/app/store').AppDispatch
  type RootState = import('~//app/store').RootState
}

declare module '*.module.scss'

export {}
