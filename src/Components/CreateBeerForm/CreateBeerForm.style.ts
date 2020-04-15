import { createUseStyles } from 'react-jss'

export const useClasses = createUseStyles({
    container: {
        width: '19rem',
        backgroundColor: '#fafafa'
    },
    title: {
        margin: 0,
        fontSize: '2rem',
        color: '#424242'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 1.5rem'
    },
    select: {
        textAlign: 'left'
    },
    checkboxContainer: {
        width: '8rem',
        color: '#727272'
    }
})
