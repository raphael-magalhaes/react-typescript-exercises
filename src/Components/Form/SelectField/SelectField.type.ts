export interface SelectFieldProps {
    name: string
    label: string
    items: Item[]
    helperText?: string
}

interface Item {
    value: number | string
    text: string
}
