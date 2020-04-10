import { Notification } from './Notification'

window.alert = jest.fn()

describe('Notification', () => {
    it('Notification.alert() should forward the message received to window.alert() without altering it', () => {
        // When
        Notification.alert('hello')

        // Then
        expect(window.alert).toHaveBeenCalled()
    })
})
