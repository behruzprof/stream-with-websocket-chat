import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';

import { appStore } from './store';

import '~/shared/styles/index.scss'

export const App = ({ Component, pageProps }: AppProps) => {
    return <Provider store={appStore}>
        <Component {...pageProps} />
    </Provider>
}