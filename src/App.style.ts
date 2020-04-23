import { createUseStyles } from 'react-jss'

export const useClasses = createUseStyles({
    dogDetails: {
        display: 'flex',
        justifyContent: 'center'
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
