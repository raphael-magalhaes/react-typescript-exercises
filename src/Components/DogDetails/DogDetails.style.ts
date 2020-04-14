import { createUseStyles } from 'react-jss'

export const useClasses = createUseStyles({
    container: {
        width: '15rem',
        padding: '0 2rem',
        backgroundColor: '#fafafa'
    },
    title: {
        margin: '0rem',
        fontSize: '4rem',
        color: '#424242'
    },
    image: {
        width: '100%',
        height: '15rem',
        borderRadius: '50%'
    },
    actionButtonsContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    scoldButton: {
        width: '7.5rem'
    }
})
