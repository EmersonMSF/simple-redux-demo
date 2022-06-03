import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addMovieName } from "../redux/movieNameListing"


export default function FirstChild() {

    const [movieName, setMovieName] = useState("")
    const currentMovieName = useSelector((state) => state.movie.movie)

    const dispatch = useDispatch()

    return (
        <div className="content_center">
            <input placeholder="Movie name"
                onInput={(event) => {
                    setMovieName(event.target.value)
                }}
                onKeyDown={(event) => {
                    if (event.key == "Enter") {
                        dispatch(
                            addMovieName({
                                movie: event.target.value
                            })
                        )
                    }
                }}
            />
            <p>Current Movie name : {currentMovieName}</p>
        </div>
    )
}