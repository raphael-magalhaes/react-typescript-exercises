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
    actionButtonsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.5rem'
    },
    scoldButton: {
        width: '7.5rem'
    }
})
