import { useParams } from "react-router-dom"

export default function Movie(){
    const params = useParams();
    return (
    <div>
        This is a list of movies
    </div>
    )
}
