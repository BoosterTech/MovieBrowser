export const fetchMovies = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjI2MDE5NmJjOWJiYjBkZjdiZDc0N2NmMDEzNTdjMCIsInN1YiI6IjY2MDAwZmZjNjJmMzM1MDE2NDUxNWJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5BdMVijb7g_8sAaxu9WLzzFLGen6qB1lNYLha-96Tw",
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(response.statusText);
      console.log("response error");
    }

    const { meta, results } = await response.json();

    return {
      state: "success",
      data: results,
    };
  } catch {
    return {
      state: "error",
    };
  }
};
