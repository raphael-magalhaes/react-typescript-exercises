import { createUseStyles } from 'react-jss'

export const useClasses = createUseStyles({
    container: {
        width: '15rem',
        padding: '0 2rem 1rem',
        backgroundColor: '#fafafa'
    },
    title: {
        margin: '0.5rem',
        fontSize: '4rem',
        color: '#424242'
    },
    image: {
        width: '100%',
        borderRadius: '50%'
    },
    button: {
        width: '7rem',
        height: '3rem',
        border: 0,
        fontSize: '1.5rem',
        backgroundColor: 'RoyalBlue',
        color: '#ffffff'
    }
})
