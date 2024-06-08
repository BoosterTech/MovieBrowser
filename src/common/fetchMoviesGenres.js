import { API_AUTHORIZATION } from "./Global_Variables";

const fetchMovieGenres = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: API_AUTHORIZATION,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Response not OK");
    }

    const result = await response.json();
    const movieGenres_ids = result.genres.reduce((acc, genre) => {
      acc[genre.id] = genre.name;
      return acc;
    }, {});

    return movieGenres_ids;
  } catch (error) {
    console.error("Error fetching genres:", error);
  }
};

export const movieGenres_ids = fetchMovieGenres();

