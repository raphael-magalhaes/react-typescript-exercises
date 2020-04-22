import { createUseStyles } from 'react-jss'

export const useClasses = createUseStyles({
    dogDetails: {
        display: 'flex',
        justifyContent: 'center'
    },
    createBeerForm: (isMdOrLower: boolean) => ({
        display: 'flex',
        justifyContent: isMdOrLower ? 'center' : 'flex-end'
    }),
    createBeerFormikForm: (isMdOrLower: boolean) => ({
        display: 'flex',
        justifyContent: isMdOrLower ? 'center' : 'flex-start'
    })
})
