import { createUseStyles } from 'react-jss'

export const useClasses = createUseStyles({
    gridContainer: {
        // Overflow hidden reasoning: https://github.com/mui-org/material-ui/issues/7466
        overflow: 'hidden'
    },
    left: (isMdOrLower: boolean) => ({
        display: 'flex',
        justifyContent: isMdOrLower ? 'center' : 'flex-end'
    }),
    right: (isMdOrLower: boolean) => ({
        display: 'flex',
        justifyContent: isMdOrLower ? 'center' : 'flex-start'
    })
})
