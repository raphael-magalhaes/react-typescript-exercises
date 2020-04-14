import React from 'react'
import { SpacerProps } from './Spacer.type'
import { useClasses } from './Spacer.style'

export const Spacer = ({
    width = 0,
    height = 1,
    unit = 'rem'
}: SpacerProps) => {
    const styles = useClasses({ width, height, unit })
    return <div className={styles.container} />
}
