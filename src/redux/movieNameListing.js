import { createSlice } from "@reduxjs/toolkit";

const movieNameSlice = createSlice({
    name: "movieName",
    initialState: {
        movie: "Avengers"
    },
    reducers: {
        addMovieName: (state, action) => {
            const newMovieItem = {
                movie: action.payload.movie
            }
            // state = newMovieItem
            Object.assign(state, newMovieItem)

        }
    }
})

export const { addMovieName } = movieNameSlice.actions;
export default movieNameSlice.reducer