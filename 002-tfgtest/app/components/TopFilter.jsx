import { DataFilter } from "./DataFilter"
export function TopFilter ({changeFilters}) {
    return (
        <header>
            <h1>React</h1>
            <DataFilter onChange={changeFilters}/>
        </header>
    )
}