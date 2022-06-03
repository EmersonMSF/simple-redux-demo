import { useSelector } from "react-redux"

export default function SecondChild() {

    const currentMovieName = useSelector((state) => state.movie.movie)


    return (
        <div>
            <p>Current Movie name : {currentMovieName}</p>
        </div>
    )
}