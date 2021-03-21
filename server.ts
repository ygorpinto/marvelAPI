import 'express'

declare module 'express' {
    export interface bodyparser {

        OptionsJson : {
            extended : boolean
        }
    }
}
