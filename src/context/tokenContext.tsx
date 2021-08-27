import React, { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks'

export const TokenContext = createContext({})

const TokenProvider = ({ children }: any) => {
    const [token, setToken] = useLocalStorage<string>('google:tokens', '')

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            {children}
        </TokenContext.Provider>
    )
}

export default TokenProvider