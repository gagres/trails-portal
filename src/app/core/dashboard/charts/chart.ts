export interface Chart {
    type        : string
    data?       : Array<number> | number[]
    datasets?   : Array<{ data: Array<number> | number[], label: string }>
    labels?     : Array<any>
    options?    : any
    colors?     : Array<any>
    legend?     : boolean
    showLegend? : boolean

    click?(): void
    hover?(): void
}