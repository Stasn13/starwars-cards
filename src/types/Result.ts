import type { Card } from "./Card"

export type Result = {
    result: Card[]
    next: string | null
    previous: string | null
    total_pages: number
    total_records: number
}
