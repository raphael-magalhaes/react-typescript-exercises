export interface FormValues {
    beerName: string
    beerType: string
    hasCorn?: boolean
    ingredients: string
}

export interface FormErrors {
    beerName?: string
    beerType?: string
    ingredients?: string
}
