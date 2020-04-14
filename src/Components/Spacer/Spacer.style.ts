import { createUseStyles } from 'react-jss'
import { SpacerProps } from './Spacer.type'

export const useClasses = createUseStyles({
    container: ({ width, height, unit }: SpacerProps) => ({
        width: `${width}${unit}`,
        height: `${height}${unit}`
    })
})
