export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]
export interface Database {
  public: {
    Tables: {
      data_services: {
        Row: {               // the data expected from .select()
          id: number
          name: string
          title: string
          description: string
          imageUrl: string 
          imageAlt: string
          wage: number
        }
        Insert: {            // the data to be passed to .insert()
          id?: never         // generated columns must not be supplied
          name: string       // `not null` columns with no default must be supplied
          data?: Json | null // nullable columns can be omitted
        }
        Update: {            // the data to be passed to .update()
          id?: never
          name?: string      // `not null` columns are optional on .update()
          data?: Json | null
        }
      }
    }
  }
}