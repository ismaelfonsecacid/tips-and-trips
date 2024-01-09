import { DataFilter } from "./DataFilter"
export function TopFilter ({changeFilters}) {
    return (
        <header>
            <br />
            <DataFilter onChange={changeFilters}/>
        </header>
    )
}