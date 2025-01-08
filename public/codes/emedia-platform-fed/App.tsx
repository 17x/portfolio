import React, { FC, useEffect, useState } from 'react'
import LoadRouters from './routers/LoadRouters'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import ProtectedRouters from './routers/ProtectedRouters'
import { useDispatch, useSelector } from 'react-redux'
import { selectRouteList, selectUserData, setUserData } from './reduxs/global'
import { CircularProgress } from '@mui/material'
import styled from '@emotion/styled'
import { getUserProfile } from 'emedia-lib/API'

import unProtectedRouters from './routers/unProtectedRouters'

interface Props {

}

const App : FC<Props> = (props : Props) => {
    const userData = useSelector(selectUserData)
    const location = useLocation()
    const routeData = useSelector(selectRouteList)
    const [initialing, setInitialing] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        initAuth()
    }, [])

    const initAuth = async () => {
        // console.log('initAuth')
        try {

            const res = await getUserProfile()
            // console.log(res)
            if (res.status === 'success') {
                dispatch(setUserData(res.profiles))
            } else {
                // 未登錄
                // console.log('fi')
            }

        } catch(e) {

        }
        setInitialing(false)

        // console.log(res)
    }

    if (initialing) {
        const R = styled('div')`
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
        `

        return <R>
            <CircularProgress />
        </R>
    }

    const BaseRoute = () => <Routes>
        {
            unProtectedRouters.map(item => {
                return <Route key={ item.path }
                              path={ '/' + item.path }
                              element={ <item.comp /> }></Route>
            })
        }
    </Routes>

    // while guest
    // navigate to login
    if ( !userData) {
        // console.log(unProtectedRouters,location)
        let i = unProtectedRouters.findIndex(item => '/' + item.path === location.pathname)

        // console.log(i)
        if (i === -1) {
            return <Navigate to="/login"
                             state={ {from : location} }
                             replace={ true } />
        }

        return <BaseRoute />
    }

    // requesting route config
    if (routeData.length === 0) {
        return <LoadRouters />
    }

    return <>
        <ProtectedRouters />
        <BaseRoute />
    </>
}

export default App