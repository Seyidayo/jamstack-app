import React, { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks'

interface tokenInterface {
    token: string, setToken: void
}

export const TokenContext = createContext<tokenInterface | null>(null)

const TokenProvider = ({ children }: any) => {
    const [token, setToken] = useLocalStorage<string>('google:tokens', '')
    console.log([token])
    return (
        <TokenContext.Provider value={{ token, setToken }}>
            {children}
        </TokenContext.Provider>
    )
}

export default TokenProvider