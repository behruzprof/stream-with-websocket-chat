declare global {
  export interface IMessage {
    author: string,
    job: string,
    imageUrl: string,
    text: string
  }

  type AppDispatch = import('~/app/store').AppDispatch
  type RootState = import('~//app/store').RootState
}

declare module '*.module.scss'

export {}
