import React from 'react'
import { ThemeProvider } from '@emotion/react'
import  CssBaseLine  from '@mui/material/CssBaseline'
import { purpleTheme } from './purpleTheme'


export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={purpleTheme}>

            <CssBaseLine />
            {children}
        </ThemeProvider>
    )
}
