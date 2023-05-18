
import jsonData from '../../json/posts.json'

export default function TripPage ({params}) {

    const { id } = params

    const datosFiltrados = jsonData.filter(item => item.id === id);
    return (
        <div>
            {datosFiltrados.map(item=> (
                <h2>{item.body}</h2>
            ))}
        </div>
    )
}