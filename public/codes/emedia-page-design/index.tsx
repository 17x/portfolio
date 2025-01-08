import React from 'react'
import App from './App'
import resetCss from 'core/style/reset.css'
import commonCss from 'core/style/common.scss'
import currentStyle from './style.scss'
import ckStyle from 'core/style/ckeditor.css'
import store from './redux/store'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import toastifyStyle from 'react-toastify/dist/ReactToastify.css'
import swiperCss from 'swiper/css'
import swiperNavigationCss from 'swiper/css/navigation'
import swiperPaginationCss from 'swiper/css/pagination'

/** @jsx jsx */
// noinspection ES6UnusedImports
import { jsx, css, Global } from '@emotion/react'
import { ToastContainer } from 'react-toastify'
import { StyledEngineProvider } from '@mui/material'

const root = createRoot(
    document.getElementById('root')
)

root.render(
    <Provider store={ store }>
        <ToastContainer />

        <Global styles={ css`${ resetCss }` } />
        <Global styles={ css`${ commonCss }` } />
        <Global styles={ css`${ currentStyle }` } />
        <Global styles={ css`${ toastifyStyle }` } />
        <Global styles={ css`${ swiperCss }` } />
        <Global styles={ css`${ ckStyle }` } />
        <Global styles={ css`${ swiperNavigationCss }` } />
        <Global styles={ css`${ swiperPaginationCss }` } />

        <StyledEngineProvider injectFirst>
            <App />
        </StyledEngineProvider>
    </Provider>
)

